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

## C# - Resources

- [C# in 100 Seconds by Fireship](https://youtu.be/ravLFzIguCM)
- [C# documentation](https://docs.microsoft.com/en-us/dotnet/csharp/)
- [dotnet SDK](https://docs.microsoft.com/en-us/dotnet/core/sdk)
- [dotnet CLI](https://docs.microsoft.com/en-us/dotnet/core/tools/)
- [Reasons to choose C# by Chadwin Deysel](https://dev.to/chadwinjdeysel/why-i-chose-c-48ng)
- [Udemy course by Denis Panjuta](https://www.udemy.com/share/101vEs2@Pm5KfWJSSVIKdkRKBkhOVD5uY1c=/)

[HOME](https://github.com/Stratis-Dermanoutsos/Full-Stack-Notes#full-stack-notes) or [⬆ Back to top](#c)
