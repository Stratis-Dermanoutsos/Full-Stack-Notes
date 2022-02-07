# TypeScript

- [**Notes**](#typescript---notes)
- [**Resources**](#typescript---resources)

## TypeScript - Notes

***TypeScript*** is basically a superset of ***JavaScript***.

This means that

- ***JavaScript*** code works in ***TypeScript***
- if you know ***JavaScript***, ***TypeScript*** is not that difficult to learn

However, ***TypeScript*** works more like a compiled language. In other words, you have to solve errors before your program is able to run/execute.

In fact, the way a program written in ***TypeScript*** works is through compilation to vanilla ***JavaScript*** using *tsc*. (***TypeScript*** *Compiler*)

### Classes - OOP

#### Declaration

    class Point {
      x: number = 3;
      y: number;
    }

#### Instantiation

    const pt = new Point();

#### Value assignment

    // outside of class
    pt.x = 0;
    pt.y = 0;
    pt.x = "3"; // error

    // inside of class
    this.x = 0;

#### Constructor

    class Point {
      x: number = 1;
      y: number = 1;

      constructor() {
        // code
      }

      // Normal signature with defaults
      constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
      }

      // Overloads
      constructor(x: number, y: string);
      constructor(s: string);
      constructor(xs: any, y?: any) {}
    }

#### readonly

Readonly fields are only assignable on declaration or inside the constructor.

    class Person {
      readonly name: string = "Stratis"; // correct

      constructor() {
        this.name = "Stratos"; // correct
      }

      changeName() {
        this.name = "Strat Strat"; // error
      }
    }

    const p = new Person();
    p.name = "Strat"; // error

#### Inheritage

Just as in ***JavaScript***, if you have a base class, you’ll need to call `super();` in your constructor body *BEFORE* using any `this.` members.

    class Base {
      i = 2;
    }

    class Derived extends Base {
      constructor() {
        super();
        this.i = 3;
      }
    }

#### Getters / Setters

    class C {
      _length = 0; // member variable

      // getter
      get length() {
        return this._length;
      }

      // setter
      set length(value) {
        this._length = value;
      }
    }

### Variables

    // JavaScript
    let var = 3;

    // TypeScript
    let var = 3;         // It automatically is declared as 'number'
    let var: any = 3;    // Can be any type and even change between them
    let var: number = 3; // We manually declare it as 'number'
Notice how

    let var;
and

    let var: any;
are equal in ***TypeScript***.

### Interfaces

    interface Car {
      make: string;
      hp: number;

      [key: string]: any; // additional properties
    }

    const rio: Car = {
      make: 'Kia',
      hp: 104
    }

    // This would throw error without the additional property in the 'Car' interface
    const accent: Car = {
      make: 'Hyundai',
      hp: 105,
      goodLooking: false
    }

### Arrays

    const arr: string[] = [];

    arr.push('idk, it's just a string'); // OK
    arr.push(1);                         // Error
but

    type MyList = [number?, string?]

    const arr: MyList = [];

    arr.push('idk, it's just a string'); // OK
    arr.push(1);                         // OK

### Tuples

    // Declare a tuple type
    let x: [string, number];

    // Initialize it
    x = ["hello", 10]; // OK
    x = [10, "hello"]; // Error

### Generics

    class Item<T> {
      constructor(public value: T) {}
    }

    let x: Item<number>;
    let y = new Item(3);

### Snippets

#### Objects as Maps

    interface Object {
      val: string;
    }

    type ObjectAsMap = {
      [key: string]: Object;
    };

    const objects: ObjectAsMap = {
      t: {
        val: 'hello'
      },
      te: {
        val: 'hello2'
      },
      test: {
        val: 'hello3'
      }
    };
Now you can use *arbitrary strings* to look up a value.

    const firstElement = objects['te'];

## TypeScript - Resources

- [TypeScript documentation](https://www.typescriptlang.org/docs/)
- [Book by basarat](https://basarat.gitbook.io/typescript/)
- [Fireship video (explanation)](https://youtu.be/zQnBQ4tB3ZA)
- [Fireship video (introduction)](https://youtu.be/ahCwqrYpIuM)

[HOME](https://github.com/Stratis-Dermanoutsos/Full-Stack-2021#full-stack-roadmap-2021) or [⬆ Back to top](#typescript)
