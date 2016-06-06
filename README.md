# Ember-cli-form-errors

A simple ember-cli addon to support displaying API errors inside an Ember.js form.

## Installation and use

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

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
