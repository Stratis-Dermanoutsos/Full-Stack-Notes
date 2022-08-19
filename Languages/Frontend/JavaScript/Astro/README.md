# Astro

- [**Notes**](#astro---notes)
- [**Resources**](#astro---resources)

## Astro - Notes

***Astro*** is a static site builder that delivers lightning-fast performance by minimizing the ***JavaScript*** code that's being shipped to your browser. While doing that, you are still allowed to use and even combine multiple of the most popular frameworks, like ***React*** and ***Vue***.

### Installation / Create project

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

### Basic structure of a component

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

### Pages and routing

***Astro*** uses both **static** and **dynamic** routing.

#### Static routing

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

#### Dynamic routing

<!-- TODO -->

#### Markdown pages

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

### Style your components / pages

To style any component, simply use the `<style></style>` tag as you would in any ***HTML*** file.

However, it is **IMPORTANT** to notice that ***Astro*** uses styled components, and as such, the styling for each component needs to be declared in the same file.

```html
<style>
    h1 {
        font-size: 2rem;
    }
</style>
```

#### Global styles

To add global styles to ***HTML*** elements/classes etc, use the `is:global` selector

```astro
<style is:global>
    h1 {
        color: red;
    }
</style>
```

#### Choose CSS preprocessor

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

### Add a framework to your page

<!-- TODO -->

### Types of rendering

<!-- TODO -->

## Astro - Resources

- [Astro documentation](https://docs.astro.build)
- [Astro in 100 Seconds by Fireship](https://youtu.be/dsTXcSeAZq8)
