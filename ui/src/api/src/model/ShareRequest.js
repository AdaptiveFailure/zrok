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

import ApiClient from '../ApiClient';
import AuthUser from './AuthUser';

/**
 * The ShareRequest model module.
 * @module model/ShareRequest
 * @version 0.3.0
 */
class ShareRequest {
    /**
     * Constructs a new <code>ShareRequest</code>.
     * @alias module:model/ShareRequest
     */
    constructor() { 
        
        ShareRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ShareRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShareRequest} obj Optional instance to populate.
     * @return {module:model/ShareRequest} The populated <code>ShareRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShareRequest();

            if (data.hasOwnProperty('envZId')) {
                obj['envZId'] = ApiClient.convertToType(data['envZId'], 'String');
            }
            if (data.hasOwnProperty('shareMode')) {
                obj['shareMode'] = ApiClient.convertToType(data['shareMode'], 'String');
            }
            if (data.hasOwnProperty('frontendSelection')) {
                obj['frontendSelection'] = ApiClient.convertToType(data['frontendSelection'], ['String']);
            }
            if (data.hasOwnProperty('backendMode')) {
                obj['backendMode'] = ApiClient.convertToType(data['backendMode'], 'String');
            }
            if (data.hasOwnProperty('backendProxyEndpoint')) {
                obj['backendProxyEndpoint'] = ApiClient.convertToType(data['backendProxyEndpoint'], 'String');
            }
            if (data.hasOwnProperty('authScheme')) {
                obj['authScheme'] = ApiClient.convertToType(data['authScheme'], 'String');
            }
            if (data.hasOwnProperty('authUsers')) {
                obj['authUsers'] = ApiClient.convertToType(data['authUsers'], [AuthUser]);
            }
            if (data.hasOwnProperty('oauthProvider')) {
                obj['oauthProvider'] = ApiClient.convertToType(data['oauthProvider'], 'String');
            }
            if (data.hasOwnProperty('oauthEmailDomains')) {
                obj['oauthEmailDomains'] = ApiClient.convertToType(data['oauthEmailDomains'], ['String']);
            }
            if (data.hasOwnProperty('oauthAuthorizationCheckInterval')) {
                obj['oauthAuthorizationCheckInterval'] = ApiClient.convertToType(data['oauthAuthorizationCheckInterval'], 'String');
            }
            if (data.hasOwnProperty('reserved')) {
                obj['reserved'] = ApiClient.convertToType(data['reserved'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ShareRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ShareRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['envZId'] && !(typeof data['envZId'] === 'string' || data['envZId'] instanceof String)) {
            throw new Error("Expected the field `envZId` to be a primitive type in the JSON string but got " + data['envZId']);
        }
        // ensure the json data is a string
        if (data['shareMode'] && !(typeof data['shareMode'] === 'string' || data['shareMode'] instanceof String)) {
            throw new Error("Expected the field `shareMode` to be a primitive type in the JSON string but got " + data['shareMode']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['frontendSelection'])) {
            throw new Error("Expected the field `frontendSelection` to be an array in the JSON data but got " + data['frontendSelection']);
        }
        // ensure the json data is a string
        if (data['backendMode'] && !(typeof data['backendMode'] === 'string' || data['backendMode'] instanceof String)) {
            throw new Error("Expected the field `backendMode` to be a primitive type in the JSON string but got " + data['backendMode']);
        }
        // ensure the json data is a string
        if (data['backendProxyEndpoint'] && !(typeof data['backendProxyEndpoint'] === 'string' || data['backendProxyEndpoint'] instanceof String)) {
            throw new Error("Expected the field `backendProxyEndpoint` to be a primitive type in the JSON string but got " + data['backendProxyEndpoint']);
        }
        // ensure the json data is a string
        if (data['authScheme'] && !(typeof data['authScheme'] === 'string' || data['authScheme'] instanceof String)) {
            throw new Error("Expected the field `authScheme` to be a primitive type in the JSON string but got " + data['authScheme']);
        }
        if (data['authUsers']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['authUsers'])) {
                throw new Error("Expected the field `authUsers` to be an array in the JSON data but got " + data['authUsers']);
            }
            // validate the optional field `authUsers` (array)
            for (const item of data['authUsers']) {
                AuthUser.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['oauthProvider'] && !(typeof data['oauthProvider'] === 'string' || data['oauthProvider'] instanceof String)) {
            throw new Error("Expected the field `oauthProvider` to be a primitive type in the JSON string but got " + data['oauthProvider']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['oauthEmailDomains'])) {
            throw new Error("Expected the field `oauthEmailDomains` to be an array in the JSON data but got " + data['oauthEmailDomains']);
        }
        // ensure the json data is a string
        if (data['oauthAuthorizationCheckInterval'] && !(typeof data['oauthAuthorizationCheckInterval'] === 'string' || data['oauthAuthorizationCheckInterval'] instanceof String)) {
            throw new Error("Expected the field `oauthAuthorizationCheckInterval` to be a primitive type in the JSON string but got " + data['oauthAuthorizationCheckInterval']);
        }

        return true;
    }


}



