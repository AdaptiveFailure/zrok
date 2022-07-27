// Code generated by go-swagger; DO NOT EDIT.

package identity

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/openziti-test-kitchen/zrok/rest_model_zrok"
)

// EnableCreatedCode is the HTTP code returned for type EnableCreated
const EnableCreatedCode int = 201

/*EnableCreated environment enabled

swagger:response enableCreated
*/
type EnableCreated struct {

	/*
	  In: Body
	*/
	Payload *rest_model_zrok.EnableResponse `json:"body,omitempty"`
}

// NewEnableCreated creates EnableCreated with default headers values
func NewEnableCreated() *EnableCreated {

	return &EnableCreated{}
}

// WithPayload adds the payload to the enable created response
func (o *EnableCreated) WithPayload(payload *rest_model_zrok.EnableResponse) *EnableCreated {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the enable created response
func (o *EnableCreated) SetPayload(payload *rest_model_zrok.EnableResponse) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *EnableCreated) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(201)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}

// EnableUnauthorizedCode is the HTTP code returned for type EnableUnauthorized
const EnableUnauthorizedCode int = 401

/*EnableUnauthorized invalid api key

swagger:response enableUnauthorized
*/
type EnableUnauthorized struct {
}

// NewEnableUnauthorized creates EnableUnauthorized with default headers values
func NewEnableUnauthorized() *EnableUnauthorized {

	return &EnableUnauthorized{}
}

// WriteResponse to the client
func (o *EnableUnauthorized) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(401)
}

// EnableNotFoundCode is the HTTP code returned for type EnableNotFound
const EnableNotFoundCode int = 404

/*EnableNotFound account not found

swagger:response enableNotFound
*/
type EnableNotFound struct {
}

// NewEnableNotFound creates EnableNotFound with default headers values
func NewEnableNotFound() *EnableNotFound {

	return &EnableNotFound{}
}

// WriteResponse to the client
func (o *EnableNotFound) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(404)
}

// EnableInternalServerErrorCode is the HTTP code returned for type EnableInternalServerError
const EnableInternalServerErrorCode int = 500

/*EnableInternalServerError internal server error

swagger:response enableInternalServerError
*/
type EnableInternalServerError struct {

	/*
	  In: Body
	*/
	Payload rest_model_zrok.ErrorMessage `json:"body,omitempty"`
}

// NewEnableInternalServerError creates EnableInternalServerError with default headers values
func NewEnableInternalServerError() *EnableInternalServerError {

	return &EnableInternalServerError{}
}

// WithPayload adds the payload to the enable internal server error response
func (o *EnableInternalServerError) WithPayload(payload rest_model_zrok.ErrorMessage) *EnableInternalServerError {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the enable internal server error response
func (o *EnableInternalServerError) SetPayload(payload rest_model_zrok.ErrorMessage) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *EnableInternalServerError) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(500)
	payload := o.Payload
	if err := producer.Produce(rw, payload); err != nil {
		panic(err) // let the recovery middleware deal with this
	}
}
