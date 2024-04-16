import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { find, findAll, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import EmberObject from '@ember/object';

module('Integration | Component | form-field', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.object = EmberObject.create({
      errors: EmberObject.create({
        has: function(field) {
          return field === 'onlyYou';
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
    });
  });

  test('it shows error if the error property return an error message', async function(assert) {
    await render(hbs`<FormField @object={{this.object}} @for='onlyYou' />`);

    assert.ok(find('*').classList.contains('has-error'));
    assert.ok(findAll('.help-block').length);
    assert.strictEqual(find('.help-block').textContent.trim(), 'have a problem, have another problem');
  });

  test('it does not show error if the error property has no error message', async function(assert) {
    await render(hbs`<FormField @object={{this.object}} @for='onlyMe' />`);

    assert.notOk(find('*').classList.contains('has-error'));
    assert.notOk(findAll('.help-block').length);
  });

  test('it shows error if a custom message is passed', async function(assert) {
    await render(hbs`<FormField @customError='Bad person' />`);

    assert.ok(find('*').classList.contains('has-error'));
    assert.ok(findAll('.help-block').length);
    assert.strictEqual(find('.help-block').textContent.trim(), 'Bad person');
  });

  test('it does not show error if neither error property or custom message is passed', async function(assert) {
    await render(hbs`<FormField @customError={{null}} />`);

    assert.notOk(find('*').classList.contains('has-error'));
    assert.notOk(findAll('.help-block').length);
  });
});
