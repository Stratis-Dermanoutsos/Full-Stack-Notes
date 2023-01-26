# C\#

- [**Notes**](#c---notes)
- [**Resources**](#c---resources)

## C# - Notes

### Extension methods

**Extension methods** are defined as `static` methods but are called by using instance method syntax. Their first parameter specifies which type the method operates on.

They're basically a way to extend a class' functionality.

- Why is this useful when you can just inherit a class?

  Because you can't always do that or you may not want to do that.

For example, let's say we want to add a `NotEquals` method for the `String` data type. Now, `String` is a `sealed` class which means that it cannot be inherited so we need to use an `Extensions Method` to add any functionality to it.

```c#
public static class StringExtensions
{
    public static bool NotEquals(this string str1, string str2)
    {
        return !str1.Equals(str2);
    }
}
```

To call this method now, there are 2 simple ways.

```c#
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

### Null-Coalescing Operator

The `??` operator will return the value of its left-hand operand if it is not *null*. Else, it returns the right one.

```c#
int? value1 = null;
int value2 = 32;

int? value3 = value1 ?? value2; // = 32
```

```c#
int value1 = 1;
int value2 = 32;

int value3 = value1 ?? value2; // = 1
```

This operator can also be used in assignments. By using `??=` to assign a value, the compiler first checks if the variable you're trying to assign is *null* first. Only if it is will the value be assigned to it.

```c#
int? x = null;
Console.WriteLine(x); // null

x ??= 32;
Console.WriteLine(x); // 32

x ??= 1;
Console.WriteLine(x); // 32
```

So, *1* was not assigned to `x` as it was not *null*. It already had a value equal to *32*.

### Generics

Generics in ***C\#*** allow for the creation of classes and methods that can work with multiple types of data, rather than being limited to a specific data type. When a class or method is defined as generic, placeholders (also known as type parameters) are used to represent the types of data that the class or method will work with.

This allows for flexibility and reusability in your code, as the same class or method can be used with different data types without the need for multiple copies of the code.

#### Generic classes

For an example of generics in a class, you can think of the `List` data structure. In ***C\#***, this data structure is made to work will all objects, no matter what their type is.

To achieve that, it is defined as follows:

```c#
class List<T>
{
    // class implementation here
}
```

To instantiate a list of integers, for example, you will replace the `T` placeholder with the `int` data type.

```c#
List<int> listOfIntegers = new List<int>();
```

## C# - Resources

- [C# in 100 Seconds by Fireship](https://youtu.be/ravLFzIguCM)
- [C# documentation](https://docs.microsoft.com/en-us/dotnet/csharp/)
- [dotnet SDK](https://docs.microsoft.com/en-us/dotnet/core/sdk)
- [dotnet CLI](https://docs.microsoft.com/en-us/dotnet/core/tools/)
- [Reasons to choose C# by Chadwin Deysel](https://dev.to/chadwinjdeysel/why-i-chose-c-48ng)
- [Udemy course by Denis Panjuta](https://www.udemy.com/share/101vEs2@Pm5KfWJSSVIKdkRKBkhOVD5uY1c=/)

[HOME](https://github.com/Stratis-Dermanoutsos/Full-Stack-Notes#full-stack-notes) or [⬆ Back to top](#c)
