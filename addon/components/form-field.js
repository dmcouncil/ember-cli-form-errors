import Ember from 'ember';
//
// A generic wrapper around a form element (input, select, radios)
//
// By providing this component with an attribute name on a model, this component will auto-detect any validation errors (from DS.Errors)
// on the specified attribute, and apply appropriate error classes and error messages to the field.
//
// This component also support custom errors that is not part of the model (client-side validations, for example).
// Although comprehensive client-side validation libraries are available, we do not currently need the full capability of those libraries and a simple custom error string will do.
//
// This component is a modified and simplified version of https://alexspeller.com/server-side-validations-with-ember-data-and-ds-errors/
//
export default Ember.Component.extend({

  classNameBindings: [':form-group', 'hasError:has-error'],

  hasError: Ember.computed('object.errors.[]', 'customError', function() {
    if (!this.get('object.errors')) {
      return Ember.isPresent(this.get('customError'));
    }
    return this.get('object.errors').has(this.get('for'));
  }),

  errorMessage: Ember.computed('object.errors.[]', 'customError', function() {
    if (!this.get('object.errors')) {
      return this.get('customError');
    }
    return Ember.A(this.get('object.errors').errorsFor(this.get('for'))).mapBy('message').join(', ');
  })

});
