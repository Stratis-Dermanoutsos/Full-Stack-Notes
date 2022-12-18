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

### Toolkits

***Sencha Ext JS*** offers three different toolkits, each of which is designed to support a specific type of application development:

- **Classic**: The **Classic** toolkit is ***Ext JS***'s original toolkit, and is designed for building traditional, "*desktop-style*" web applications.

  ```cmd
  sencha generate app -ext -classic MyAppName ./MyAppPath
  ```

- **Modern**: The **Modern** toolkit is a newer addition to ***Ext JS***, and is designed for building modern, "*mobile-first*" web applications.

  ```cmd
  sencha generate app -ext -modern MyAppName ./MyAppPath
  ```

- **Universal**: The **Universal** toolkit is a combination of the **Classic** and **Modern** toolkits, and is designed to support applications that need to run on both desktop and mobile devices.

  ```cmd
  sencha generate app -ext MyAppName ./MyAppPath
  ```

### Layouts

There are several layouts that a container in ***Ext JS*** can use.

To declare which one will be chosen, we use the `layout` property.

```js
Ext.create('Ext.container.Container', {
    layout: ...
});
```

#### Available layouts

- `border`

  This is a multi-pane, application-oriented UI layout style that supports multiple nested panels, automatic bars between regions and built-in expanding and collapsing of regions.

  ```js
  Ext.create('Ext.container.Container', {
      layout: 'border',
      ...
  });
  ```

  This layout's children must declare a specific region to reside in.

  Such regions are:
  - `center`
  - `east`
  - `north`
  - `south`
  - `west`
- `card`

  This layout manages multiple child Components, each fitted to the Container, where only a single child Component can be visible at any given time.

  ```js
  const p = Ext.create('Ext.container.Container', {
      layout: 'card',
      ...
  });

  // Show the 2nd item (index of 1)
  p..getLayout().setActiveItem(1);
  ```

- `fit`

  This is a base class for layouts that contain a single item that automatically expands to fill the layout's container.

  ```js
  Ext.create('Ext.container.Container', {
      layout: 'fit',
      ...
  });
  ```

- `hbox`

  A layout that arranges items horizontally across a `Ext.container.Container`.

  ```js
  Ext.create('Ext.container.Container', {
      layout: 'hbox',
      ...
  });
  ```

  It is basically the same as using the following ***CSS*** in an ***HTML***'s div:

  ```css
  .container {
      display: flex;
  }
  ```

- `vbox`

  A layout that arranges items vertically across a `Ext.container.Container`.

  ```js
  Ext.create('Ext.container.Container', {
      layout: 'vbox',
      ...
  });
  ```

  It is basically the same as using the following ***CSS*** in an ***HTML***'s div:

  ```css
  .container {
      display: flex;
      flex-direction: column;
  }
  ```

### Stores

A `store` is a client-side collection of records (instances of a `Model` class). It basically holds instances of a `Model` class.

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

We can have a store inherit another store. This can be done with the `type` and `source` properties.

```js
// Using the "type" property
Ext.define('MyApp.store.MyStore', {
    extend: 'Ext.data.Store',
    type: 'store'
});
// Using the "source" property
Ext.define('MyApp.store.MyStore', {
    extend: 'Ext.data.Store',
    source: 'store'
});
```

- `type` is used when the new store inherits the parent store's properties but the data icluded, although identical, are different instances and, as such, will create duplicates.
- `source` is used when the new store inherits the parent store's data. `Source` is typically used when we want to filter or sort data without editing the parent store.

#### Sorting

To sort a store's data, you can either declare it with the `sorters` property or call the `sort` method.

Let's say we have the following store:

```js
const store = Ext.create('Ext.data.Store', {
    fields: ['name', 'age'],
    data: [
        {name: 'Alice', age: 25},
        {name: 'Bob', age: 30},
        {name: 'Charlie', age: 20}
    ]
});
```

