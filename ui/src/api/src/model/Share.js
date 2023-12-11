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
import SparkDataSample from './SparkDataSample';

/**
 * The Share model module.
 * @module model/Share
 * @version 0.3.0
 */
class Share {
    /**
     * Constructs a new <code>Share</code>.
     * @alias module:model/Share
     */
    constructor() { 
        
        Share.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Share</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Share} obj Optional instance to populate.
     * @return {module:model/Share} The populated <code>Share</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Share();

            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('zId')) {
                obj['zId'] = ApiClient.convertToType(data['zId'], 'String');
            }
            if (data.hasOwnProperty('shareMode')) {
                obj['shareMode'] = ApiClient.convertToType(data['shareMode'], 'String');
            }
            if (data.hasOwnProperty('backendMode')) {
                obj['backendMode'] = ApiClient.convertToType(data['backendMode'], 'String');
            }
            if (data.hasOwnProperty('frontendSelection')) {
                obj['frontendSelection'] = ApiClient.convertToType(data['frontendSelection'], 'String');
            }
            if (data.hasOwnProperty('frontendEndpoint')) {
                obj['frontendEndpoint'] = ApiClient.convertToType(data['frontendEndpoint'], 'String');
            }
            if (data.hasOwnProperty('backendProxyEndpoint')) {
                obj['backendProxyEndpoint'] = ApiClient.convertToType(data['backendProxyEndpoint'], 'String');
            }
            if (data.hasOwnProperty('reserved')) {
                obj['reserved'] = ApiClient.convertToType(data['reserved'], 'Boolean');
            }
            if (data.hasOwnProperty('activity')) {
                obj['activity'] = ApiClient.convertToType(data['activity'], [SparkDataSample]);
            }
            if (data.hasOwnProperty('limited')) {
                obj['limited'] = ApiClient.convertToType(data['limited'], 'Boolean');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Number');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Share</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Share</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['zId'] && !(typeof data['zId'] === 'string' || data['zId'] instanceof String)) {
            throw new Error("Expected the field `zId` to be a primitive type in the JSON string but got " + data['zId']);
        }
        // ensure the json data is a string
        if (data['shareMode'] && !(typeof data['shareMode'] === 'string' || data['shareMode'] instanceof String)) {
            throw new Error("Expected the field `shareMode` to be a primitive type in the JSON string but got " + data['shareMode']);
        }
        // ensure the json data is a string
        if (data['backendMode'] && !(typeof data['backendMode'] === 'string' || data['backendMode'] instanceof String)) {
            throw new Error("Expected the field `backendMode` to be a primitive type in the JSON string but got " + data['backendMode']);
        }
        // ensure the json data is a string
        if (data['frontendSelection'] && !(typeof data['frontendSelection'] === 'string' || data['frontendSelection'] instanceof String)) {
            throw new Error("Expected the field `frontendSelection` to be a primitive type in the JSON string but got " + data['frontendSelection']);
        }
        // ensure the json data is a string
        if (data['frontendEndpoint'] && !(typeof data['frontendEndpoint'] === 'string' || data['frontendEndpoint'] instanceof String)) {
            throw new Error("Expected the field `frontendEndpoint` to be a primitive type in the JSON string but got " + data['frontendEndpoint']);
        }
        // ensure the json data is a string
        if (data['backendProxyEndpoint'] && !(typeof data['backendProxyEndpoint'] === 'string' || data['backendProxyEndpoint'] instanceof String)) {
            throw new Error("Expected the field `backendProxyEndpoint` to be a primitive type in the JSON string but got " + data['backendProxyEndpoint']);
        }
        if (data['activity']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['activity'])) {
                throw new Error("Expected the field `activity` to be an array in the JSON data but got " + data['activity']);
            }
            // validate the optional field `activity` (array)
            for (const item of data['activity']) {
                SparkDataSample.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} token
 */
Share.prototype['token'] = undefined;

/**
 * @member {String} zId
 */
Share.prototype['zId'] = undefined;

/**
 * @member {String} shareMode
 */
Share.prototype['shareMode'] = undefined;

/**
 * @member {String} backendMode
 */
Share.prototype['backendMode'] = undefined;

/**
 * @member {String} frontendSelection
 */
Share.prototype['frontendSelection'] = undefined;

/**
 * @member {String} frontendEndpoint
 */
Share.prototype['frontendEndpoint'] = undefined;

/**
 * @member {String} backendProxyEndpoint
 */
Share.prototype['backendProxyEndpoint'] = undefined;

/**
 * @member {Boolean} reserved
 */
Share.prototype['reserved'] = undefined;

/**
 * @member {Array.<module:model/SparkDataSample>} activity
 */
Share.prototype['activity'] = undefined;

/**
 * @member {Boolean} limited
 */
Share.prototype['limited'] = undefined;

/**
 * @member {Number} createdAt
 */
Share.prototype['createdAt'] = undefined;

/**
 * @member {Number} updatedAt
 */
Share.prototype['updatedAt'] = undefined;






export default Share;

