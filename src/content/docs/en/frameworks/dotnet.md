---
title: ".NET"
description: "This section contains notes on the .NET framework."
---

***.NET*** is a software framework developed by Microsoft that is used to build and run applications on Windows operating systems.
It provides a programming model and a runtime environment for building and deploying software applications.

## dotnet CLI

> This section can be skipped if you don't use the Terminal.

- List your dotnet SDKs

  ```bash
  dotnet --list-sdks
  ```

- Create project

  ```bash
  dotnet new <projectType>
  ```

- Add package reference to your project

  ```bash
  dotnet add package <package>
  ```

- Remove package

  ```bash
  dotnet remove package <package>
  ```

- Restore dependencies

  ```bash
  dotnet restore
  ```

- Build and run project

  ```bash
  dotnet run
  ```

  This command, depending on the type of project, requires the respective *runtime* program.

  ```bash
  dotnet --list-runtimes
  ```

  to view your currently installed *runtimes*.
- For more

  ```bash
  dotnet -h
  ```

- Choose version of ***.NET***

  Before you run the

  ```bash
  dotnet new ...
  ```

  command, you can specify the version of **dotnet** to use by:
  - Create a folder to be the root of your project, where you are going to run the above command
  - While in that folder, run

    ```bash
    dotnet new globaljson
    ```

  - Run

    ```bash
    dotnet --list-sdks
    ```

    to see the downloaded versions in your system
  - Replace the value of *"version"* inside the *global.json* file with EXACTLY the one you want to use
  - Run

    ```bash
    dotnet --version
    ```

    to make sure the change has been applied
  - Run

    ```bash
    dotnet new ...
    ```

## Resources

- [Tutorial: Create a .NET class library](https://learn.microsoft.com/en-us/dotnet/core/tutorials/library-with-visual-studio-code)
- [Create and publish a NuGet package with the dotnet CLI](https://github.com/NuGet/docs.microsoft.com-nuget/blob/main/docs/quickstart/create-and-publish-a-package-using-the-dotnet-cli.md)
- [Tutorial: Create a .NET tool using the .NET CLI](https://learn.microsoft.com/en-us/dotnet/core/tools/global-tools-how-to-create)
- [How to create your own .NET CLI tools by Nick Chapsas](https://youtu.be/JNDgcBDZPkU)
- [Quickstart: Create and publish a package with the dotnet CLI](https://learn.microsoft.com/en-us/nuget/quickstart/create-and-publish-a-package-using-the-dotnet-cli)
- [How to add Global Exception Handling in .NET 6 and 7](https://blog.christian-schou.dk/how-to-do-global-exception-handling-in-net-6-and-7/)
- [How to enable tab completion for the .NET CLI](https://learn.microsoft.com/en-us/dotnet/core/tools/enable-tab-autocomplete)
- [Dependency Injection for Absolute Beginners with C# and .NET](https://youtu.be/tTJetZj3vg0)
- [dotnet SDK documentation](https://docs.microsoft.com/en-us/dotnet/core/sdk)
- [dotnet CLI documentation](https://docs.microsoft.com/en-us/dotnet/core/tools/)
