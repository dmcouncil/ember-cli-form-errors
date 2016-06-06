import Ember from 'ember';
import startApp from '../../helpers/start-app';
import { test, moduleForComponent } from 'ember-qunit';

var App;

moduleForComponent('form-field', 'FormFieldComponent', {
  unit: true,

  beforeEach: function () {
    App = startApp();
    this.component = this.subject({
      for: 'onlyYou',
      object: Ember.Object.create({
        errors: Ember.Object.create({
          has: function(field) {
            if (field === 'onlyYou') {
              return true;
            }
            return false;
          },
          errorsFor: function(field) {
            if (field === 'onlyYou') {
              return [
                { message: 'have a problem' },
                { message: 'have another problem' }
              ];
            }
            return [];
          }
        })
      })
    });
  },

  afterEach: function () {
    Ember.run(App, 'destroy');
  }
});

/*** Rendered states ***/

test('rendered has error class if it has an error', function(assert) {
  assert.ok(this.$().hasClass('has-error'));
});

test('rendered has no error class if it has no error', function(assert) {
  this.component.set('for', 'onlyMe');
  assert.ok(!this.$().hasClass('has-error'));
});

test('rendered has help text if it has an error', function(assert) {
  assert.ok(this.$().find('.help-block').length);
});

test('rendered has no help text if it has no error', function(assert) {
  this.component.set('for', 'onlyMe');
  assert.ok(!this.$().find('.help-block').length);
});

test('rendered has correct error message', function(assert) {
  assert.equal(this.$().find('.help-block').text().trim(), 'have a problem, have another problem');
});

/*** Properties ***/

test('.hasError is true if it has an error', function(assert) {
  assert.ok(this.component.get('hasError'));
});

test('.hasError is false if it has no error', function(assert) {
  this.component.set('for', 'onlyMe');
  assert.ok(!this.component.get('hasError'));
});

test('.errorMessage', function(assert) {
  assert.equal(this.component.get('errorMessage'), 'have a problem, have another problem');
});



