# CSS

- [**Notes**](#css---notes)
- [**Resources**](#css---resources)

## CSS - Notes

### Include CSS in HTML

- Inline

  ```html
  <p style="font-size: 16px;">Hello World!</p>
  ```

- *\<style>* tag

  ```html
  <p>Hello World!</p>

  <style>
    p {
      font-size: 16px;
    }
  </style>
  ```

- Link to external ***CSS*** file

  ```html
  <link rel="stylesheet" href="<relative file path>">
  ```

  The ***CSS*** file:

  ```css
  p {
    font-size: 16px;
  }
  ```

- Import external ***CSS*** file inside *\<style>* tag

  ```html
  <style>
    @import url("<relative file path>");
  </style>
  ```

  The ***CSS*** file:

  ```css
  p {
    font-size: 16px;
  }
  ```

Note that, if you have 2 or more external stylesheets in your ***HTML***, the one linked last is more *`!important`* than the one(s) above it.

### Specificity

**Specificity** is a weight that is applied to a given ***CSS*** declaration, determined by the number of each selector type in the matching selector.

#### Selector Types

1. Least specific
    - **Type** selectors ( *p* )
    - **pseudo-elements** ( *::before* )
2. Somewhat specific
    - **Class** selectors ( *.link* )
    - **attributes** selectors ( *\[type="text"]* )
    - **pseudo-classes** ( *:hover* )
3. Very specific
    - **ID** selectors ( *#name* )

#### Exceptions

- *!important*

  When an *!important* rule is used on a style declaration, this declaration overrides any other declarations. Using *!important*, is bad practice and should be avoided because it makes debugging more difficult.

  Some simple rules:

  - Look for a way to use specificity before even considering *!important*
  - Only use *!important* on page-specific ***CSS*** that overrides foreign ***CSS*** (from external libraries, like Bootstrap)
  - Never use *!important* when you're writing a plugin/mashup
  - Don't use *!important* on site-wide ***CSS***
- *:is()* and *:not()*

  The matches-any pseudo-class *:is()* and the negation pseudo-class *:not()* are not considered a pseudo-class in the **specificity** calculation.
- *:where()*

  The pseudo-class *:where()*  always has its **specificity** replaced with zero.

### Prefixes

Prefixes are used to add CSS features, knowing that each browser will support them.

Most common prefixes are:

- *-webkit-* (for Android, Chrome, iOS, Safari)
- *-moz-* (for Firefox)
- *-ms-* (for Internet Explorer)
- *-o-* (for Opera)

For example, to ensure a transition would work on almost every browser, we'd have to write this

```css
-webkit-transition: all 4s ease;
-moz-transition: all 4s ease;
-ms-transition: all 4s ease;
-o-transition: all 4s ease;
transition: all 4s ease;
```

### Positions

The *position* property specifies the type of positioning method used for an element.

Possible values are:

- *absolute*

  ```css
  position: absolute;
  ```

  An element with this position value is positioned *relative* to the nearest positioned ancestor. If there is no ancestor, it uses the document body.

  *Absolute* positioned elements are removed from the normal flow and can overlap other elements.
- *fixed*

  ```css
  position: fixed;
  ```

  This value positions the element *relative* to the viewport. In other words, it always stays in the same place even if the page is scrolled.
- *relative*

  ```css
  position: relative;
  ```

  An element with the *relative* position value is positioned relative to its normal position.

  Setting the *top*, *right*, *bottom* and *left* properties of such element will adjust it away from its normal position.
- *static*

  ```css
  position: static;
  ```

  ***HTML*** elements are positioned *static* by default.

  *Static* positioned elements are not affected by the *top*, *right*, *bottom* and *left* properties.

  An element with this position value is not positioned in any special way and follows the normal flow of the page.
- *sticky*

  ```css
  position: sticky;
  ```

  A *sticky* element toggles between *relative* and *fixed*, depending on the scroll position. It is positioned *relative* until a given offset position is met in the viewport. Then, it 'sticks' in place (like an element with the *fixed* value)

![CSS Positions](/Images/CSS-Positions.png)

### Responsive design

There are some basic steps to follow in order to make a website resposive.

- Paste

  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```

  inside the *\<head>* element of the ***HTML*** document.
- Don't use large fixed *width* or *height* for elements.

  For example, '*500px*' can be overwhelming for some devices' screens.
  Instead, use *min-width* or *max-width* (similar for *height*) attributes.
- Use the ***HTML*** \<picture> tag for images.

  ```html
  <picture>
    <source media="(min-width:650px)" srcset="img_lg.jpg">
    <source media="(min-width:465px)" srcset="img_md.jpg">
    <img src="img.jpg" alt="Image" style="width:auto;">
  </picture>
  ```

- Use responsive size units for text.

  ```css
  // Bad
  font-size: 10px;

  // Good
  font-size: 10vw;
  ```

- Use Display layouts.

  Using **Grid** or **Flex** layout is always beneficial in order to make a web page responsive.
- Use media ***CSS*** queries.

  Media query is a rule to include a block of CSS properties only if a certain condition is true.

  ```css
  @media screen (min-width: 480px) {
    .element {
      width: 100px;
    }
  }
  ```

  Logical operators '*and*', '*or*' and '*not*' can be used for multiple conditions.

  ```css
  @media screen (min-width: 480px) and (max-width: 768px) {
    /* CSS code */
  }
  ```

- Use '*auto*' for media.

  If the '*width*' property is set to a percentage and the '*height*' is set to '*auto*', the image will be responsive.

### Viewport Units

**Viewport units** are size measuring units oftenly used in responsive design.
They’re truly “*responsive length units*” in the sense that their value changes every time the browser resizes.

These include:

- Viewport Height (`vh`)

  > This unit is based on the height of the viewport. A value of *1vh* is equal to *1%* of the viewport's height.
- Viewport Width (`vw`)

  > This unit is based on the width of the viewport. A value of *1vw* is equal to *1%* of the viewport's width.
- Viewport Maximum (`vmax`)

  > This unit is based on the **larger dimension of the viewport**. If the viewport's height is larger than the width, the value of *1vmax* will be equal to *1%* of viewport's height. Similarly, if the viewport's width is larger than the height, the value of *1vmax* will be equal to *1%* of hte viewport's width.
- Viewport Minimum (`vmin`)

  > This unit is based on the s**maller dimension of the viewport**. If the viewport's height is smaller than the width, the value of *1vmin* will be equal to *1%* of the viewport's height. Similarly, if the viewport's width is smaller than the height, the value of *1vmin* will be equal to *1%* of the viewport's width.

### Code snippets

#### Custom cursor

```css
element {
  cursor: url("/path"), auto;
}
```

#### Zoom image on hover

```css
img:hover {
  transform: scale(1.1);
}
```

#### Center anything

- Flexbox

  ```css
  .center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ```

- Position

  ```css
  .center {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  ```

- Grid

  ```css
  .center {
    display: grid;
    place-items: center;
  }
  ```

#### Smooth scrolling

```css
html {
  scroll-behavior: smooth;
}
```

## CSS - Resources

- [CSS in 100 Seconds by Fireship](https://youtu.be/OEV8gMkCHXQ)
- [w3schools](https://www.w3schools.com/css/default.asp)
- [A Complete Guide to Flexbox by CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [A Complete Guide to Grid by CSS-Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Aspect Ratio with CSS](https://www.w3schools.com/howto/howto_css_aspect_ratio.asp)
- [20 CSS Generator Tools, tweet by @mdjunaidap](https://twitter.com/mdjunaidap/status/1454742211589918731)

[HOME](https://github.com/Stratis-Dermanoutsos/Full-Stack-Notes#full-stack-notes) or [⬆ Back to top](#css)
