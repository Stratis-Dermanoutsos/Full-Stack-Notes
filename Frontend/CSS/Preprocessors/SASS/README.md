# SASS

- **[Notes](#sass---notes)**
- **[Resources](#sass---resources)**

## SASS - Notes

- ***SASS*** means ***Syntactically Awesome StyleSheets***
- ***Variables***

      $red = hsl(0, 100%, 50%);
- ***Nesting***, used to avoid repeating the same classes names

      // CSS
      button a {
        font-weight: bold;
      }

      button.danger {
        color: red;
      }


      // SCSS
      button {
        a {
          font-weight: bold;
        }

        .danger {
          color: red;
        }
      }
  or for ***pseudo classes*** and ***pseudo elements***

      // CSS
      button:hover { }

      button:focus { }


      // SCSS
      button {
        &:focus { }
        &:hover { }
      }
- ***Mixins***

      // CSS
      .card {
        display: flex;
        flex-direction: column;
        background: gray;
      }

      .aside {
        display: flex;
        flex-direction: column;
        background: gray;
      }


      // SCSS
      @mixin flex-column {
        display: flex;
        flex-direction: column;
        background: gray;
      }

      .card {
        @include flex-column;
      }

      .aside {
        @include flex-column;
      }
  They can also take arguments

      @mixin flex-column($color) {
        display: flex;
        flex-direction: column;
        background: $color;
      }

      .card {
        @include flex-column(gray);
      }
- ***if-else*** statements

      @if $theme == 'light' {
        background-color: $light-bg;
      } @else {
        background-color: $dark-bg;
      }
- ***foreach*** loops

      $sizes: 40px, 50px, 80px;

      @each $size in $sizes { }

- ***functions***

      @function sum($numbers) {
        $sum = 0;

        @each $number in $numbers {
          $sum: $sum + $number;
        }

        return $sum;
      }

- Color adjustments

      $base-color: green;

      .card {
        background: lighten($base-color, 25%);
        color: darken($base-color, 25%);
      }

- Inline SVG color through variable

      $color: #FFF;

      @function hex_to_rgb($hex) {
        @return "rgb("+red($hex)+","+green($hex)+","+blue($hex)+")";
      }

      $svg1: url('data:image/svg+xml;utf8,<svg ...fill="#{$color}".../></svg>');
      $svg2: url('data:image/svg+xml;utf8,<svg ...fill="#{hex_to_rgb($color)}".../></svg>');
  Why this is useful? Cause sometimes ***SVG***s will be needed inside your ***SCSS*** and this is the easiest and most efficient way to change their color.
  Notice the use of function. Mozilla does not support ***HEX*** values so we convert the value to ***RGB***.

## SASS - Resources

- [Fireship video](https://youtu.be/akDIJa0AP5c)

[HOME](https://github.com/Stratis-Dermanoutsos/Full-Stack-2021#full-stack-roadmap-2021) or [Back to top](#sass)
