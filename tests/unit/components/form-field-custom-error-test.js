import Ember from 'ember';
import startApp from '../../helpers/start-app';
import { test, moduleForComponent } from 'ember-qunit';

var App;

moduleForComponent('form-field', 'Component - FormField (custom error)', {
  unit: true,
  setup: function() {
    App = startApp();
    this.component = this.subject({
      customError: 'Bad person'
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
  this.component.set('customError', null);
  assert.ok(!this.$().hasClass('has-error'));
});

test('rendered has help text if it has an error', function(assert) {
  assert.ok(this.$().find('.help-block').length);
});

test('rendered has no help text if it has no error', function(assert) {
  this.component.set('customError', null);
  assert.ok(!this.$().find('.help-block').length);
});

test('rendered has correct error message', function(assert) {
  assert.equal(this.$().find('.help-block').text().trim(), 'Bad person');
});

/*** Properties ***/

test('.hasError is true if it has an error', function(assert) {
  assert.ok(this.component.get('hasError'));
});

test('.hasError is false if it has no error', function(assert) {
  this.component.set('customError', null);
  assert.ok(!this.component.get('hasError'));
});

test('.errorMessage', function(assert) {
  assert.equal(this.component.get('errorMessage'), 'Bad person');
});
