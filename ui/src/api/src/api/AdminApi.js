/**
 * zrok
 * zrok client access
 *
 * The version of the OpenAPI document: 0.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CreateFrontendRequest from '../model/CreateFrontendRequest';
import CreateFrontendResponse from '../model/CreateFrontendResponse';
import CreateIdentity201Response from '../model/CreateIdentity201Response';
import CreateIdentityRequest from '../model/CreateIdentityRequest';
import DeleteFrontendRequest from '../model/DeleteFrontendRequest';
import InviteTokenGenerateRequest from '../model/InviteTokenGenerateRequest';
import PublicFrontend from '../model/PublicFrontend';
import UpdateFrontendRequest from '../model/UpdateFrontendRequest';

/**
* Admin service.
* @module api/AdminApi
* @version 0.3.0
*/
export default class AdminApi {

    /**
    * Constructs a new AdminApi. 
    * @alias module:api/AdminApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateFrontendRequest} [body] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateFrontendResponse} and HTTP response
     */
    createFrontendWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['key'];
      let contentTypes = ['application/zrok.v1+json'];
      let accepts = ['application/zrok.v1+json'];
      let returnType = CreateFrontendResponse;
      return this.apiClient.callApi(
        '/frontend', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateFrontendRequest} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateFrontendResponse}
     */
    createFrontend(opts) {
      return this.createFrontendWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateIdentityRequest} [body] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateIdentity201Response} and HTTP response
     */
    createIdentityWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['key'];
      let contentTypes = ['application/zrok.v1+json'];
      let accepts = ['application/zrok.v1+json'];
      let returnType = CreateIdentity201Response;
      return this.apiClient.callApi(
        '/identity', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateIdentityRequest} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateIdentity201Response}
     */
    createIdentity(opts) {
      return this.createIdentityWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/DeleteFrontendRequest} [body] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteFrontendWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['key'];
      let contentTypes = ['application/zrok.v1+json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/frontend', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/DeleteFrontendRequest} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteFrontend(opts) {
      return this.deleteFrontendWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/InviteTokenGenerateRequest} [body] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    inviteTokenGenerateWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['key'];
      let contentTypes = ['application/zrok.v1+json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/invite/token/generate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/InviteTokenGenerateRequest} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    inviteTokenGenerate(opts) {
      return this.inviteTokenGenerateWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PublicFrontend>} and HTTP response
     */
    listFrontendsWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['key'];
      let contentTypes = [];
      let accepts = ['application/zrok.v1+json'];
      let returnType = [PublicFrontend];
      return this.apiClient.callApi(
        '/frontends', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PublicFrontend>}
     */
    listFrontends() {
      return this.listFrontendsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateFrontendRequest} [body] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    updateFrontendWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['key'];
      let contentTypes = ['application/zrok.v1+json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/frontend', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateFrontendRequest} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    updateFrontend(opts) {
      return this.updateFrontendWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
