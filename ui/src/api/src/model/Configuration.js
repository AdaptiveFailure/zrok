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
import PasswordRequirements from './PasswordRequirements';

/**
 * The Configuration model module.
 * @module model/Configuration
 * @version 0.3.0
 */
class Configuration {
    /**
     * Constructs a new <code>Configuration</code>.
     * @alias module:model/Configuration
     */
    constructor() { 
        
        Configuration.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Configuration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Configuration} obj Optional instance to populate.
     * @return {module:model/Configuration} The populated <code>Configuration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Configuration();

            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('touLink')) {
                obj['touLink'] = ApiClient.convertToType(data['touLink'], 'String');
            }
            if (data.hasOwnProperty('invitesOpen')) {
                obj['invitesOpen'] = ApiClient.convertToType(data['invitesOpen'], 'Boolean');
            }
            if (data.hasOwnProperty('requiresInviteToken')) {
                obj['requiresInviteToken'] = ApiClient.convertToType(data['requiresInviteToken'], 'Boolean');
            }
            if (data.hasOwnProperty('inviteTokenContact')) {
                obj['inviteTokenContact'] = ApiClient.convertToType(data['inviteTokenContact'], 'String');
            }
            if (data.hasOwnProperty('passwordRequirements')) {
                obj['passwordRequirements'] = PasswordRequirements.constructFromObject(data['passwordRequirements']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Configuration</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Configuration</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['version'] && !(typeof data['version'] === 'string' || data['version'] instanceof String)) {
            throw new Error("Expected the field `version` to be a primitive type in the JSON string but got " + data['version']);
        }
        // ensure the json data is a string
        if (data['touLink'] && !(typeof data['touLink'] === 'string' || data['touLink'] instanceof String)) {
            throw new Error("Expected the field `touLink` to be a primitive type in the JSON string but got " + data['touLink']);
        }
        // ensure the json data is a string
        if (data['inviteTokenContact'] && !(typeof data['inviteTokenContact'] === 'string' || data['inviteTokenContact'] instanceof String)) {
            throw new Error("Expected the field `inviteTokenContact` to be a primitive type in the JSON string but got " + data['inviteTokenContact']);
        }
        // validate the optional field `passwordRequirements`
        if (data['passwordRequirements']) { // data not null
          PasswordRequirements.validateJSON(data['passwordRequirements']);
        }

        return true;
    }


}



/**
 * @member {String} version
 */
Configuration.prototype['version'] = undefined;

/**
 * @member {String} touLink
 */
Configuration.prototype['touLink'] = undefined;

/**
 * @member {Boolean} invitesOpen
 */
Configuration.prototype['invitesOpen'] = undefined;

/**
 * @member {Boolean} requiresInviteToken
 */
Configuration.prototype['requiresInviteToken'] = undefined;

/**
 * @member {String} inviteTokenContact
 */
Configuration.prototype['inviteTokenContact'] = undefined;

/**
 * @member {module:model/PasswordRequirements} passwordRequirements
 */
Configuration.prototype['passwordRequirements'] = undefined;






export default Configuration;

