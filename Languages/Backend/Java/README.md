# Java

- [**Notes**](#java---notes)
- [**Resources**](#java---resources)

## Java - Notes

### Simple Hello World program

- Create a `helloWorld.java` file

  ```java
  class HelloWorld {
    public static void main(String[] args) {
      System.out.println("Hello world!");
    }
  }
  ```

- Compile

  ```bash
  javac helloWorld.java
  ```

- Run

  ```bash
  java helloWorld
  ```

> To run a program in ***Java***, you must first define the *`main`* function as seen above.

### Primitive data types

In ***Java***, there are exactly 8 primitive data types.

| TYPE| DEFAULT | SIZE (in bits) | RANGE OF VALUES |
| --- | --- | --- | --- |
| boolean | false | 1 | true, false |
| char | \u0000 | 16 | [0, 255] ASCII |
| byte | 0 | 8 | [-128, 127] |
| short | 0 | 16 | [-32.768, 32.767] |
| int | 0 | 32 | [-2.147.483.648, 2.147.483.647] |
| long | 0 | 64 | Too large for this table |
| float | 0.0 | 32 | max 7 decimal places |
| double | 0.0 | 64 | max 16 decimal places |

### Access modifiers

| Access modifier | within class | within package | outside package by subclass only | outside package |
| --- | --- | --- | --- | --- |
| Private | Yes | No | No | No |
| Default | Yes | Yes | No | No |
| Protected | Yes | Yes | Yes | No |
| Public | Yes | Yes | Yes | Yes |

### Non-Access Modifiers

| Modifier | Description |
| --- | --- |
| final | Classes cannot be inherited. Attributes and methods cannot be modified. |
| abstract | To access an abstract class, it must be inherited from another class. Abstract methods are declared without a body. The body is provided by the subclass. |
| static | Attributes and methods are the same for all instances of the class. |
| transient | Attributes and methods are not included when serializing the object. |
| synchronized | Methods can only be accessed by one thread at a time. |
| volatile | The value of an attribute is always read from the "main memory". |

### Lambda Expressions

#### Syntax

```java
// one parameter
parameter -> expression

// more than 1 parameters
(parameter1, parameter2) -> expression
```

Expressions must immediately return a value. Thus, they are limited. To enable the lambda expression to run more commands/statements etc, do this:

```java
(parameter1, parameter2) -> { code block }
```

#### Example use cases

- Print all elements of an array

  ```java
  array.forEach( (element) -> { System.out.println(element); } );
  ```

- Run math operations

  ```java
  int operate(int a, int b, MathOperation mathOperation) {
    return mathOperation.operation(a, b);
  }
  .
  .
  .
  MathOperation addition = (int a, int b) -> a + b;

  int result = operate(10, 5, addition); // 15
  ```

## Java - Resources

- [Java in 100 Seconds by Fireship](https://youtu.be/l9AzO1FMgM8)
- [w3schools](https://www.w3schools.com/java/default.asp)
- [geeksforgeeks](https://www.geeksforgeeks.org/introduction-to-java/)
- [The Java EE6 Tutorial](https://docs.oracle.com/javaee/6/tutorial/doc/javaeetutorial6.pdf)
- [The Java EE7 Tutorial](https://docs.oracle.com/javaee/7/JEETT.pdf)
- [Java Lambda Expressions by tutorialspoint](https://www.tutorialspoint.com/java8/java8_lambda_expressions.htm)
- [CDI Dependency Injection for Java EE](https://dzone.com/articles/cdi-di-p1)
- [Java JDBC by Jakob Jenkov](http://tutorials.jenkov.com/jdbc/index.html)
- [RESTful Web Services with Java JAX-RS](https://docs.oracle.com/javaee/6/tutorial/doc/gilik.html)

[HOME](https://github.com/Stratis-Dermanoutsos/Full-Stack-Notes#full-stack-notes) or [⬆ Back to top](#java)
