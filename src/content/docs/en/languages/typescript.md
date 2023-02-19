---
title: "TypeScript"
description: "This section contains notes on the TypeScript programming language."
---

***TypeScript*** is basically a superset of ***JavaScript***.

This means that

- ***JavaScript*** code works in ***TypeScript***
- if you know ***JavaScript***, ***TypeScript*** is not that difficult to learn

However, ***TypeScript*** works more like a compiled language. In other words, you have to solve errors before your program is able to run/execute.

In fact, the way a program written in ***TypeScript*** works is through compilation to vanilla ***JavaScript*** using *tsc*. (***TypeScript*** *Compiler*)

## Classes - OOP

### Declaration

```typescript
class Point {
  x: number = 3;
  y: number;
}
```

### Instantiation

```typescript
const pt = new Point();
```

### Value assignment

```typescript
// outside of class
pt.x = 0;
pt.y = 0;
pt.x = "3"; // error

// inside of class
this.x = 0;
```

### Constructor

```typescript
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
```

### readonly

Readonly fields are only assignable on declaration or inside the constructor.

```typescript
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
```

### Inheritage

Just as in ***JavaScript***, if you have a base class, you’ll need to call `super();` in your constructor body *BEFORE* using any `this.` members.

```typescript
class Base {
  i = 2;
}

class Derived extends Base {
  constructor() {
    super();
    this.i = 3;
  }
}
```

### Getters / Setters

```typescript
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
```

## Variables

```typescript
// JavaScript
let myVar = 3;

// TypeScript
let myVar = 3;         // It automatically is declared as 'number'
let myVar: any = 3;    // Can be any type and even change between them
let myVar: number = 3; // We manually declare it as 'number'
```

Notice how

```typescript
let myVar;
```

and

```typescript
let myVar: any;
```

are equal in ***TypeScript***.

### Unknown

In ***TypeScript***, the `unknown` type works similarly to `any` but not quite the same.

```typescript
let varAny: any = 10;
let varUnknown: unknown =  10;

let s1: string = varAny; // works fine
let s2: string = varUnknown; // error
let s3: string = varUnknown as string; // works fine
```

In the above example, assigning the value of `varUnknown: unknown` to a variable without *explicit assertion* throws an error. This happens cause the compiler has no idea what the variable's type is.

For the same reason, we cannot call any methods of the `unknown` variable.

```typescript
varAny.method(); // works fine
varUnknown.method(); // error
```

However, it is possible, again, with *explicit assertion*.

```typescript
interface someInterface {
  method(): void;
};

(varUnknown as someInterface).method(); // works fine
```

> Why use `unknown` at all?
>
> Well, it is very useful in situations that you don't know what the type of an object is going to be and you have to check before you use it. It is stricter than `any` and less risky.

Example:

```typescript
interface someInterface {
  myProp: number;
};

function myFunc(param: unknown): param is someInterface {
  if (param !== null && typeof param === 'object')
    return 'myProp' in param;

  return false;
}

let var1: number = 3;
let var2: someInterface = {
  myProp: 3
};

console.log(myFunc(var1)); // = false
console.log(myFunc(var2)); // = true
```

The above example accepts an `unknown` parameter and returns *`true`* if it contains a property named `myProp`. Else, it returns *`false`*.

## Interfaces

```typescript
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
```

## Arrays

```typescript
const arr: string[] = [];

arr.push('idk, it\'s just a string'); // OK
arr.push(1);                          // Error
```

but

```typescript
type MyList = [number?, string?]

const arr: MyList = [];

arr.push('idk, it\'s just a string'); // OK
arr.push(1);                         // OK
```

## Tuples

```typescript
// Declare a tuple type
let x: [string, number];

// Initialize it
x = ["hello", 10]; // OK
x = [10, "hello"]; // Error
```

## Generics

```typescript
class Item<T> {
  constructor(public value: T) {}
}

let x: Item<number>;
let y = new Item(3);
```

## Snippets

### Objects as Maps

```typescript
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
```

Now you can use *arbitrary strings* to look up a value.

```typescript
const firstElement = objects['te'];
```

## Resources

- [TypeScript documentation](https://www.typescriptlang.org/docs/)
- [Book by basarat](https://basarat.gitbook.io/typescript/)
- [Fireship video (explanation)](https://youtu.be/zQnBQ4tB3ZA)
- [Fireship video (introduction)](https://youtu.be/ahCwqrYpIuM)