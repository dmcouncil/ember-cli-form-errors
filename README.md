# ember-cli-form-errors

A simple ember-cli addon to support displaying API errors inside an Ember.js form.


## Compatibility

* Ember.js v4.8 or above
* Ember CLI v4.8 or above
* Node.js v18 or above


## Installation

```
ember install ember-cli-form-errors
```


## Usage

To use the component, just wrap your existing form component with this component:

    <div class='form-group'>
      <label for='user_last_name'>Last name</label>
      {{input value=user.lastName class='form-control' id='user_last_name'}}
    </div>

becomes

    {{#form-field object=user for='lastName'}}
      <label for='user_last_name'>Last name</label>
      {{input value=user.lastName class='form-control' id='user_last_name'}}
    {{/form-field}}


## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](LICENSE.md).
