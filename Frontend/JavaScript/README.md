# JavaScript

- [**Notes**](#javascript---notes)
- [**Resources**](#javascript---resources)

## JavaScript - Notes

### Unique traits

- ***obj.propKey = value*** and ***obj['propKey'] = value*** are equal
- if ***1 = 0001***, then ***~1 = 1110***
- ***'abc'.charAt(1)*** and  ***'abc'[1]*** are equal, tho some older browsers don't support the latter
- Numeric Separators are useful to make large numbers more readable

      let a = 986382528 // not readable
      let a = 986_382_528 // readable
- Logical OR can be used for falsy values

      const var = a || b; // If a is falsy, we set var equal to b
- Nullish Coalescing

      const var = a ?? b; // Only if a is null or undefined, we set var equal to b
  Falsy values are kept.
- Grab last item of an array

      const arr = ["item1", "item2", "item3", "item4", "item5"];

      const firstItem = arr[0];
      const lastItem = arr.at(-1); // const lastItem = arr[arr.length - 1];
      const secondToLast = arr.at(-2); // const lastItem = arr[arr.length - 2];

### Comparing strings

- is case-sensitive

      'B' > 'A' // true
      'B' > 'a' // false
- doesn't handle umlauts and accents well

      'b' > 'ä' // false

### Useful code snippets

- Remove duplicate values from array

      const arr = [ 1, 2, 3, 2, 4, 4, 1, 5, 6 ];
      const uniqueArr = [...new Set(arr)]; // = [ 1, 2, 3, 4, 5, 6 ]
- Filter out falsy values

      const arr = [ 1, null, undefined, 0, 2, "", 4 ];
      const nonFalsy = array.filter(Boolean); // = [ 1, 2, 4 ]
- Swap two variables with array destructuring

      let a = 6;
      let b = 9;

      [ a, b ] = [ b, a ];
- Destructure function parameters, making code more readable

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
- Short circuit Evaluation
  - *AND*

        if (condition)
          doAction();

        // is equal to
        condition && doAction();
  - *OR*

        if (!condition)
          doAction();

        // is equal to
        condition || doAction();
- Convert result of division to integer

      const a = 23 / 10     // = 2.3
      const b = 23 / 10 | 0 // = 2

### Asynchronous code

There are 2 main ways:

- `async / await`

      async function doSomethingAsynchronous() {
        // logic
      }

      const doSomethingAsynchronous = async () => {
        // logic
      };
- `then`

      const doSomethingAsynchronous = new Promise((resolve, reject) => {
        // logic
      });

      doSomethingAsynchronous.then((value) => {
        // logic
      });

Generally it is best to use error handling for both cases.

For the sake of this example, we'll take a simple promise

    const greeting = new Promise((resolve, reject) => {
      resolve("Hello!");
    });

- `async / await`, with `try / catch / finally`

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
- `then / catch`

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

### Required arguments

Make a function that, when assigned to a parameter, throws an error saying it is required.

    const required = (param) => {
      throw new Error(`Parameter '${param}' is a required.`);
    };

    const myFunction = (argument = required('argument')) => {
      // code
    };

Now, when anyone calls `myFunction` without assigning a value to the `param` argument, it throws an error.

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

[HOME](https://github.com/Stratis-Dermanoutsos/Full-Stack-2021#full-stack-roadmap-2021) or [⬆ Back to top](#javascript)
