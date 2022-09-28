# Ext

- [**Notes**](#ext---notes)
- [**Resources**](#ext---resources)

## Ext - Notes

### Components

Components are the heart of ***Ext JS***. In reality, they are just ***JS*** components with specific attributes.

#### Components definitions

To define/declare a component, you use the `Ext.define` method, as follow:

```js
Ext.define('CLASS.NAME', {
    ...object properties
});
```

A component *MUST* **extend** another component, whether that's an ***Ext*** core component or a custom one.

For example, to define a custom button:

```js
Ext.define('myApp.view.main.components.CustomButton', {
    extend: 'Ext.button.Button',
    alias: 'widget.customButton',
    text: 'Click me!',
    ...button properties
});
```

> This button was a component for the *classic* toolkit.
> In *modern*, it can be found as `Ext.Button`.

All `Ext JS`'s core components and their attributes/methods/events can all be found in the documentation with examples.

#### Use components

To use a component, you need to use either its class name (the string value, first argument of the `define` method) or its `alias` attribute.

> Notice how the above button we created has an alias equal to `widget.customButton`.

To use it, simply put it in the items of another class or a container using the `xtype` attribute. For example:

```js
{
    xtype: 'panel', // meaning Ext's Ext.panel.Panel
    items: [
        {
            xtype: 'customButton',
            text: 'Changed text',
            ...other properties
        }
   ]
}
```

> When you use a component, you can add or either overwrite its existing properties as shown above.

##### Requires

To use any component, more often than not, the compiler find it on its own. However, sometimes, you'll have to add the component's classname in the `requires` array of another component you want to include it in.

For example:

```js
Ext.define('myApp.view.main.panels.RandomPanel', {
    extend: 'Ext.panel.Panel', // a panel component
    alias: 'widget.randomPanel',
    requires: [
        'myApp.view.main.components.CustomButton'
    ],
    layout: 'fit', // More of this later
    items: [
        {
            xtype: 'customButton',
            ...button properties
        }
    ]
});
```

### Install and create your first app

#### With NPM

1. Gerenate your first project

   ```bash
   ext-gen app -a
   ```

2. Run the app

   ```bash
   cd ./my-app
   npm start
   ```

#### With CMD

1. Gerenate your first project

   ```bash
   sencha generate app --ext MyApp ./MyApp
   ```

2. Run the app

   ```bash
   sencha app watch [classic|modern]
   ```

### Build your App

1. Clean the current build

   ```bash
   sencha app clean <BUILD_TYPE>
   ```

2. Build

   ```bash
   sencha app build <BUILD_TYPE>
   ```

#### Build types

There are 2 main types of builds.

- `production` which is the obvious choice for a complete app, ready to be deployed.

  > This build does not have any debugging potential
- `testing` which is a more dev friendly option.

  This is mostly used when the development is in the very late stages and the app can only be tested after being built and deployed.

  > Great for debugging as errors are understandable

## Ext - Resources

- [Getting Started with npm](https://docs.sencha.com/extjs/7.5.1/guides/getting_started/getting_started_with_npm.html)
- [Documentation](https://docs.sencha.com/extjs/7.4.0/index.html)
- [app.json file explanation](https://docs.sencha.com/cmd/guides/app_json.html)
- [Ext JS Kitchen Sink](https://examples.sencha.com/extjs/7.4.0/examples/kitchensink/#all)
- [ExtJS-Tutorial](https://www.extjs-tutorial.com/extjs/Introduction)

[HOME](https://github.com/Stratis-Dermanoutsos/Full-Stack-Notes#full-stack-notes) or [⬆ Back to top](#ext)
