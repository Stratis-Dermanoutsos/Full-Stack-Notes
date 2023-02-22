---
title: "React Native"
description: "This section contains notes on the React Native mobile framework."
---

***React Native*** is a ***JavaScript*** framework that uses ***React*** to build **native** applications for iOS and Android or web applications, all with 1 code base.

While it shares the **JSX** syntax with ***React***, the components and overall logic used are quite different.

## Basic App.js template

```javascript
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! Hehe</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
```

> The above `App.js` was generated using **Expo**.

## Components

All components are written in ***JSX*** as in ***React***.

For both Android and iOS applications, a **view** is the building block of UI. Everything, from a simple line to complex designs are all different kinds of views.

Usually, when developing an app for Android, you use ***Kotlin*** or ***Java***. For iOS, the norm is ***Swift*** or ***Objective-C***. ***React Native*** supports components for both of these platforms. These are called *Native Components*.

Also, ***React Native*** has many *native components* that are ready-to-use out of the box. These are called *Core Components*.

## Styling

There is no ***CSS*** in ***React Native***.

Instead, styles are defined using `StyleSheet.create()` method which accepts a ***JS*** object as parameter.

E.g.:

```js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    ...
  },
  ...
});
```

This specific `container` styling is then called using the following format:

```js
<View style={styles.container}>
  ...
</View>
```

## Platform

As more than 1 platforms are natively supported in a single code base, it is only natural that we might want some components to only render in one.

For that, we use the `Platform` module.

Code example:

```javascript
import { Platform, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {Platform.OS === 'android' &&
      <Text>This text only shows on Android.</Text>}
      {Platform.OS === 'ios' &&
      <Text>This text only shows on iOS.</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
```

## Resources

- [React Native documentation](https://reactnative.dev/docs/getting-started)
- [Setting up the development environment (docs)](https://reactnative.dev/docs/environment-setup)
- [Core Components (docs)](https://reactnative.dev/docs/components-and-apis)
- [React Native in 100 Seconds by Fireship](https://youtu.be/gvkqT_Uoahw)
- [Components libraries for expo apps (list)](https://docs.expo.dev/guides/userinterface/)
- [Change your app's name](https://stackoverflow.com/questions/34794679/change-app-name-in-react-native)
- [Change your app's icon](https://aboutreact.com/react-native-change-app-icon/)
