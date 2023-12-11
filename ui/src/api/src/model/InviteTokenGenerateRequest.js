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

/**
 * The InviteTokenGenerateRequest model module.
 * @module model/InviteTokenGenerateRequest
 * @version 0.3.0
 */
class InviteTokenGenerateRequest {
    /**
     * Constructs a new <code>InviteTokenGenerateRequest</code>.
     * @alias module:model/InviteTokenGenerateRequest
     */
    constructor() { 
        
        InviteTokenGenerateRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InviteTokenGenerateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InviteTokenGenerateRequest} obj Optional instance to populate.
     * @return {module:model/InviteTokenGenerateRequest} The populated <code>InviteTokenGenerateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InviteTokenGenerateRequest();

            if (data.hasOwnProperty('tokens')) {
                obj['tokens'] = ApiClient.convertToType(data['tokens'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InviteTokenGenerateRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InviteTokenGenerateRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['tokens'])) {
            throw new Error("Expected the field `tokens` to be an array in the JSON data but got " + data['tokens']);
        }

        return true;
    }


}



/**
 * @member {Array.<String>} tokens
 */
InviteTokenGenerateRequest.prototype['tokens'] = undefined;






export default InviteTokenGenerateRequest;

