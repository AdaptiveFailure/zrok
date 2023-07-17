package sdk

import (
	httptransport "github.com/go-openapi/runtime/client"
	"github.com/openziti/zrok/environment/env_core"
	"github.com/openziti/zrok/rest_client_zrok/share"
	"github.com/openziti/zrok/rest_model_zrok"
	"github.com/pkg/errors"
	"strings"
)

type Share struct {
	Token string
}

func CreateShare(root env_core.Root, request *ShareRequest) (*Share, error) {
	var err error
	var out *share.ShareParams

	switch request.ShareMode {
	case PrivateShareMode:
		out = newPrivateShare(root, request)
	case PublicShareMode:
		out = newPublicShare(root, request)
	default:
		return nil, errors.Errorf("unknown share mode '%v'", request.ShareMode)
	}

	if len(request.Auth) > 0 {
		out.Body.AuthScheme = string(Basic)
		for _, pair := range request.Auth {
			tokens := strings.Split(pair, ":")
			if len(tokens) == 2 {
				out.Body.AuthUsers = append(out.Body.AuthUsers, &rest_model_zrok.AuthUser{Username: strings.TrimSpace(tokens[0]), Password: strings.TrimSpace(tokens[1])})
			} else {
				return nil, errors.Errorf("invalid username:password pair '%v'", pair)
			}
		}
	}

	zrok, err := root.Client()
	if err != nil {
		return nil, errors.Wrap(err, "error getting zrok client")
	}
	auth := httptransport.APIKeyAuth("X-TOKEN", "header", root.Environment().Token)

	in, err := zrok.Share.Share(out, auth)
	if err != nil {
		return nil, errors.Wrap(err, "unable to create share")
	}

	return &Share{Token: in.Payload.ShrToken}, nil
}

func newPrivateShare(root env_core.Root, request *ShareRequest) *share.ShareParams {
	req := share.NewShareParams()
	req.Body = &rest_model_zrok.ShareRequest{
		EnvZID:               root.Environment().ZitiIdentity,
		ShareMode:            string(request.ShareMode),
		BackendMode:          string(request.BackendMode),
		BackendProxyEndpoint: request.Target,
		AuthScheme:           string(None),
	}
	return req
}

func newPublicShare(root env_core.Root, request *ShareRequest) *share.ShareParams {
	req := share.NewShareParams()
	req.Body = &rest_model_zrok.ShareRequest{
		EnvZID:               root.Environment().ZitiIdentity,
		ShareMode:            string(request.ShareMode),
		FrontendSelection:    request.Frontends,
		BackendMode:          string(request.BackendMode),
		BackendProxyEndpoint: request.Target,
		AuthScheme:           string(None),
	}
	return req
}

func DeleteShare(root env_core.Root, shrToken string) error {
	req := share.NewUnshareParams()
	req.Body = &rest_model_zrok.UnshareRequest{
		EnvZID:   root.Environment().ZitiIdentity,
		ShrToken: shrToken,
	}

	zrok, err := root.Client()
	if err != nil {
		return errors.Wrap(err, "error getting zrok client")
	}
	auth := httptransport.APIKeyAuth("X-TOKEN", "header", root.Environment().Token)

	_, err = zrok.Share.Unshare(req, auth)
	if err != nil {
		return errors.Wrap(err, "error deleting share")
	}
	return nil
}
