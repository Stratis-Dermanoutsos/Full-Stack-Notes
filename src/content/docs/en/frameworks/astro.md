---
title: "Astro"
description: "This section contains notes on the Astro framework."
---

***Astro*** is a static site builder that delivers lightning-fast performance by minimizing the ***JavaScript*** code that's being shipped to your browser. While doing that, you are still allowed to use and even combine multiple of the most popular frameworks, like ***React*** and ***Vue***.

## Installation / Create project

To create a project, simply run the following:

```sh
npm create astro@latest
```

Then, simply add the steps that appear in your console.

> No need to pre-create a folder, ***Astro*** will do it for you.

After the project is initialized, run the project:

```sh
npm run dev
```

## Basic structure of a component

```astro
---
// Component Script ( JavaScript / TypeScript )
//? The '---' is used to open the JS code block in line 1 and close right after the code.
const var = 'This is a title';
---
<!-- Component Template (HTML + JS Expressions) -->
<h1>{var}</h1>
```

To use the component, import it in another component or a page:

```astro
---
import Test from 'src/components/test.astro'
---
<Test />
```

> For the sake of this example, the component we created above is written in the file `src/components/test.astro`.

To pass props, use ***TypeScript*** types in the component:

```astro
---
// Component Script ( JavaScript / TypeScript )
type Props = {
    text: string
};

const { text } = Astro.props as Props;
---
<!-- Component Template (HTML + JS Expressions) -->
<h1>{text}</h1>
```

Then, you can call it as follows:

```astro
---
import Test from 'src/components/test.astro'
---
<Test text='This is a text.' />
```

## Pages and routing

***Astro*** uses both **static** and **dynamic** routing.

### Static routing

All ***Astro*** (`*.astro`) and ***Markdown*** (`*.md`) files in the `src/pages` directory automatically become pages on your website.

For example,

```text
# Example: Static routes

src/pages/index.astro        -> mysite.com/

src/pages/about.astro        -> mysite.com/about
src/pages/about/index.astro  -> mysite.com/about

src/pages/about/me.astro     -> mysite.com/about/me

src/pages/posts/1.md         -> mysite.com/posts/1
```

### Markdown pages

***Astro*** treats **`.md`** files as pages, as long as they're located inside the `src/pages/` directory.

For example,

```astro
---
# This is a block used to declare attributes
title: Hello, World
---

# Markdown page

This is your first markdown page. It probably isn't styled much, although `Markdown` does support **bold** and _italics._
```

will be automatically translated to ***HTML***.

## Layouts

Layouts are basically components with a more specific usage. They exist to re-use basic page styling for your page.

For example, create a `TestLayout.astro` file with the following content:

```astro
---
const { title } = Astro.props;
---
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>{title}</title>
    </head>
    <body>
        <slot />
    </body>
</html>
```

Notice the `<slot />` component. This is used to specify where the children of the layout will go.

Now, to use the layout, pretend it's just a component.

For example, in `index.astro`, we'll write the following:

```astro
---
import TestLayout from '../layouts/TestLayout.astro'
const title = "This is a title"
---
<TestLayout title={title}>
    <div>
        <h1>Welcome to <a href="https://astro.build/">Astro</a></h1>
        <p>Hey, I'm using a layout!</p>
    </div>
    <h1>This is an H1 component</h1>
</TestLayout>
```

What this does is it uses all the code of the layout we created earlier and replaces the `<slot />` component with all the new code that exists between the `<TestLayout>...</TestLayout>` tags.

## Styling

To style any component, simply use the `<style></style>` tag as you would in any ***HTML*** file.

However, it is **IMPORTANT** to notice that ***Astro*** uses styled components, and as such, the styling for each component needs to be declared in the same file.

```html
<style>
    h1 {
        font-size: 2rem;
    }
</style>
```

### Global styles

To add global styles to ***HTML*** elements/classes etc, use the `is:global` selector

```astro
<style is:global>
    h1 {
        color: red;
    }
</style>
```

### Choose CSS preprocessor

Simply, set the `lang` attribute for the `<style></style>` tag.

Eg.

```html
<style lang="scss">
    h1 {
        font-size: 2rem;

        span {
            font-size: 2.2rem;
        }
    }
</style>
```

## Add a framework to your page

There are 2 ways to add a UI Framework (Eg. ***React***) to your ***Astro*** project:

- Manually

  To do this manually, there are 2 steps to follow.

  1. Install the framework's dependencies:

     ```sh
     npm install --save-dev @astrojs/react react react-dom
     ```

  2. Add the framework to the `astro.config.mjs` file, as shown:

     ```mjs
     import { defineConfig } from 'astro/config';

     import react from "@astrojs/react"; //! Important

     // <https://astro.build/config>
     export default defineConfig({
       integrations: [react()] //! Important
     });
     ```

- Using the automated tool

  ```sh
  npx astro add react
  ```

## Hydration

A framework component can be made interactive (hydrated) using one of the `client:*` directives.

- This component's ***JS*** will begin importing when the page loads.

  ```astro
  <InteractiveComponent client:load />
  ```

- This component's ***JS*** will be imported once the page is done with its initial load.

  ```astro
  <InteractiveComponent client:idle />
  ```

- This component's ***JS*** will not be imported until the user scrolls down enough for component to be visible on the page.

  ```astro
  <InteractiveComponent client:visible />
  ```

- The component's ***JavaScript*** will be hydrated once a certain ***CSS*** media query is met.

  ```astro
  <InteractiveComponent client:media="(max-width: 50em)" />
  ```

- This skips ***HTML*** server-rendering, and renders only on the client. It hydrates the component immediately on page load.

  ```astro
  <SomeReactComponent client:only="react" />
  <SomePreactComponent client:only="preact" />
  <SomeSvelteComponent client:only="svelte" />
  ```

  > You must pass the component’s correct framework as a value!

## Resources

- [Astro documentation](https://docs.astro.build)
- [Astro in 100 Seconds by Fireship](https://youtu.be/dsTXcSeAZq8)
- [Create template layouts by Kevin Powell](https://youtu.be/o7iQAF2EvUU)
- [Astro crash course by Little Sticks](https://youtube.com/playlist?list=PLtLXFsdHI8JSX0qJsHfMDSTR3taqvXa5S)
- Best Libraries for Astro
  - [Astro-Bootstrap](https://www.npmjs.com/package/astro-bootstrap)
