# React

- [**Notes**](#react---notes)
- [**Resources**](#react---resources)

## React - Notes

### Install

```bash
npm install -g create-react-app
```

### Create React project

```bash
create-react-app <project-directory> # general syntax
create-react-app .                   # inside current directory

# better as it always uses the latest version
npx create-react-app <project-directory> # general syntax
npx create-react-app .                   # inside current directory
```

### Commands

- Start the development server

  ```bash
  npm start
  ```

- Bundle the app into static files for production

  ```bash
  npm run build
  ```

- Start the test runner

  ```bash
  npm test
  ```

- Remove this tool and copy build dependencies, configuration files and scripts into the app directory

  ```bash
  npm run eject
  ```

  Once you run this, there is no turning back!

### JSX

***JSX*** is a syntax extension for ***JavaScript***. It was written to be used by ***React*** and looks a lot like ***HTML***. Given ***JSX*** is not valid ***JavaScript***, web browsers can't read it directly.

***JSX*** is an inline markup that looks like ***HTML*** and gets transformed to ***JavaScript***. A ***JSX*** expression starts with an ***HTML***-like open tag, and ends with the corresponding closing tag. ***JSX*** tags support the ***XML*** self close syntax so you can optionally leave the closing tag off.

For example,

```javascript
return (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

### Components

**Components** is the heart of ***React***. Their job is only 1: Break UIs into small chunks.

They can be either a function or an **ES6** class.

#### Function components

```javascript
const ListItem = ({text}) => {
  return <li>{text}</li>;
}
```

How to use?

```javascript
<ul>
  <ListItem text={'This is a Component Instance'}></ListItem>
  <ListItem text={'This is another Component Instance'}/>
</ul>
```

#### Class components

```javascript
class ListItem extends React.Component {
  render() {
    return <li>{this.props.children}</li>;
  }
}
```

How to use?

```javascript
<ul>
  <ListItem>This is a Component Instance</ListItem>
  <ListItem>This is another Component Instance</ListItem>
</ul>
```

#### Component Instance

```javascript
<ListItem>This is a Component Instance</ListItem>
```

#### Element

```javascript
React.createElement(ListItem, {children: 'This is an Element'})
```

### Hooks

UI components are often dynamic.

Developers had to build and use classes to use certain ***React***'s features.
While classes are still there, hooks are a more ergonomic option.

Hooks enable the developer to re-use stateful logic.
Without them, it is easy, and sometimes even necessary, to wrap components inside components and repeat this process a lot of time, eventually getting lost.

Basically, hooks are functions that generally start with the word '*use*'.

> ***Only call them at the top level of a function***!

- ***useState()***

  ```javascript
  import { useState } from 'react';
  ```

  Its purpose is to handle reactive data. Any data that changes is called *state*.
  So, when there is a change in the *state*, ***React*** re-renders the UI to display those changes.

  ```javascript
  const [count, setCount] = useState(0);
  /* - 'count' is called reactive value.
     - 'setCount' is called setter.
     - inside the parentheses, we define the default state.
       In this example, we set 'count' equal to 0. */
  ```

- ***useEffect()***

  ```javascript
  import { useEffect } from 'react';
  ```

  It exists to handle the lifecycle of a component.

  The code bellow runs every time a state is changed.

  ```javascript
  useEffect(() => {
    alert('Hello component'); // Called when component is initiallized

    return () => alert('Goodbye component'); // Called when component is destroyed
  }, []) // the ', []' is optional and works as an array of dependencies
  ```

  Example case

  ```javascript
  const [count, setCount] = useState(0);
  const [loaded, setLoaded] = useState(false);

  /* This causes an infinite loop
  This is because everytime we fetch, we update the state, triggering another fetch */
  useEffect(() => {
    fetch('foo').then(() => setLoaded(true))
  })

  /* So, we add 'count' as a dependency
  The brackets [] work to add an array of dependencies, in which 'count' is added.
  This time, this runs only when 'count' changes */
  useEffect(() => {
    fetch('foo').then(() => setLoaded(true))
  }, [count])
  ```

- ***useContext()***

  ```javascript
  import { useContext } from 'react';
  ```

  It allows the developer to work with ***React***'s context API. In other words, share data without passing props.

  ```javascript
  const moods = {
    happy: '😃',
    sad: '😢'
  }

  const MoodContext = createContext(moods);

  function App() {
    return (
      <MoodContext.Provider value={moods.happy}>
        <MoodEmoji />
      </MoodContext.Provider>
    );
  }

  function MoodEmoji() {
    const mood = useContext(MoodContext);

    return <p>{ mood }</p>
  }
  ```

  In the code above, when the mood value changes inside parent, it changes in the 'MoodEmoji' component too.

  The ***useContext()*** hook is a cleaner version of a 'Consumer' component.
- ***useRef()***

  ```javascript
  import { useRef } from 'react';
  ```

  It's used to grab a value that changes but does not re-render the UI.

  ```javascript
  function App() {
    const count = useRef(0);

    return (
      <button onClick={ () => count.current++ }>
        { count.current }
      </button>
    );
  }
  ```

  In the code above, the value of 'count' changes but the displayed value stays the same.

  A more common use is to grab ***HTML*** elements from ***JSX***.

  ```javascript
  function App() {
    const myBtn = useRef(null);

    const clickIt = () => myBtn.current.click();

    return (
      <button ref={myBtn}></button>
    );
  }
  ```

- ***useReducer()***

  ```javascript
  import { useReducer } from 'react';
  ```

  It is basically a different way to manage state

  ```javascript
  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return state + 1;
      case 'decrement':
        return state - 1;
      default:
        throw new Error();
    }
  }

  function App() {
    const [state, dispatch] = useReducer(reducer, 0);

    return (
      <>
        Count: {state}
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      </>
    );
  }
  ```

- ***useMemo()***

  ```javascript
  import { useMemo } from 'react';
  ```

  It is used to optimize computation cost for improved performance.

  It is only recommended for expensive calculations.

  ```javascript
  const [count, setCount] = useState(0);

  /* We compute the 'countExpensive' everytime the value of 'count' changes.
  This happens because we added 'count' as a dependency. */
  const countExpensive = useMemo(() => {
    return count ** 2;
  }, [count]);
  ```

- ***useId()***

  It is a new hook introduced with [React 18](https://reactjs.org/blog/2022/03/29/react-v18.html) and it is used for generating unique IDs on both the client and server.

  ```javascript
  function Checkbox() {
    const id = useId();
    return (
      <>
        <label htmlFor={id}>Do you like React?</label>
        <input type="checkbox" name="react" id={id} />
      </>
    );
  }
  ```

There are more hooks, but I kept it simple and focused to the common ones.

### Images

```javascript
import logo from './images/logo.png';
.
.
.
  <img src={logo} alt="logo" />
