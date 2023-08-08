// Code generated by go-swagger; DO NOT EDIT.

package account

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/openziti/zrok/rest_model_zrok"
)

// ResetPasswordOKCode is the HTTP code returned for type ResetPasswordOK
const ResetPasswordOKCode int = 200

/*
ResetPasswordOK password reset

swagger:response resetPasswordOK
*/
type ResetPasswordOK struct {
}

// NewResetPasswordOK creates ResetPasswordOK with default headers values
func NewResetPasswordOK() *ResetPasswordOK {

	return &ResetPasswordOK{}
}

// WriteResponse to the client
func (o *ResetPasswordOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(200)
}

// ResetPasswordNotFoundCode is the HTTP code returned for type ResetPasswordNotFound
const ResetPasswordNotFoundCode int = 404

/*
ResetPasswordNotFound request not found

swagger:response resetPasswordNotFound
*/
type ResetPasswordNotFound struct {
}

// NewResetPasswordNotFound creates ResetPasswordNotFound with default headers values
func NewResetPasswordNotFound() *ResetPasswordNotFound {

	return &ResetPasswordNotFound{}
}

// WriteResponse to the client
func (o *ResetPasswordNotFound) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(404)
}

// ResetPasswordUnprocessableEntityCode is the HTTP code returned for type ResetPasswordUnprocessableEntity
const ResetPasswordUnprocessableEntityCode int = 422

/*
ResetPasswordUnprocessableEntity password validation failure

swagger:response resetPasswordUnprocessableEntity
*/
type ResetPasswordUnprocessableEntity struct {

	/*
	  In: Body
	*/
	Payload rest_model_zrok.ErrorMessage `json:"body,omitempty"`
}

// NewResetPasswordUnprocessableEntity creates ResetPasswordUnprocessableEntity with default headers values
func NewResetPasswordUnprocessableEntity() *ResetPasswordUnprocessableEntity {

	return &ResetPasswordUnprocessableEntity{}
}

// WithPayload adds the payload to the reset password unprocessable entity response
func (o *ResetPasswordUnprocessableEntity) WithPayload(payload rest_model_zrok.ErrorMessage) *ResetPasswordUnprocessableEntity {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the reset password unprocessable entity response
func (o *ResetPasswordUnprocessableEntity) SetPayload(payload rest_model_zrok.ErrorMessage) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *ResetPasswordUnprocessableEntity) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(422)
	payload := o.Payload
	if err := producer.Produce(rw, payload); err != nil {
		panic(err) // let the recovery middleware deal with this
	}
}

// ResetPasswordInternalServerErrorCode is the HTTP code returned for type ResetPasswordInternalServerError
const ResetPasswordInternalServerErrorCode int = 500

/*
ResetPasswordInternalServerError internal server error

swagger:response resetPasswordInternalServerError
*/
type ResetPasswordInternalServerError struct {
}

// NewResetPasswordInternalServerError creates ResetPasswordInternalServerError with default headers values
func NewResetPasswordInternalServerError() *ResetPasswordInternalServerError {

	return &ResetPasswordInternalServerError{}
}

// WriteResponse to the client
func (o *ResetPasswordInternalServerError) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(500)
}