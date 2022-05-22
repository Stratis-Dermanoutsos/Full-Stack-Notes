# Ext

- [**Notes**](#ext---notes)
- [**Resources**](#ext---resources)

## Ext - Notes

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
- [Ext JS Kitchen Sink](https://examples.sencha.com/extjs/7.4.0/examples/kitchensink/#all)
- [ExtJS-Tutorial](https://www.extjs-tutorial.com/extjs/Introduction)

[HOME](https://github.com/Stratis-Dermanoutsos/Full-Stack-Notes#full-stack-notes) or [⬆ Back to top](#ext)