/**
 * @member {String} envZId
 */
ShareRequest.prototype['envZId'] = undefined;

/**
 * @member {module:model/ShareRequest.ShareModeEnum} shareMode
 */
ShareRequest.prototype['shareMode'] = undefined;

/**
 * @member {Array.<String>} frontendSelection
 */
ShareRequest.prototype['frontendSelection'] = undefined;

/**
 * @member {module:model/ShareRequest.BackendModeEnum} backendMode
 */
ShareRequest.prototype['backendMode'] = undefined;

/**
 * @member {String} backendProxyEndpoint
 */
ShareRequest.prototype['backendProxyEndpoint'] = undefined;

/**
 * @member {String} authScheme
 */
ShareRequest.prototype['authScheme'] = undefined;

/**
 * @member {Array.<module:model/AuthUser>} authUsers
 */
ShareRequest.prototype['authUsers'] = undefined;

/**
 * @member {module:model/ShareRequest.OauthProviderEnum} oauthProvider
 */
ShareRequest.prototype['oauthProvider'] = undefined;

/**
 * @member {Array.<String>} oauthEmailDomains
 */
ShareRequest.prototype['oauthEmailDomains'] = undefined;

/**
 * @member {String} oauthAuthorizationCheckInterval
 */
ShareRequest.prototype['oauthAuthorizationCheckInterval'] = undefined;

/**
 * @member {Boolean} reserved
 */
ShareRequest.prototype['reserved'] = undefined;





/**
 * Allowed values for the <code>shareMode</code> property.
 * @enum {String}
 * @readonly
 */
ShareRequest['ShareModeEnum'] = {

    /**
     * value: "public"
     * @const
     */
    "public": "public",

    /**
     * value: "private"
     * @const
     */
    "private": "private"
};


/**
 * Allowed values for the <code>backendMode</code> property.
 * @enum {String}
 * @readonly
 */
ShareRequest['BackendModeEnum'] = {

    /**
     * value: "proxy"
     * @const
     */
    "proxy": "proxy",

    /**
     * value: "web"
     * @const
     */
    "web": "web",

    /**
     * value: "tcpTunnel"
     * @const
     */
    "tcpTunnel": "tcpTunnel",

    /**
     * value: "udpTunnel"
     * @const
     */
    "udpTunnel": "udpTunnel",

    /**
     * value: "caddy"
     * @const
     */
    "caddy": "caddy",

    /**
     * value: "drive"
     * @const
     */
    "drive": "drive"
};


/**
 * Allowed values for the <code>oauthProvider</code> property.
 * @enum {String}
 * @readonly
 */
ShareRequest['OauthProviderEnum'] = {

    /**
     * value: "github"
     * @const
     */
    "github": "github",

    /**
     * value: "google"
     * @const
     */
    "google": "google"
};



export default ShareRequest;

