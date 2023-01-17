// Code generated by go-swagger; DO NOT EDIT.

package admin

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/openziti/zrok/rest_model_zrok"
)

// ListFrontendsOKCode is the HTTP code returned for type ListFrontendsOK
const ListFrontendsOKCode int = 200

/*
ListFrontendsOK ok

swagger:response listFrontendsOK
*/
type ListFrontendsOK struct {

	/*
	  In: Body
	*/
	Payload rest_model_zrok.PublicFrontendList `json:"body,omitempty"`
}

// NewListFrontendsOK creates ListFrontendsOK with default headers values
func NewListFrontendsOK() *ListFrontendsOK {

	return &ListFrontendsOK{}
}

// WithPayload adds the payload to the list frontends o k response
func (o *ListFrontendsOK) WithPayload(payload rest_model_zrok.PublicFrontendList) *ListFrontendsOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the list frontends o k response
func (o *ListFrontendsOK) SetPayload(payload rest_model_zrok.PublicFrontendList) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *ListFrontendsOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	payload := o.Payload
	if payload == nil {
		// return empty array
		payload = rest_model_zrok.PublicFrontendList{}
	}

	if err := producer.Produce(rw, payload); err != nil {
		panic(err) // let the recovery middleware deal with this
	}
}

// ListFrontendsUnauthorizedCode is the HTTP code returned for type ListFrontendsUnauthorized
const ListFrontendsUnauthorizedCode int = 401

/*
ListFrontendsUnauthorized unauthorized

swagger:response listFrontendsUnauthorized
*/
type ListFrontendsUnauthorized struct {
}

// NewListFrontendsUnauthorized creates ListFrontendsUnauthorized with default headers values
func NewListFrontendsUnauthorized() *ListFrontendsUnauthorized {

	return &ListFrontendsUnauthorized{}
}

// WriteResponse to the client
func (o *ListFrontendsUnauthorized) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(401)
}

// ListFrontendsInternalServerErrorCode is the HTTP code returned for type ListFrontendsInternalServerError
const ListFrontendsInternalServerErrorCode int = 500

/*
ListFrontendsInternalServerError internal server error

swagger:response listFrontendsInternalServerError
*/
type ListFrontendsInternalServerError struct {
}

// NewListFrontendsInternalServerError creates ListFrontendsInternalServerError with default headers values
func NewListFrontendsInternalServerError() *ListFrontendsInternalServerError {

	return &ListFrontendsInternalServerError{}
}

// WriteResponse to the client
func (o *ListFrontendsInternalServerError) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(500)
}