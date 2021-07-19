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
      - [ ] Framework
        - [x] ***Tailwind CSS***
        - [x] ***SASS***
        - [ ] ***React***
      - [x] Version Control System (***Git*** & ***Github***)
      - [x] Package Manager (***NPM***)
      - [ ] Module Bundler (***Webpack***)
      - [ ] Extras for ***React***
        - [ ] ***NextJS***
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

Disclaimer: Days that are missing were spent with practice on a technology mentioned in the near previous ones.

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

  ***JSX*** is a syntax extension for ***JavaScript***. It was written to be used by ***React*** and looks a lot like ***HTML***. Given ***JSX*** is not valid ***JavaScript***, web browsers cant read it directly.

  ***JSX*** is an inline markup that looks like ***HTML*** and gets transformed to ***JavaScript***. A ***JSX*** expression starts with an ***HTML***-like open tag, and ends with the corresponding closing tag. ***JSX*** tags support the ***XML*** self close syntax so you can optionally leave the closing tag off.

  For example,

      return (
        <div>
          <h1>Hello!</h1>
          <h2>Good to see you here.</h2>
        </div>
      );
- ***useState*** hook

      import { useState } from 'react';

      const [todos, setTodos] = useState([]);
  It is used so React re-renders things when the state is changed.
  For example, if we add a todo using

      setTodos([...todos, { id, name }]);
  react will re-render our app and include the new todo in the todos list.

- Example of app using 3 files
  - App.js

        import React, { useState, useRef } from 'react';
        import TodoList from './TodoList';

        function App() {
          const [todos, setTodos] = useState([]);

          const todoNameRef = useRef();
          let currentId = 0;

          function addTodo() {
            const name = todoNameRef.current.value;
            if (name === '') return;

            const id = ++currentId;
            setTodos([...todos, { id, name }]);
            todoNameRef.current.value = '';
          }

          return (
            <>
              <TodoList todos={todos} />
              <input ref={todoNameRef} type="text" placeholder="Add a todo" />
              <button onClick={addTodo}>Add todo</button>
            </>
          );
        }

        export default App;
  - TodoList.js

        import React from 'react'
        import Todo from './Todo';

        export default function TodoList({ todos }) {
            return (
                todos.map(todo => {
                    return <Todo key={todo.id} todo={todo} />
                })
            )
        }
  - Todo.js

        import React from 'react'

        export default function Todo({ todo }) {
            return (
                <div>
                    <label>
                        <input type="checkbox" checked={todo.complete} />
                        {todo.name}
                    </label>
                </div>
            )
        }
