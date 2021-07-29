# 100 DAYS OF CODE

This is a challenge and way for me to acquire practical knowledge and skills.

The goal is to complete the TODO list in the [GOALS](./README.md#GOALS) section.

Hopefully, by the end of this challenge, I will have the skills to be competitive at what I do and get more job offers!

## RULES

- Consecutive days of coding/studying
- Learn/practice new things everyday
- Upload progress on GitHub

## GOALS

- Learn
  - [x] ***HTTP*** protocol
  - [x] ***HTTP*** requests
  - [ ] Fullstack web development
    - [ ] Frontend
      - [x] Basics
        - [x] ***HTML***
        - [x] ***CSS***
        - [x] ***JavaScript***
      - [ ] Frameworks/Libraries
        - [x] ***Tailwind CSS***
        - [x] ***SASS***
        - [ ] ***React***
        - [ ] ***Bootstrap***
        - [ ] ***jQuery***
      - [x] Version Control System (***Git*** & ***Github***)
      - [x] Package Manager (***NPM***)
      - [ ] Module Bundler (***Webpack***)
      - [ ] Extras for ***React***
        - [ ] ***Redux***
    - [ ] Backend
      - [x] ***C#***
      - [ ] ***ASP.NET***
      - [ ] Process management
      - [ ] Threads & Concurrency
      - [ ] Basic Networking Concepts
        - [ ] Server-Client
        - [ ] APIs
      - [ ] Databases
        - [x] ***MySQL***
        - [x] ***PostgreSQL***
        - [ ] ***MongoDB***
      - [ ] CI/CD Tools
        - [ ] ***Jenkins***
        - [ ] ***GitLab***
      - [ ] Cloud Providers
        - [ ] ***AWS***
        - [ ] ***Azure***
      - [ ] Learn concept and how to setup
        - [ ] Reverse and Forward proxy
        - [ ] Load Balancer
        - [ ] Caching Server
        - [ ] Firewall
  - [ ] ***MAUI***

## Days - Knowledge gained

Days that are missing were spent with practice on a technology mentioned in the near previous ones.

Tools I already know and use won't appear here.

### 1 HTTP

- ***HTTP*** means ***HyperText Transfer Protocol***
- ***HTTP***, as a request-response protocol, gives users a way to interact with web resources such as HTML files by transmitting hypertext messages between clients and servers
- ***HTTP*** is a method for encoding and transporting information between a client (such as a web browser) and a web server
- ***HTTP*** requests are:
  - ***CONNECT***: The ***CONNECT*** method establishes a tunnel to the server identified by the target resource.
  - ***DELETE***: The ***DELETE*** method deletes the specified resource.
  - ***GET***: The ***GET*** method requests a representation of the specified resource. Requests using ***GET*** should only retrieve data.
  - ***HEAD***: The ***HEAD*** method asks for a response identical to that of a ***GET*** request, but without the response body.
  - ***OPTIONS***: The ***OPTIONS*** method is used to describe the communication options for the target resource.
  - ***PATCH***: The ***PATCH*** method is used to apply partial modifications to a resource.
  - ***POST***: The ***POST*** method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server.
  - ***PUT***: The ***PUT*** method replaces all current representations of the target resource with the request payload.
  - ***TRACE***: The ***TRACE*** method performs a message loop-back test along the path to the target resource.
- I made basic ***API*** in ***C#***
  - Project is called ***BirthdayAPI***

### 2 JavaScript

- Basics of ***JavaScript*** (from ***[Speaking JavaScript](http://speakingjs.com)***)
- ***obj.propKey = value*** and ***obj['propKey'] = value*** are equal
- if ***1 = 0001***, then ***~1 = 1110***
- ***'abc'.charAt(1)*** and  ***'abc'[1]*** are equal, tho some older browsers don't support the latter
- Comparing strings
  - is case-sensitive

        > 'B' > 'A' // true
        > 'B' > 'a' // false
  - doesn't handle umlauts and accents well

        > 'b' > 'ä' // false
- ***C#*** vs ***JavaScript*** (only notable differences/similarities as I am used to writing code in ***C#***)

|  | C#      | JavaScript |
| ----------- | ----------- | ----------- |
| types | int, float, double, char, bool, ... | let, var, const |
| methods | \<access> \<type> \<name>(\<type> x)  | function \<name>(x) |
| named parameters | fun(x=4) | fun({ x: 4 }) |
| print | System.Console.WriteLine(str) | console.log(str) |
| str -> num | int.Parse(str) | +str (or parseInt(str)) |
| num -> str | num.ToString() | num.toString() |
| exceptions | try {} catch(Exception) {} | try {} catch(exception) {} |
| closures | return delegate() { return val;}; | return function() { return val;} |
| foreach | foreach (int elem in arr) {} | for (var elem in arr) {} |
| using | using (obj) {} | with (obj) {} |
| class | class Dog { string name; public Dog(string x) { this.name = x; } } | function Dog(x) { this.name = x; } |
| inheritance | class Subclass : Baseclass | var subclass = { [[Prototype]]: baseclass } |
| accessors | \<type> X { get {return x;} set {x = value;} } | get X() { return x; }, set X(value) { x = value; } |
| regular expressions | Regex reg = new Regex(@"^\w") | /^\w/ |

### 3 SASS

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

### 6 NPM

To install ***NPM***, simply install ***[Node.js](https://nodejs.org)***.

- Install
  - without arguments

        npm i       # option 1
        npm install # option 2
    Running **npm install** without arguments installs modules defined in the dependencies section of the **package.json** file.
  - with arguments

        npm install <package>             # install specified package
        npm install <package1> <package2> # install multiple packages
        npm install <package>@<version>   # install specified version of package
  - Options
    - (with ***--global***)

          npm install -g       # option 1
          npm install --global # option 2
      When run with **--global** or **-g**, **npm install** installs the package globally. This means the package is installed in two places. The first is at the root directory where **package.json** is defined. The second is the global node_modules folder on the user system.
    - (with ***--save***)

          npm install <package> -S     # option 1
          npm install <package> --save # option 2
      When run with **--save**, **npm install** modifies the **package.json** file to include the specified package as a dependency. In this case, the express package will be added as a dependency to **package.json**.
    - (with ***--save-dev***)

      The **--save-dev** flag specifies that the package should be added to the devDependencies section of the **package.json** rather than the dependencies section.
    - (with ***--production***)

          npm install -p           # option 1
          npm install --production # option 2
      The **--production** flag specifies to exclude devDependencies from the install. This means any dependency listed under the devDependencies section of package.json won't get installed when this flag is present.
- Uninstall

      npm (-g) un <package>
      npm (-g) uninstall <package>
- List installed packages

      npm list -g --depth=0 # global
      npm list              # local
- Update (global) packages

      npm up (-g) <package1> <package2> <package3>     # option 1
      npm update (-g) <package1> <package2> <package3> # option 2
- Update ***NPM***

      npm install -g npm@latest # multiplatform
      npm-windows-upgrade       # for windows
- Fix issues (for example, when you move a project to another machine)

      npm audit fix
      npm audit fix --force

### 7 React

- Install

      npm install -g create-react-app
- Create React project

      create-react-app <project-directory> # general syntax
      create-react-app .                   # inside current directory
- Commands
  - Start the development server

        npm start
  - Bundle the app into static files for production

        npm run build
  - Start the test runner

        npm test
  - Remove this tool and copy build dependencies, configuration files and scripts into the app directory

        npm run eject
    Once you run this, there is no turning back!
- ***JSX***

  ***JSX*** is a syntax extension for ***JavaScript***. It was written to be used by ***React*** and looks a lot like ***HTML***. Given ***JSX*** is not valid ***JavaScript***, web browsers can't read it directly.

  ***JSX*** is an inline markup that looks like ***HTML*** and gets transformed to ***JavaScript***. A ***JSX*** expression starts with an ***HTML***-like open tag, and ends with the corresponding closing tag. ***JSX*** tags support the ***XML*** self close syntax so you can optionally leave the closing tag off.

  For example,

      return (
        <div>
          <h1>Hello!</h1>
          <h2>Good to see you here.</h2>
        </div>
      );
- Hooks

  UI components are often dynamic.

  Developers had to build and use classes to use certain ***React***'s features.
  While classes are still there, hooks are a more ergonomic option.

  Hooks enable the developer to re-use stateful logic.
  Without them, it is easy, and sometimes even necessary, to wrap components inside components and repeat this process a lot of time, eventually getting lost.

  Basically, hooks are functions that generally start with the word '*use*'.

  Basic rule: ***Only call them at the top level of a function***!

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
- Example of simple todolist app using 3 files
  - App.js

        import React, { useState, useRef } from 'react';
        import TodoList from './TodoList';
        import { uniqueId } from 'lodash';

        function App() {
            /* This is a state variable, using the 'useState' hook.
            It is used so React re-renders things when the state is changed. */
            const [todos, setTodos] = useState([]);

            /* The 'useRef' hook allows us to reference elements inside our HTML.
            Notice the ref tag inside our input elements. */
            const todoNameRef = useRef();

            /* This function is called by a Todo item when its checkbox element is clicked. */
            function toggleTodo(id) {
                const newTodos = [...todos];
                const todo = newTodos.find(todo => todo.id === id);
                todo.complete = !todo.complete;
                setTodos(newTodos);
            }

            function handleAddTodo() {
                const name = todoNameRef.current.value; // Current value of the input field.
                if (name === '') return; // If the input field is empty, do nothing.

                setTodos([...todos, { id: uniqueId(), name: name }]); // Add the new todo to the list.
                todoNameRef.current.value = ''; // Reset the input field.
            }

            /* Remove all elements that are complete.
            This can be achieved by filtering our list and keeping only non-completed tasks */
            function handleDeleteCompleted() {
                const newTodos = todos.filter(todo => !todo.complete);
                setTodos(newTodos);
            }

            // Render the app.
            return (
                <>
                    <TodoList todos={todos} toggleTodo={toggleTodo} /> {/* Renders the todos list */}
                    <input ref={todoNameRef} type="text" placeholder="Add a todo" />
                    <button onClick={handleAddTodo}>Add todo</button>
                    <button onClick={handleDeleteCompleted}>Clear completed</button>
                </>
            );
        }

        export default App;
  - TodoList.js

        import React from 'react';
        import Todo from './Todo';

        /* Takes a list of todos and for each todo, 
        it returns a Todo component with the todo's text and id. */
        export default function TodoList({ todos, toggleTodo }) {
            return (
                todos.map(todo => {
                    return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
                })
            );
        }
  - Todo.js

        import React from 'react';

        /* Takes the todo and returns its name along with a checkbox */
        export default function Todo({ todo, toggleTodo }) {
            function handleTodoClick() {
                toggleTodo(todo.id);
            }

            return (
                <div>
                    <label>
                        <input type="checkbox" checked={!!todo.complete} onChange={handleTodoClick} />
                        {todo.name}
                    </label>
                </div>
            )
        }
- Images

      import logo from './images/logo.png';
      .
      .
      .
        <img src={logo} alt="logo" />
