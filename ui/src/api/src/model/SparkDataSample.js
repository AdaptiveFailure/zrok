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
 * The SparkDataSample model module.
 * @module model/SparkDataSample
 * @version 0.3.0
 */
class SparkDataSample {
    /**
     * Constructs a new <code>SparkDataSample</code>.
     * @alias module:model/SparkDataSample
     */
    constructor() { 
        
        SparkDataSample.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SparkDataSample</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SparkDataSample} obj Optional instance to populate.
     * @return {module:model/SparkDataSample} The populated <code>SparkDataSample</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SparkDataSample();

            if (data.hasOwnProperty('rx')) {
                obj['rx'] = ApiClient.convertToType(data['rx'], 'Number');
            }
            if (data.hasOwnProperty('tx')) {
                obj['tx'] = ApiClient.convertToType(data['tx'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SparkDataSample</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SparkDataSample</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Number} rx
 */
SparkDataSample.prototype['rx'] = undefined;

/**
 * @member {Number} tx
 */
SparkDataSample.prototype['tx'] = undefined;






export default SparkDataSample;

