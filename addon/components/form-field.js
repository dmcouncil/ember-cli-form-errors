import { A } from '@ember/array';
import { isPresent } from '@ember/utils';
import { computed } from '@ember/object';
import Component from '@ember/component';

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
export default Component.extend({
  classNameBindings: [':form-group', 'hasError:has-error'],

  hasError: computed('customError', 'for', 'object.errors.[]', function() {
    if (!this.object || !this.object.errors) {
      return isPresent(this.customError);
    }
    return this.object.errors.has(this.for);
  }),

  errorMessage: computed('customError', 'for', 'object.errors.[]', function() {
    if (!this.object || !this.object.errors) {
      return this.customError;
    }
    return A(this.object.errors.errorsFor(this.for)).mapBy('message').join(', ');
  })
});