- Property

  ```js
  const store = Ext.create('Ext.data.Store', {
      fields: ['name', 'age'],
      data: [
          {name: 'Alice', age: 25},
          {name: 'Bob', age: 30},
          {name: 'Charlie', age: 20}
      ],
      sorters: [
          { property: 'name', direction: 'ASC' },
          { property: 'age', direction: 'DESC' }
      ]
  });
  ```

- Method

  ```js
  //sort by a single field
  store.sort('age', 'DESC');

  // sorting by multiple fields
  store.sort([
      { property: 'name', direction: 'ASC' },
      { property: 'age', direction: 'DESC' }
  ]);
  ```

#### Filtering

Same with sorting, to filter a store's data, you can either declare it with the `filters` property or call the `filter` method.

- Property

  ```js
  const store = Ext.create('Ext.data.Store', {
      fields: ['name', 'age'],
      data: [
          {name: 'Alice', age: 25},
          {name: 'Bob', age: 30},
          {name: 'Charlie', age: 20}
      ],
      filters: [
          { property: 'name', value: 'Charlie' },
          { property: 'age', value: 25, operator: '>' }
      ]
  });
  ```

- Method

  ```js
  //filter by a single field
  store.filter('age', 25);

  // filtering by multiple fields
  store.filter([
      { property: 'name', value: 'Charlie' },
      { property: 'age', value: 25, operator: '>' }
  ]);
  ```

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

### Templates

Templates are used to create a project will default code, functions, methods, imports etc already setup for you on project creation.

You can also create your own templates to use.

#### Turning app into template

1. Supposedly your project is called ***`ProjectTemplate`***.

   Find and replace all references of ***`ProjectTemplate`*** to ***`{appName}`***.
2. Delete all ***`(classic|modern)(-(el_GR|en|...)).json(p)`*** files.

   > These are the build files that are created on running the app.
3. Add the ***`.tpl`*** extension to:
   - ***`app.json`***
   - ***`build.xml`***
   - ***`index.html`***
4. Add the ***`.tpl.default`*** extention to all other files except for ***`*.json`*** and ***`*.scss`*** ones.
5. "*Escape*" all dot characters (`.`) that are inside curly brackets (`{}`) in ***`app.json.tpl`***.

   For example, change

   ```json
   "{toolkit.name}"
   ```

   to

   ```json
   "{toolkit\.name}"
   ```

   > To make your life easier, search for regex `\{(\w+\.\w+)+\}`.
6. Change values inside curly brackets (`{}`) so that they get compiled correctly.

   > Basically, when building an app using a template, the program assumes that whatever is in curly brackets (`{}`) is a variable to be changed. So, if you want to keep the curly brackets (`{}`) and the value inside, you must change the format so it understand it's here to stay.

   Instead of

   ```javascript
   bind: '{binding}'
   ```

   we want

   ```javascript
   bind: '{["\{binding\}"]}'
   ```

   > DO NOT attempt this for `{appName}` that was mentioned earlier!

#### Create app using template

```bash
sencha generate app -ext -s <PATH_TO_TEMPLATE> <APP_NAME> <PATH_TO_CREATE_APP>
```

Eg.

```bash
sencha generate app -ext -s ./templates/some-template myApp ./myApp
```

## Ext - Resources

- [Getting Started with npm](https://docs.sencha.com/extjs/7.5.1/guides/getting_started/getting_started_with_npm.html)
- [Documentation](https://docs.sencha.com/extjs/7.4.0/index.html)
- [app.json file explanation](https://docs.sencha.com/cmd/guides/app_json.html)
- [Ext JS Kitchen Sink](https://examples.sencha.com/extjs/7.4.0/examples/kitchensink/#all)
- [ExtJS-Tutorial](https://www.extjs-tutorial.com/extjs/Introduction)

[HOME](https://github.com/Stratis-Dermanoutsos/Full-Stack-Notes#full-stack-notes) or [⬆ Back to top](#ext)