```

### Import styles from CSS

- The CSS

  ```css
  .button {
    border: 2px solid;
    color: white;
    background-color: red;
    transition: all 0.15s;
  }

  .button:hover,
  .button:focus {
    border: 2px solid blue;
  }

  .button:active {
    background-color: green;
  }
  ```

- The Component

  ```javascript
  import styles from 'stylesheet.css';

  export const Cmp = () => {
    return (
      <div>
        {/* Both have the same result */}
        <button className={styles.button}></button>
        <button className='button'></button>
      </div>
    );
  }
  ```

### Make your life easier

#### Object of React Components

This will serve as a simple library of components.

They can be defined inside a single file, let's say *Timeline.js*.

```javascript
const Percentage = () => <div>This is a Percentage component.</div>
const Progress = () => <div>This is a Progress component.</div>
const Calendar = () => <div>This is a Calendar component.</div>

const Timeline = {
  Percentage,
  Progress,
  Calendar
}

export default Timeline;
```

Now, to call them, simply do

```javascript
import Timeline from 'Timeline';

<Timeline.Percentage  />
<Timeline.Progress  />
<Timeline.Calender />
```

#### Short import paths

This is a very common problem when working with ***React***:

```javascript
import module from '../../models/car';
```

It'd be much better looking if it was something like:

```javascript
import module from 'models/car';
```

To achieve this, simple add the following line inside the `compilerOptions` in your **jsconfig.json** or **tsconfig.json**. (depending on whether you use ***JavaScript*** or ***TypeScript*** respectively)

```json
'baseUrl': 'src',
```

It will look something like this:

```json
{
  "compilerOptions": {
    "baseUrl": "src",
    ...
  }
}
```

#### Suspend Layout

The new `<Suspense>` tag enables you to render another component while your data is being fetched, without the need of a ternary operator (`? :`) or anything like that.

```javascript
<Suspense fallback={<h1>Loading...</h1>}>
  <div>
    {data.map(...)}
  </div>
</Suspense>
```

#### Avoid inline function calls

Let's say you need a button that writes `"Hello world!"` in the console.

You could do it in an inline style:

```jsx
import React from 'react';

