# JavaScript

- [**Notes**](#javascript---notes)
- [**Resources**](#javascript---resources)

## JavaScript - Notes

### Unique traits

- ***obj.propKey = value*** and ***obj['propKey'] = value*** are equal
- if ***1 = 0001***, then ***~1 = 1110***
- ***'abc'.charAt(1)*** and  ***'abc'[1]*** are equal, tho some older browsers don't support the latter
- Numeric Separators are useful to make large numbers more readable

  ```javascript
  let a = 986382528 // not readable
  let a = 986_382_528 // readable
  ```

- Logical OR can be used for falsy values

  ```javascript
  const a = b || c; // If b is falsy, we set a equal to c
  ```

- Nullish Coalescing

  ```javascript
  const a = b ?? c; // Only if b is null or undefined, we set a equal to c
  ```

  Falsy values are kept.
- Grab last item of an array

  ```javascript
  const arr = ["item1", "item2", "item3", "item4", "item5"];

  const firstItem = arr[0];
  const lastItem = arr.at(-1); // const lastItem = arr[arr.length - 1];
  const secondToLast = arr.at(-2); // const lastItem = arr[arr.length - 2];
  ```

### Comparing strings

- is case-sensitive

  ```javascript
  'B' > 'A' // true
  'B' > 'a' // false
  ```

- doesn't handle umlauts and accents well

  ```javascript
  'b' > 'ä' // false
  ```

### Asynchronous code

There are 2 main ways:

- `async / await`

  ```javascript
  async function doSomethingAsynchronous() {
    // logic
  }

  const doSomethingAsynchronous = async () => {
    // logic
  };
  ```

- `then`

  ```javascript
  const doSomethingAsynchronous = new Promise((resolve, reject) => {
    // logic
  });

  doSomethingAsynchronous.then((value) => {
    // logic
  });
  ```

Generally it is best to use error handling for both cases.

For the sake of this example, we'll take a simple promise

```javascript
const greeting = new Promise((resolve, reject) => {
  resolve("Hello!");
});
```

- `async / await`, with `try / catch / finally`

  ```javascript
  async function doSomethingAsynchronous() {
    try {
      const value = await greeting;
      console.log("The Promise is resolved!", value);
    } catch (e) {
      console.error("The Promise is rejected!", error);
    } finally {
      console.log(
        "The Promise is settled, meaning it has been resolved or rejected."
      );
    }
  }
  ```

- `then / catch`

  ```javascript
  greeting
    .then((value) => {
      console.log("The Promise is resolved!", value);
    })
    .catch((error) => {
      console.error("The Promise is rejected!", error);
    })
    .finally(() => {
      console.log("The Promise is settled, meaning it has been resolved or rejected.");
    });
  ```

### Required arguments

Make a function that, when assigned to a parameter, throws an error saying it is required.

```javascript
const required = (param) => {
  throw new Error(`Parameter '${param}' is required.`);
};

const myFunction = (argument = required('argument')) => {
  // code
};
```

Now, when anyone calls `myFunction` without assigning a value to the `param` argument, it throws an error.

### Console API

There are many ways to output something using the [console API](https://developer.mozilla.org/en-US/docs/Web/API/console).

- Normal log

  ```javascript
  console.log('This is a log.');
  ```

- Error message

  ```javascript
  console.error('This is an error.');
  ```

- Warning message

  ```javascript
  console.warn('This is a warning.');
  ```

- Measure time

  ```javascript
  console.time();    // Start the timer
  console.timeLog(); // Output time passed so far
  console.timeEnd(); // Output time passed and end the timer
  ```

- Table

  Let's say we have an array of objects

  ```javascript
  const people = [
    {
      firstName: 'Pete',
      lastName: 'Frank'
    },
    {
      firstName: 'Stratis',
      lastName: 'Derm'
    },
    {
      firstName: 'Third',
      lastName: 'Person'
    }
  ];
  ```

  To output this in a tabular form

  ```javascript
  console.table(people);
  ```

- Trace

  Use this to see how the output was reached

  ```javascript
  const outputSomething = () => {
    console.trace('Hi!');
  };

  outputSomething();
  ```

- Better object output

  ```javascript
  console.dir(obj);
  ```

### Useful code snippets

- Remove duplicate values from array

  ```javascript
  const arr = [ 1, 2, 3, 2, 4, 4, 1, 5, 6 ];
  const uniqueArr = [...new Set(arr)]; // = [ 1, 2, 3, 4, 5, 6 ]
  ```

- Filter out falsy values

  ```javascript
  const arr = [ 1, null, undefined, 0, 2, "", 4 ];
  const nonFalsy = array.filter(Boolean); // = [ 1, 2, 4 ]
  ```

- Swap two variables with array destructuring

  ```javascript
  let a = 6;
  let b = 9;

  [ a, b ] = [ b, a ];
  ```

- Destructure function parameters, making code more readable

  ```javascript
  // DON'T DO THIS
  const myFunction = (one, two, three) => {
    // code
  };

  myFunction(1, 2, 3);

  // DO THIS
  const myFunction = ({one, two, three}) => {
    // code
  };

  myFunction({
    one: 1,
    two: 2,
    three: 3
  });
  ```

- Short circuit Evaluation
  - *AND*

    ```javascript
    if (condition)
      doAction();

    // is equal to
    condition && doAction();
    ```

  - *OR*

    ```javascript
    if (!condition)
      doAction();

    // is equal to
    condition || doAction();
    ```

- Convert result of division to integer

  ```javascript
  const a = 23 / 10     // = 2.3
  const b = 23 / 10 | 0 // = 2
  ```

- Optional chaining

  ```javascript
  const person = {
    name: 'Stratis',
    pet: {
      name: 'Leo'
    }
  }

  console.log(person.pet?.name); // Leo
  console.log(person.pet?.age);  // undefined
  ```

### C# vs JavaScript

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

## JavaScript - Resources

- [Speaking JavaScript book](http://speakingjs.com)
- [clean-code-javascript repository](https://github.com/ryanmcdermott/clean-code-javascript)
- [w3schools](https://www.w3schools.com/js/default.asp)
- [Environment Variables in VanillaJS by freeCodeCamp](https://www.freecodecamp.org/news/how-to-use-environment-variables-in-vanillajs/)
- [Optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- Useful libraries
  - [D3.js - Data-Driven Documents](https://d3js.org/)
  - [fullPage.js - Create Beautiful Fullscreen Scrolling Websites](https://alvarotrigo.com/fullPage/)
  - [Masonry - Cascading grid layout library](<https://masonry.desandro.com/>)
  - [Moment.js - Manipulate display dates and times in JavaScript](https://momentjs.com/)

[HOME](https://github.com/Stratis-Dermanoutsos/Full-Stack-Notes#full-stack-notes) or [⬆ Back to top](#javascript)
