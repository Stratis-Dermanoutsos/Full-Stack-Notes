# TypeScript

- **[Notes](#typescript---notes)**
- **[Resources](#typescript---resources)**

## TypeScript - Notes

***TypeScript*** is basically a superset of ***JavaScript***.

This means that

- ***JavaScript*** code works in ***TypeScript***
- if you know ***JavaScript***, ***TypeScript*** is not that difficult to learn

However, ***TypeScript*** works more like a compiled language. In other words, you have to solve errors before your program is able to run/execute.

In fact, the way a program written in ***TypeScript*** works is through compilation to vanilla ***JavaScript*** using *tsc*. (***TypeScript*** *Compiler*)

Main additions:

- Variables

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
- Interfaces

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
- Arrays

      const arr: string[] = [];

      arr.push('idk, it's just a string'); // OK
      arr.push(1);                         // Error
  but

      type MyList = [number?, string?]

      const arr: MyList = [];

      arr.push('idk, it's just a string'); // OK
      arr.push(1);                         // OK
- Tuples

      // Declare a tuple type
      let x: [string, number];

      // Initialize it
      x = ["hello", 10]; // OK
      x = [10, "hello"]; // Error
- Generics

      class Item<T> {
        constructor(public value: T) {}
      }

      let x: Item<number>;
      let y = new Item(3);

## TypeScript - Resources

- [TypeScript documentation](https://www.typescriptlang.org/docs/)
- [Book by basarat](https://basarat.gitbook.io/typescript/)
- [Fireship video (explanation)](https://youtu.be/zQnBQ4tB3ZA)
- [Fireship video (introduction)](https://youtu.be/ahCwqrYpIuM)

[HOME](https://github.com/Stratis-Dermanoutsos/Full-Stack-2021#full-stack-roadmap-2021) or [Back to top](#typescript)
