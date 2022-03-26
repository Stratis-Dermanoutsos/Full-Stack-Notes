# HTML

- [**Notes**](#html---notes)
- [**Resources**](#html---resources)

## HTML - Notes

### Form and Validations

#### Forms

A form in ***HTML5*** is declared with the tag *\<form>* and consists of every element that is found before the closing tag *\</form>*.

The \<form> element is a container for different types of input elements, such as: text fields, checkboxes, radio buttons, submit buttons, etc.

To declare any of these inputs, we use the input element, *\<input>*.
For the type of the input, we simple declare it inside the tag with the attribute **type**.

For example, *\<input type="text">*.

#### Validations

Go to any popular site with a registration form, and you will notice that they provide feedback when you don't enter your data in the format they are expecting. You'll get messages such as:

- "This field is required" (You can't leave this field blank).
- "Please enter your phone number in the format xxx-xxxx" (A specific data format is required for it to be considered valid).
- "Please enter a valid email address" (the data you entered is not in the right format).
- "Your password needs to be between 8 and 30 characters long and contain one uppercase letter, one symbol, and a number." (A very specific data format is required for your data).

This is called **form validation**. When you enter data, the browser and/or the web server will check to see that the data is in the correct format and within the constraints set by the application. Validation done in the browser is called **client-side** validation, while validation done on the server is called **server-side** validation.

We want to

- **get the right data, in the right format**. Our applications won't work properly if our users' data is stored in the wrong format, is incorrect, or is omitted altogether.
- **protect our users' data**. Forcing our users to enter secure passwords makes it easier to protect their account information.
- **protect ourselves**. There are many ways that malicious users can misuse unprotected forms to damage the application.

**Different types of client-side validation**:

- **Built-in form validation** uses ***HTML5*** form validation features. This validation generally doesn't require much ***JavaScript***. Built-in form validation has better performance than ***JavaScript***, but it is not as customizable as **JavaScript validation**.
- **JavaScript validation** is coded using ***JavaScript***. This validation is completely customizable, but you need to create it all (or use a library).

**Using built-in form validation attributes**:

- ***required***: Specifies whether a form field needs to be filled in before the form can be submitted.
- ***minlength*** and ***maxlength***: Specifies the minimum and maximum length of strings.
- ***min*** and ***max***: Specifies the minimum and maximum values of numerical input types.
- ***type***: Specifies whether the data needs to be a number, an email address, or some other specific preset type.
- ***pattern***: Specifies a regular expression that defines a pattern the entered data needs to follow.

### Semantic and non-semantic HTML

A Semantic element clearly describes its meaning to both the browser and the developer.

- non-semantic elements: *\<div>*, *\<span>*
- semantic elements: *\<article>*, *\<footer>*, *\<form>*, *\<header>*, etc

![HTML Semantic](/Images/HTML-Semantic.gif)

### Useful tags/attributes

- **no translate** attribute

  ```html
  translate="no"

  //Example
  <p translate="no">Company</p>
  ```

  This can be very useful to prevent your brand's name from being translated to something else.

### Custom HTML element

You can actually create and use your own custom elements in HTML.

- Declare the element using ***JavaScript***

  ```javascript
  class CustomElement extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 'This is a custom element.';
    }
  }

  customElements.define('custom-element', CustomElement);
  ```

- Use it in your ***HTML***

  ```html
  <custom-element />
  ```

Full example:

```html
<body>
  <script>
    class CustomElement extends HTMLElement {
      connectedCallback() {
        this.innerHTML = 'This is a custom element.';
      }
    }

    customElements.define('custom-element', CustomElement);
  </script>

  <custom-element />
</body>
```

## HTML - Resources

- [HTML in 100 seconds by Fireship](https://youtu.be/ok-plXXHlWw)
- [w3schools](https://www.w3schools.com/html/default.asp)
- [Form and Validations](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- [Web Dev Simplified video (forms)](https://youtu.be/fNcJuPIZ2WE)

[HOME](https://github.com/Stratis-Dermanoutsos/Full-Stack-Notes#full-stack-notes) or [⬆ Back to top](#html)
