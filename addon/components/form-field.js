import { A } from '@ember/array';
import { isPresent } from '@ember/utils';
import { computed } from '@ember/object';
import Component from '@ember/component';

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
