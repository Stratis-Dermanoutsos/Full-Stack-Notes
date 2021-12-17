# React

- [**Notes**](#react---notes)
- [**Resources**](#react---resources)

## React - Notes

### Install

    npm install -g create-react-app

### Create React project

    create-react-app <project-directory> # general syntax
    create-react-app .                   # inside current directory

    # better as it always uses the latest version
    npx create-react-app <project-directory> # general syntax
    npx create-react-app .                   # inside current directory

### Commands

- Start the development server

      npm start
- Bundle the app into static files for production

      npm run build
- Start the test runner

      npm test
- Remove this tool and copy build dependencies, configuration files and scripts into the app directory

      npm run eject
  Once you run this, there is no turning back!

### JSX

***JSX*** is a syntax extension for ***JavaScript***. It was written to be used by ***React*** and looks a lot like ***HTML***. Given ***JSX*** is not valid ***JavaScript***, web browsers can't read it directly.

***JSX*** is an inline markup that looks like ***HTML*** and gets transformed to ***JavaScript***. A ***JSX*** expression starts with an ***HTML***-like open tag, and ends with the corresponding closing tag. ***JSX*** tags support the ***XML*** self close syntax so you can optionally leave the closing tag off.

For example,

    return (
      <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
      </div>
    );

### Hooks

UI components are often dynamic.

Developers had to build and use classes to use certain ***React***'s features.
While classes are still there, hooks are a more ergonomic option.

Hooks enable the developer to re-use stateful logic.
Without them, it is easy, and sometimes even necessary, to wrap components inside components and repeat this process a lot of time, eventually getting lost.

Basically, hooks are functions that generally start with the word '*use*'.

<ins>Basic rule</ins>: ***Only call them at the top level of a function***!

- ***useState()***

      import { useState } from 'react';
  Its purpose is to handle reactive data. Any data that changes is called *state*.
  So, when there is a change in the *state*, ***React*** re-renders the UI to display those changes.

      const [count, setCount] = useState(0);
      /* - 'count' is called reactive value.
          - 'setCount' is called setter.
          - inside the parentheses, we define the default state.
            In this example, we set 'count' equal to 0. */
- ***useEffect()***

      import { useEffect } from 'react';
  It exists to handle the lifecycle of a component.

  The code bellow runs every time a state is changed.

      useEffect(() => {
        alert('Hello component'); // Called when component is initiallized

        return () => alert('Goodbye component'); // Called when component is destroyed
      }, []) // the ', []' is optional and works as an array of dependencies
  Example case

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
- ***useContext()***

      import { useContext } from 'react';
  It allows the developer to work with ***React***'s context API. In other words, share data without passing props.

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
  In the code above, when the mood value changes inside parent, it changes in the 'MoodEmoji' component too.

  The ***useContext()*** hook is a cleaner version of a 'Consumer' component.
- ***useRef()***

      import { useRef } from 'react';
  It's used to grab a value that changes but does not re-render the UI.

      function App() {
        const count = useRef(0);

        return (
          <button onClick={ () => count.current++ }>
            { count.current }
          </button>
        );
      }
  In the code above, the value of 'count' changes but the displayed value stays the same.

  A more common use is to grab ***HTML*** elements from ***JSX***.

      function App() {
        const myBtn = useRef(null);

        const clickIt = () => myBtn.current.click();

        return (
          <button ref={myBtn}></button>
        );
      }
- ***useReducer()***

      import { useReducer } from 'react';
  It is basically a different way to manage state

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
- ***useMemo()***

      import { useMemo } from 'react';
  It is used to optimize computation cost for improved performance.

  It is only recommended for expensive calculations.

      const [count, setCount] = useState(0);

      /* We compute the 'countExpensive' everytime the value of 'count' changes.
      This happens because we added 'count' as a dependency. */
      const countExpensive = useMemo(() => {
        return count ** 2;
      }, [count]);

There are more hooks, but I kept it simple and focused to the common ones.

### Images

    import logo from './images/logo.png';
    .
    .
    .
      <img src={logo} alt="logo" />

### Make your life easier

#### Object of React Components

This will serve as a simple library of components.

They can be defined inside a single file, let's say *Timeline.js*.

    const Percentage = () => <div>This is a Percentage component.</div>
    const Progress = () => <div>This is a Progress component.</div>
    const Calendar = () => <div>This is a Calendar component.</div>

    const Timeline = {
      Percentage,
      Progress,
      Calendar
    }

    export default Timeline;

Now, to call them, simply do

    import Timeline from 'Timeline';

    <Timeline.Percentage  />
    <Timeline.Progress  />
    <Timeline.Calender />

#### Short import paths

This is a very common problem when working with ***React***:

    import module from '../../models/car';
It'd be much better looking if it was something like:

    import module from 'models/car';
To achieve this, simple add the following line inside the `compilerOptions` in your **jsconfig.json** or **tsconfig.json**. (depending on whether you use ***JavaScript*** or ***TypeScript*** respectively)

    'baseUrl': 'src',
It will look something like this:

    {
      "compilerOptions": {
        "baseUrl": "src",
        .
        .
        .
      }
    }

## React - Resources

- [Fireship video (explanation)](https://youtu.be/Tn6-PIqc4UM)
- [Web Dev Simplified video (introduction)](https://youtu.be/hQAHSlTtcmY)
- [Fireship video (hooks)](https://youtu.be/TNhaISOUy6Q)
- [Routing in React](https://reactrouter.com/web/guides/quick-start)
- [URL parameters and query strings in React](https://betterprogramming.pub/using-url-parameters-and-query-strings-with-react-router-fffdcea7a8e9)
- [React with TypeScript Cheatsheet](https://blog.bitsrc.io/react-with-typescript-cheatsheet-9dd891dc5bfe)
- [*useful-custom-react-hooks* repository by Web Dev Simplified](https://github.com/WebDevSimplified/useful-custom-react-hooks)
- Best UI Frameworks/Libraries for React
  - [Ant Design](https://ant.design)
  - [Semantic UI](https://semantic-ui.com)
  - [Material-UI](https://mui.com)
  - [React-Bootstrap](https://react-bootstrap.github.io)
  - [Atomize](https://atomizecode.com)
  - [Blueprint](https://blueprintjs.com)

[HOME](https://github.com/Stratis-Dermanoutsos/Full-Stack-2021#full-stack-roadmap-2021) or [⬆ Back to top](#react)
