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

### Store

A `store` is a client side cache of records (instances of a `Model` class). It basically holds instances of a `Model` class.

Let's say we define a store of Users.

```js
Ext.define('MyApp.store.Users', {
    extend: 'Ext.data.Store',
    alias: 'store.users',
    model: 'MyApp.model.User',
    data : [
        { firstName: 'Seth', age: 34 },
        { firstName: 'Scott', age: 72 },
        { firstName: 'Gary', age: 19 },
        { firstName: 'Capybara', age: 208 }
    ]
});
```

What we did, is create a store that holds 4 instances/objects of the User `model`.

> The model can be defined as such:
>
> ```js
> Ext.define('MyApp.model.User', {
>     extend: 'Ext.data.Model',
>     fields: [
>         { name: 'name',  type: 'string' },
>         { name: 'age',   type: 'int' }
>     ]
> });
> ```

To display the data in a `dataview` or a `grid`, simply add a property `store: users` in the component's attributes.

#### Store inheritance

We can have a store inherit another store. This can be done with the `type` attribute.

```js
{
    xtype: 'grid'
    store: {
        type: 'users'
    }
}
```

The above `grid`'s store may have data similar to the original store's definition but its store is a completely different instance and changes in one store do not apply to the other.

#### Global stores

To make a store global is a very quick process:

1. Go to your `Application.js` file and, inside the class definition, add the following:

   ``` js
   stores: [
       'MyApp.store.Users'
   ]
   ```

2. In your store, provide a `storeId` attribute, usually the same as the `alias`.

   ```js
   Ext.define('MyApp.store.Users', {
       extend: 'Ext.data.Store',
       alias: 'store.users',
       storeId: 'users',
       ...
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

- `development` which builds the app for the developer to run.

  > This build includes non-minified code and detailed error messages.
- `production` which is the obvious choice for a complete app, ready to be deployed.

  > This build does not have any debugging potential as it includes minified code for optimized performance.
- `testing` which is a more dev friendly option.

  This is mostly used when the development is in the very late stages and the app can only be tested after being built and deployed.

  > This build includes non-minified code and detailed error messages.
- `universal`. This is a bit complicated.

  > In universal mode, an Ext JS application includes both minified and non-minified code, as well as detailed error messages.

## Ext - Resources

- [Getting Started with npm](https://docs.sencha.com/extjs/7.5.1/guides/getting_started/getting_started_with_npm.html)
- [Documentation](https://docs.sencha.com/extjs/7.4.0/index.html)
- [app.json file explanation](https://docs.sencha.com/cmd/guides/app_json.html)
- [Ext JS Kitchen Sink](https://examples.sencha.com/extjs/7.4.0/examples/kitchensink/#all)
- [ExtJS-Tutorial](https://www.extjs-tutorial.com/extjs/Introduction)

[HOME](https://github.com/Stratis-Dermanoutsos/Full-Stack-Notes#full-stack-notes) or [⬆ Back to top](#ext)
