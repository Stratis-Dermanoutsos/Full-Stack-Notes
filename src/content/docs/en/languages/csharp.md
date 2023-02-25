---
title: "C#"
description: "This section contains notes on the C# programming language."
---

## Extension methods

**Extension methods** are defined as `static` methods but are called by using instance method syntax. Their first parameter specifies which type the method operates on.

They're basically a way to extend a class' functionality.

- Why is this useful when you can just inherit a class?

  Because you can't always do that or you may not want to do that.

For example, let's say we want to add a `NotEquals` method for the `String` data type. Now, `String` is a `sealed` class which means that it cannot be inherited so we need to use an `Extensions Method` to add any functionality to it.

```csharp
public static class StringExtensions
{
    public static bool NotEquals(this string str1, string str2)
    {
        return !str1.Equals(str2);
    }
}
```

To call this method now, there are 2 simple ways.

```csharp
static void Main()
{
    string test1 = "This is a test";
    string test2 = "This is test";

    // 1
    test1.NotEquals(test2); // returns true

    // 2
    StringExtensions.NotEquals(test1, test2); // returns true
}
```

## Null-Coalescing Operator

The `??` operator will return the value of its left-hand operand if it is not *null*. Else, it returns the right one.

```csharp
int? value1 = null;
int value2 = 32;

int? value3 = value1 ?? value2; // = 32
```

```csharp
int value1 = 1;
int value2 = 32;

int value3 = value1 ?? value2; // = 1
```

This operator can also be used in assignments. By using `??=` to assign a value, the compiler first checks if the variable you're trying to assign is *null* first. Only if it is will the value be assigned to it.

```csharp
int? x = null;
Console.WriteLine(x); // null

x ??= 32;
Console.WriteLine(x); // 32

x ??= 1;
Console.WriteLine(x); // 32
```

So, *1* was not assigned to `x` as it was not *null*. It already had a value equal to *32*.

## Generics

Generics in ***C\#*** allow for the creation of classes and methods that can work with multiple types of data, rather than being limited to a specific data type. When a class or method is defined as generic, placeholders (also known as type parameters) are used to represent the types of data that the class or method will work with.

This allows for flexibility and reusability in your code, as the same class or method can be used with different data types without the need for multiple copies of the code.

### Generic classes

For an example of generics in a class, you can think of the `List` data structure. In ***C\#***, this data structure is made to work will all objects, no matter what their type is.

To achieve that, it is defined as follows:

```csharp
class List<T>
{
    // class implementation here
}
```

To instantiate a list of integers, for example, you will replace the `T` placeholder with the `int` data type.

```csharp
List<int> listOfIntegers = new List<int>();
```

### Generic methods

There are several things worth mentioning about **Generic methods** in ***C\#***:

1. **Generic methods** allow you to define a method that can work with different types of data. You can specify the data type when you call the method.

   For example, consider the following method.

   ```csharp
   public void MyMethod<T>(T data)
   {
       Console.WriteLine($"Data type: {typeof(T)}, Data value: {data}");
   }
   ```

   When you call it, the output of the program heavily relies on the type of the parameter provided.

   ```csharp
   MyMethod<string>("hello"); // output: Data type: System.String, Data value: hello
   MyMethod<int>(42);         // output: Data type: System.Int32, Data value: 42
   MyMethod<bool>(true);      // output: Data type: System.Boolean, Data value: True
   ```

2. You can define a **generic method** using the `<T>` syntax, where `T` is a type parameter that represents the type of data you want to work with.

   Modifying the above method, we get:

   ```csharp
   public void MyMethod<T>(T data) where T : IComparable
   {
       Console.WriteLine($"Data type: {typeof(T)}, Data value: {data}");
   }
   ```

   Now, with the same input, we get similar but not the same results.

   ```csharp
   MyMethod<string>("hello"); // output: Data type: System.String, Data value: hello
   MyMethod<int>(42);         // output: Data type: System.Int32, Data value: 42
   MyMethod<bool>(true);      // This will not compile
   ```

   The call using a `Boolean` parameter will not compile as this type does not inherit from the `IComparable` interface.

3. When calling a **generic method**, you can either *specify the type parameter explicitly* (e.g. `MyMethod<int>(5)`) or *let the compiler infer the type parameter based on the arguments* you pass to the method (e.g. `MyMethod(5)`).

   As you've noticed by now in the above examples, we explicitly specify the type of each parameter.

   However, if we just used the following, we'd get the exact same results as the compiler is smart enough to get the type itself from the parameter provided.

   ```csharp
   MyMethod("hello"); // T is string
   MyMethod(42);      // T is int
   MyMethod(true);    // T is bool
   ```

4. **Generic methods** can be used to create extension methods that work with any type that meets certain criteria, such as implementing a specific interface.

   ```csharp
   public static class MyExtensions
   {
       public static bool IsEqualTo<T>(this T value1, T value2) where T : IComparable
       {
           return value1.CompareTo(value2) == 0;
       }
   }
   ```

   Now, we can use this method to compare any `value1` that implements the interface `IComparable` to any `value2` of the same type.

   ```csharp
   bool result1 = 42.IsEqualTo(42);           // returns true
   bool result2 = "hello".IsEqualTo("world"); // returns false
   ```

## Resources

- [C\# in 100 Seconds by Fireship](https://youtu.be/ravLFzIguCM)
- [C\# documentation](https://docs.microsoft.com/en-us/dotnet/csharp/)
- [dotnet SDK](https://docs.microsoft.com/en-us/dotnet/core/sdk)
- [dotnet CLI](https://docs.microsoft.com/en-us/dotnet/core/tools/)
- [Reasons to choose C\# by Chadwin Deysel](https://dev.to/chadwinjdeysel/why-i-chose-c-48ng)
- [Udemy course by Denis Panjuta](https://www.udemy.com/share/101vEs2@Pm5KfWJSSVIKdkRKBkhOVD5uY1c=/)