const MyComponent = () => {
  return <Button onClick={() => console.log('Hello world!')}>Click me</Button>;
}

export default MyComponent;
```

or by using a predefined method:

```js
import React from 'react';

const MyComponent = () => {
  const handleClick = () => {
    console.log('Hello world!');
  };

  return <Button onClick={handleClick}>Click me</Button>;
}

export default MyComponent;
```

While the inline method can be useful in reducing the lines of code in your file, it greatly reduces readability and makes your program difficult to maintain if used frequently.

By defining a method before using it in your ***JSX***, you can write longer functions and still keep them readable.

### Deploy to production

#### Apache

To deploy a ***React*** project to apache, there are several steps that must be taken. These steps with ensure that the endpoint will work for all routes and apache won't throw 404s for not finding a directory.

1. Go to your **package.json** and paste the following:

   ```json
   "homepage": ".",
   ```

2. Inside the `<head>` tag of your **index.html** file, paste:

   ```html
   <script type="text/javascript"> document.write("<base href='//" + document.location.host + "/' />"); </script>
   ```

   Note that, after the `document.location.host`, you may need to paste the name of the directory your application will be deployed in. This is a necessity if your server handles multiple endpoints.

   To do that:

   ```html
   <script type="text/javascript"> document.write("<base href='//" + document.location.host + "/{path}/' />"); </script>
   ```

   and replace the `{path}` with the directory's path.

3. Inside the **App.js** or **index.js**, depending on where you've declared the `<BrowserRouter>`, you'll have to provide the `{path}` you set in the previous step as `basename`.

   To do that, change `<BrowserRouter>` into `<BrowserRouter basename='{path}'>` replacing it like before.

4. Inside the project's **public/** directory, create a file called **.htaccess** and paste:

   ```text
   Options -MultiViews
   RewriteEngine On
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteRule ^ index.html [QSA,L]
   ```

5. Build & deploy

   ```sh
   npm run build
   ```

   and paste the generated files inside your Apache directory.

## React - Resources

- [Fireship video (explanation)](https://youtu.be/Tn6-PIqc4UM)
- [Beginner's Tutorial by freeCodeCamp.org (2022)](https://youtu.be/bMknfKXIFA8)
- [React Hooks Fundamentals from freeCodeCamp.org](https://www.freecodecamp.org/news/react-hooks-fundamentals/)
- [Web Dev Simplified video (introduction)](https://youtu.be/hQAHSlTtcmY)
- [Fireship video (hooks)](https://youtu.be/TNhaISOUy6Q)
- [How I structure my react components by Rakesh Potnuru](https://dev.to/itsrakesh/how-i-structure-my-react-components-aef)
- [Routing in React](https://reactrouter.com/docs/en/v6)
- [URL parameters and query strings in React](https://betterprogramming.pub/using-url-parameters-and-query-strings-with-react-router-fffdcea7a8e9)
- [React with TypeScript Cheatsheet](https://blog.bitsrc.io/react-with-typescript-cheatsheet-9dd891dc5bfe)
- [React anti-patterns by Fireship](https://youtu.be/b0IZo2Aho9Y)
- [*useful-custom-react-hooks* repository by Web Dev Simplified](https://github.com/WebDevSimplified/useful-custom-react-hooks)
- [Deploy React](https://create-react-app.dev/docs/deployment/)
- [Tailwind CSS with React](https://youtu.be/pfaSUYaSgRo)
- [React Query](https://react-query.tanstack.com)
- Best Component Libraries for React
  - [Ant Design](https://ant.design)
  - [Atomize](https://atomizecode.com)
  - [Blueprint](https://blueprintjs.com)
  - [Elementz](https://elementz.style)
  - [Headless UI](https://headlessui.dev)
  - [Mantine](https://mantine.dev)
  - [Material-UI](https://mui.com)
  - [NextUI](https://nextui.org)
  - [React-Bootstrap](https://react-bootstrap.github.io)
  - [React Flow](https://reactflow.dev/docs/)
  - [React Toolbox](http://react-toolbox.io/)
  - [Semantic UI](https://semantic-ui.com)
  - [Slate](https://github.com/ianstormtaylor/slate)
  - [Spectacle](https://formidable.com/open-source/spectacle/)
  - [VechaiUI](https://www.vechaiui.com)
  - [Victory](https://formidable.com/open-source/victory/docs)

[HOME](https://github.com/Stratis-Dermanoutsos/Full-Stack-Notes#full-stack-notes) or [⬆ Back to top](#react)
