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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Zrok);
  }
}(this, function(expect, Zrok) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Zrok.MetricsSample();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('MetricsSample', function() {
    it('should create an instance of MetricsSample', function() {
      // uncomment below and update the code to test MetricsSample
      //var instance = new Zrok.MetricsSample();
      //expect(instance).to.be.a(Zrok.MetricsSample);
    });

    it('should have the property rx (base name: "rx")', function() {
      // uncomment below and update the code to test the property rx
      //var instance = new Zrok.MetricsSample();
      //expect(instance).to.be();
    });

    it('should have the property tx (base name: "tx")', function() {
      // uncomment below and update the code to test the property tx
      //var instance = new Zrok.MetricsSample();
      //expect(instance).to.be();
    });

    it('should have the property timestamp (base name: "timestamp")', function() {
      // uncomment below and update the code to test the property timestamp
      //var instance = new Zrok.MetricsSample();
      //expect(instance).to.be();
    });

  });

}));
