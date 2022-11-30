package controller

import (
	"context"
	"fmt"
	"github.com/go-openapi/runtime/middleware"
	"github.com/openziti-test-kitchen/zrok/controller/store"
	"github.com/openziti-test-kitchen/zrok/rest_model_zrok"
	"github.com/openziti-test-kitchen/zrok/rest_server_zrok/operations/metadata"
	"github.com/sirupsen/logrus"
)

func overviewHandler(_ metadata.OverviewParams, principal *rest_model_zrok.Principal) middleware.Responder {
	tx, err := str.Begin()
	if err != nil {
		logrus.Errorf("error starting transaction: %v", err)
		return metadata.NewOverviewInternalServerError()
	}
	defer func() { _ = tx.Rollback() }()
	envs, err := str.FindEnvironmentsForAccount(int(principal.ID), tx)
	if err != nil {
		logrus.Errorf("error finding environments for '%v': %v", principal.Email, err)
		return metadata.NewOverviewInternalServerError()
	}
	var out rest_model_zrok.EnvironmentServicesList
	for _, env := range envs {
		svcs, err := str.FindServicesForEnvironment(env.Id, tx)
		if err != nil {
			logrus.Errorf("error finding services for environment '%v': %v", env.ZId, err)
			return metadata.NewOverviewInternalServerError()
		}
		es := &rest_model_zrok.EnvironmentServices{
			Environment: &rest_model_zrok.Environment{
				Address:     env.Address,
				CreatedAt:   env.CreatedAt.UnixMilli(),
				Description: env.Description,
				Host:        env.Host,
				UpdatedAt:   env.UpdatedAt.UnixMilli(),
				ZID:         env.ZId,
			},
		}
		sparkData, err := sparkDataForServices(svcs)
		if err != nil {
			logrus.Errorf("error querying spark data for services: %v", err)
			return metadata.NewOverviewInternalServerError()
		}
		for _, svc := range svcs {
			fe := ""
			if svc.FrontendEndpoint != nil {
				fe = *svc.FrontendEndpoint
			}
			be := ""
			if svc.BackendProxyEndpoint != nil {
				be = *svc.BackendProxyEndpoint
			}
			es.Services = append(es.Services, &rest_model_zrok.Service{
				CreatedAt: svc.CreatedAt.UnixMilli(),
				Frontend:  fe,
				Backend:   be,
				UpdatedAt: svc.UpdatedAt.UnixMilli(),
				ZID:       svc.ZId,
				Name:      svc.Token,
				Metrics:   sparkData[svc.Token],
			})
		}
		out = append(out, es)
	}
	return metadata.NewOverviewOK().WithPayload(out)
}

func sparkDataForServices(svcs []*store.Service) (map[string][]int64, error) {
	out := make(map[string][]int64)

	if len(svcs) > 0 {
		qapi := idb.QueryAPI(cfg.Influx.Org)

		result, err := qapi.Query(context.Background(), sparkFluxQuery(svcs))
		if err != nil {
			return nil, err
		}

		for result.Next() {
			combinedRate := int64(0)
			readRate := result.Record().ValueByKey("bytesRead")
			if readRate != nil {
				combinedRate += readRate.(int64)
			}
			writeRate := result.Record().ValueByKey("bytesWritten")
			if writeRate != nil {
				combinedRate += writeRate.(int64)
			}
			svcToken := result.Record().ValueByKey("service").(string)
			svcMetrics := out[svcToken]
			svcMetrics = append(svcMetrics, combinedRate)
			out[svcToken] = svcMetrics
		}
	}
	return out, nil
}

func sparkFluxQuery(svcs []*store.Service) string {
	svcFilter := "|> filter(fn: (r) =>"
	for i, svc := range svcs {
		if i > 0 {
			svcFilter += " or"
		}
		svcFilter += fmt.Sprintf(" r[\"service\"] == \"%v\"", svc.Token)
	}
	svcFilter += ")"
	query := "read = from(bucket: \"zrok\")" +
		"|> range(start: -5m)" +
		"|> filter(fn: (r) => r[\"_measurement\"] == \"xfer\")" +
		"|> filter(fn: (r) => r[\"_field\"] == \"bytesRead\" or r[\"_field\"] == \"bytesWritten\")" +
		"|> filter(fn: (r) => r[\"namespace\"] == \"frontend\")" +
		svcFilter +
		"|> aggregateWindow(every: 5s, fn: sum, createEmpty: true)\n" +
		"|> pivot(rowKey:[\"_time\"], columnKey: [\"_field\"], valueColumn: \"_value\")" +
		"|> yield(name: \"last\")"
	return query
}
