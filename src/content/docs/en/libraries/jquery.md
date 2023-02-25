---
title: "jQuery"
description: "This section contains notes on the jQuery library."
---

## Add jQuery to Your Web Pages

- ### Download [***jQuery***](https://jquery.com/download/)

  ```bash
  npm install jquery
  ```

  Use by including the '*jquery-\<version>.min.js*' file inside the *\<head>* element.

  ```html
  <head>
    <script src="jquery-<version>.min.js"></script>
  </head>
  ```

- ### ***jQuery*** CDN

  ```html
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/<version>/jquery.min.js"></script>
  </head>
  ```

## Basic syntax

```javascript
$(selector).action()
```

For example,

```javascript
$(this).hide()    // hides the current element
$("p").hide()     // hides all <p> elements
$(".test").hide() // hides all elements with class="test"
$("#test").hide() // hides the element with id="test"
/* When any button is pressed, all <p> elements will be hidden */
$(document).ready(function() {
  $("button").click(function() {
    $("p").hide();
  });
});
```

## Selectors

They work quite like ***CSS***.

- *\<p>* elements

  ```javascript
  $("p")
  ```

- element with *id="test"* (' *#* ')

  ```javascript
  $("#test")
  ```

- elements with *class="test"* (' *.* ')

  ```javascript
  $(".test")
  ```

## Events

| Mouse Events | Keyboard Events | Form Events | Document/Window Events |
| --- | --- | --- | --- |
| click | keypress | submit | load |
| dblclick | keydown | change | resize |
| mouseenter | keyup | focus | scroll |
| mouseleave |  | blur | unload |

For example, do something when any paragraph (*\<p>*) elementh is clicked

```javascript
$("p").click(function(){
  // action goes here!!
});
```

## Resources

- [w3schools](https://www.w3schools.com/jquery/default.asp)
- [jQuery API documentation](https://api.jquery.com)
