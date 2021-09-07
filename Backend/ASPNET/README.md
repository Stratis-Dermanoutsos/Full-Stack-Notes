# ASP .NET

- **[Notes](#asp-net---notes)**
- **[Resources](#asp-net---resources)**

## ASP .NET - Notes

Well, by default, when we will focus on ***ASP .NET* Core**.

### dotnet CLI

<ins>This section can be skipped if you don't use the Terminal.</ins>

Before you run the

    dotnet new ...
command, you can specify the version of **dotnet** to use by:

- Create a folder to be the root of your project, where you are going to run the above command
- While in that folder, run

      dotnet new globaljson
- Run

      dotnet --list-sdks
  to see the downloaded versions in your system
- Replace the value of *"version"* inside the *global.json* file with EXACTLY the one you want to use
- Run

      dotnet --version
  to make sure the change has been applied
- Run

      dotnet new ...

### ASP .NET Razor Pages

***Razor Pages*** is a less complex than ***[MVC](#asp-net-mvc)***.

However, instead of the ***M*odels**, ***V*iews**, and ***C*ontrollers** that make ***MVC***, ***Razor Pages*** have 2 parts:

- Razor Page (Similar to ***V*iew**)
- Page Model (Contains all the non-***V*iew** code)

Everything that can be done with ***MVC*** can also be done with ***Razor Pages***.

Create and run your first ***ASP .NET Razor Pages*** project:

    # create the project
    dotnet new webapp

    # run the project
    dotnet run

What the default generated project contains:

- The **Program.cs** and **Startup.cs** files

  These files set up the web server and ***ASP .NET* Core** pipeline.
- The **wwwroot** directory

  It contains *static* assets like ***CSS***, ***JavaScript*** and image files. Files in **wwwroot** will be served as *static* content, and can be bundled and minified automatically.
- The **appsettings.json** file

  It contains configuration settings ***ASP .NET* Core** will load on startup. You can use this to store database connection strings or other things that you don't want to hard-code.
- The **launchSettings.json** property file

  This is basically the configuration file for when the project is run.
- The **Pages** directory

  This folder contains all of our pages (*\*.cshtml*) files and their respective ***M*odels** (*\*.cshtml.cs*).

Routing in Razor Pages

- Routing in ***ASP .NET Razor Pages*** maps *URL*s to *Physical file* on disk

  | URL | Maps to |
  | --- | --- |
  | www.domain.com | /Pages/Index.cshtml |
  | www.domain.com/index | /Pages/Index.cshtml |
  | www.domain.com/account | /Pages/Account.cshtml |
  | www.domain.com/account | /Pages/Account/Index.cshtml |
  | www.domain.com/randomname/account | /Pages/RandomName/Account.cshtml |

- ***Razor Pages*** needs a *root* folder
- *Index.cshtml* is the default document

### ASP .NET MVC

Create and run your first ***ASP .NET MVC*** project:

    # create the project
    dotnet new mvc

    # run the project
    dotnet run

What the default generated project contains:

- The **Program.cs** and **Startup.cs** files

  These files set up the web server and ***ASP .NET* Core** pipeline.
- The ***M*odels**, ***V*iews**, and ***C*ontrollers** directories

  This project type is based on the ***MVC*** architecture.
- The **wwwroot** directory

  It contains *static* assets like ***CSS***, ***JavaScript*** and image files. Files in **wwwroot** will be served as *static* content, and can be bundled and minified automatically.
- The **appsettings.json** file

  It contains configuration settings ***ASP .NET* Core** will load on startup. You can use this to store database connection strings or other things that you don't want to hard-code.

More specifics:

- Routes that are handled by ***C*ontrollers** are called actions, and are represented by methods in the ***C*ontroller** class. For example, the **HomeController** includes three action methods (**Index**, **About**, and **Contact**) which are mapped by ***ASP .NET* Core** to these route URLs:

      localhost:5000/Home->          Index()
      localhost:5000/Home/About->    About()
      localhost:5000/Home/Contact -> Contact()
- ***V*iews** in ***ASP .NET* Core** are built using the Razor templating language, which combines ***HTML*** and ***C#***.

  Most view code is just ***HTML***, with the occasional ***C#*** statement added in to pull data out of the ***V*iew *M*odel** and turn it into text or ***HTML***.

  The ***C#*** statements are prefixed with the **@** symbol.
- The base ***HTML*** file, which contains the *\<body>* tag, is called the **layout *V*iew**.

  It can be found at

      Views/Shared/_Layout.cshtml
- As mentioned above, to edit the ***CSS*** or anything *static*, you must go to

      wwwroot/css/site.css

### ASP .NET Web API

Web ***API*** (***A*pplication *P*rogramming *I*nterface**) is a set of subroutine definitions with the scope of managing data between clients and servers. Building ***API***s over ***HTTP*** protocol allows third-party apps to interact with a server thanks to the application protocol.

Create and run your first ***ASP .NET API*** project:

    # create the project
    dotnet new webapi

    # run the project
    dotnet run

What the default generated project contains:

- The **Program.cs** and **Startup.cs** files

  These files set up the web server and ***ASP .NET* Core** pipeline.
- A **WeatherForecast** class

  This is our ***M*odel** which describes the data.
- A ***C*ontrollers** directory holding the **WeatherForecastController**

  This ***C*ontroller** is responsible for generating data based on our ***M*odel** and returning it in *JSON* every time we visit the link below .

Now, if you visit

    https://localhost:5001/weatherforecast
you'll be presented with data in *JSON* format.

For example,

    [{"date":"2021-09-03T11:58:42.4461568+03:00","temperatureC":13,"temperatureF":55,"summary":"Cool"},{"date":"2021-09-04T11:58:42.4466036+03:00","temperatureC":-7,"temperatureF":20,"summary":"Balmy"},{"date":"2021-09-05T11:58:42.4466101+03:00","temperatureC":31,"temperatureF":87,"summary":"Hot"},{"date":"2021-09-06T11:58:42.4466109+03:00","temperatureC":-3,"temperatureF":27,"summary":"Warm"},{"date":"2021-09-07T11:58:42.4466115+03:00","temperatureC":15,"temperatureF":58,"summary":"Hot"}]

### Important terms

- **Entity Framework**

  **Entity Framework Core**, knows as **O**bject **R**elational **M**apper (**ORM**) was created by Microsoft to enable developers to work abstractly with their database.

  To use **Entity Framework Core**, 3 NuGet packages are needed:
  - Microsoft.EntityFrameworkCore
  - Microsoft.EntityFrameworkCore.SqlServer
  - Microsoft.EntityFrameworkCore.Tools

  To install the **CLI** tool

      dotnet tool install --global dotnet-ef
  To update it

      dotnet tool update --global dotnet-ef
  To use it on a project

      dotnet add package Microsoft.EntityFrameworkCore.Design
  Verify installation

      dotnet ef
- **Dependency injection**

  One of the biggest new features of ***ASP .NET* Core** is the inclusion of a way to handle dependencies directly inside the base library.

  In fact, ***ASP .NET* Core** is designed to support **Dependency injection**.

  - This has three major benefits:
    - Developers no longer have an excuse not to use it; whereas before it was basically left to their conscience.
    - You don't need to use third-party libraries.
    - All the application frameworks and middleware components rely on this central configuration, so there is no need to configure **Dependency injection** in different places and different ways, as was needed before.
  - What is **Dependency injection**?

    In order to be easy to maintain, systems are usually made of many classes, each of them with very specific responsibilities. For example, if you want to build a system that sends emails, you might have the main entry point of the system and one class that is responsible for formatting text and then one that is responsible for actually sending the email.

    The problem with this approach is that, if references to these additional classes are kept directly inside the entry point, it becomes impossible to change the implementation of the helper class without touching the main class.

    This is where **Dependency injection**, usually referred to as **DI**, comes in to play. Instead of directly instantiating the lower-level classes, the high-level modules receive the instances from the outside, typically as parameters of their constructors.
  - Configuring **Dependency injection** in ***ASP .NET* Core**

    It all happens in the ConfigureServices method.

        public void ConfigureServices(IServiceCollection services)
        {
          //Here goes the configuration
        }

- **Tag Helpers**

  They enable Server-Side code to create and render ***HTML*** elements in ***Razor*** files.

  For example, *asp-for*

  Let's say we have this ***C#*** class:

      public class Movie
      {
        public int ID { get; set; }
        public string Title { get; set; }
        public DateTime ReleaseDate { get; set; }
        public string Genre { get; set; }
        public decimal Price { get; set; }
      }
  ***Razor*** markup to access it in the page:

      <label asp-for="Movie.Title"></label> # .cshtml
  which generates

      <label for="Movie_Title"></label>     # .html
  **Tag Helper** VS **HTML Helper**

      @* HTML helper *@
      @Html.DisplayFor(model => model.Books.FirstOrDefault().Author)

      @* Tag helper *@
      <label asp-for="Books.FirstOrDefault().Author"></label>
  To make an \<a> element that redirects to the Index page using *asp-page*

      <a asp-page="/Index">Index</a>

## ASP .NET - Resources

- [ASP .NET documentation](https://docs.microsoft.com/en-us/aspnet/) ==> [Tag Helpers](https://docs.microsoft.com/en-us/aspnet/core/mvc/views/tag-helpers/)
- [Entity Framework Core documentation](https://docs.microsoft.com/en-us/ef/core/)
- [dotnet SDK documentation](https://docs.microsoft.com/en-us/dotnet/core/sdk)
- [dotnet CLI documentation](https://docs.microsoft.com/en-us/dotnet/core/tools/)
- [ASP .NET Core Succinctly book](https://www.syncfusion.com/succinctly-free-ebooks/asp-net-core-succinctly)
- [ASP .NET Core 3.1 Succinctly book](https://www.syncfusion.com/succinctly-free-ebooks/asp-net-core-3-1-succinctly)
- [The Little ASP.NET Core Book (2018)](https://s3.amazonaws.com/recaffeinate-files/LittleAspNetCoreBook.pdf)
- [ASP.NET Core 3.1 - Full Course for Beginners video by freeCodeCamp.org](https://youtu.be/C5cnZ-gZy2I)
- [w3schools](https://www.w3schools.com/asp/default.asp)
- [JetBrains on Razor Pages](https://www.jetbrains.com/dotnet/guide/tutorials/basics/razor-pages/)
- [JetBrains on Entity Framework](https://www.jetbrains.com/dotnet/guide/tutorials/basics/entity-framework-core/)
- [AspNetCore-Developer-Roadmap repository](https://github.com/MoienTajik/AspNetCore-Developer-Roadmap)
- [ASP.NET Core - Authentication & Authorization video tutorial by Raw Coding](https://www.youtube.com/playlist?list=PLOeFnOV9YBa7dnrjpOG6lMpcyd7Wn7E8V)

[HOME](https://github.com/Stratis-Dermanoutsos/Full-Stack-2021#full-stack-roadmap-2021) or [Back to top](#asp-net)
