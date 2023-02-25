---
title: "Bootstrap"
description: "This section contains notes on the Bootstrap framework."
---

***Bootstrap*** is a popular front-end ***CSS*** framework developed by **Twitter**. It provides a set of pre-written ***CSS*** and ***JavaScript*** files that developers can use to build responsive, mobile-first web applications quickly and easily.

To use ***Bootstrap***, you can either

- download the [Source Files](https://getbootstrap.com/docs/5.1/getting-started/download/) or
- use **jsDelivr**

  To do this, simple paste

  ```html
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
  ```

  inside the *\<head>* element of your ***HTML*** and

  ```html
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js" integrity="sha384-eMNCOe7tC1doHpGoWe/6oMVemdAVTMs2xqW4mwXrXsW0L84Iytr2wi5v2QjrP/xp" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.min.js" integrity="sha384-cn7l7gDp0eyniUwwAZgrzD06kc/tftFf19TOAs2zVinnD/C7E91j9yyk5//jjpt/" crossorigin="anonymous"></script>
  ```

  right before the *\</body>* tag.

  Notice, the versions of the scripts are
  - bootstrap@5.1.0
  - popperjs/core@2.9.3

  Be careful to update them, in case this is outdated.

***Bootstrap*** requires the use of the ***HTML5*** doctype.

```html
<!doctype html>
<html lang="en">
  ...
</html>
```

***Bootstrap*** is developed mobile first, a strategy in which we optimize code for mobile devices first and then scale up components as necessary using ***CSS*** media queries. To ensure proper rendering and touch zooming for all devices, add the responsive viewport meta tag to your *\<head>*.

Basically, ***Bootstrap*** uses pre-defined classes that you asign to each element from within your ***HTML*** code. In this aspect, it is similar to ***Tailwind CSS*** but their use cases may differ.

## Spacing between columns

- No offset

  ```html
  <div class="row">
    <div class="border border-dark col-4 py-5"></div>
    <div class="border border-dark col-8 py-5"></div>
  </div>
  ```

- Offset

  ```html
  <div class="row">
    <div class="border border-dark col-4 py-5"></div>
    <div class="border border-dark col-7 offset-1 py-5"></div>
  </div>
  ```

- Nesting

  ```html
  <div class="row">
    <div class="col-4">
      <div class="border border-dark col-12 py-5"></div>
    </div>
    <div class="col-8">
      <div class="border border-dark col-12 py-5"></div>
    </div>
  </div>
  ```

![Bootstrap column spacing](https://raw.githubusercontent.com/Stratis-Dermanoutsos/Full-Stack-Notes/main/Images/Bootstrap-Column-Spacing.png)

## Resources

- [Bootstrap documentation](https://getbootstrap.com/docs/)
- [react-bootstrap documentation](https://react-bootstrap.github.io/getting-started/introduction/)
- [Use Bootstrap with React](https://www.creative-tim.com/blog/web-design/how-to-use-bootstrap-with-reactjs/)
