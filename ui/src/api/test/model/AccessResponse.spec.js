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
    instance = new Zrok.AccessResponse();
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

  describe('AccessResponse', function() {
    it('should create an instance of AccessResponse', function() {
      // uncomment below and update the code to test AccessResponse
      //var instance = new Zrok.AccessResponse();
      //expect(instance).to.be.a(Zrok.AccessResponse);
    });

    it('should have the property frontendToken (base name: "frontendToken")', function() {
      // uncomment below and update the code to test the property frontendToken
      //var instance = new Zrok.AccessResponse();
      //expect(instance).to.be();
    });

    it('should have the property backendMode (base name: "backendMode")', function() {
      // uncomment below and update the code to test the property backendMode
      //var instance = new Zrok.AccessResponse();
      //expect(instance).to.be();
    });

  });

}));