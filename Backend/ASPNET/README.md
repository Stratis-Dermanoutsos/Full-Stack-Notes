# ASP .NET

- **[Notes](#asp-net---notes)**
- **[Resources](#asp-net---resources)**

## ASP .NET - Notes

Create and run your first ***ASP .NET*** project:

    # create the project
    dotnet new mvc

    # run the project
    dotnet run

What the default generated project contains:

- The **Program.cs** and **Startup.cs** files

  These files set up the web server and ***ASP .NET*** Core pipeline.
- The ***M*odels**, ***V*iews**, and ***C*ontrollers** directories

  This project type is based on the ***MVC*** architecture.
- The **wwwroot** directory

  It contains *static* assets like ***CSS***, ***JavaScript*** and image files. Files in **wwwroot** will be served as *static* content, and can be bundled and minified automatically.
- The **appsettings.json** file

  It contains configuration settings ***ASP .NET*** Core will load on startup. You can use this to store database connection strings or other things that you don't want to hard-code.

More specifics:

- Routes that are handled by ***C*ontrollers** are called actions, and are represented by methods in the ***C*ontroller** class. For example, the **HomeController** includes three action methods (**Index**, **About**, and **Contact**) which are mapped by ***ASP .NET*** Core to these route URLs:

      localhost:5000/Home->          Index()
      localhost:5000/Home/About->    About()
      localhost:5000/Home/Contact -> Contact()
- ***V*iews** in ***ASP .NET*** Core are built using the Razor templating language, which combines ***HTML*** and ***C#***.

  Most view code is just ***HTML***, with the occasional ***C#*** statement added in to pull data out of the ***V*iew *M*odel** and turn it into text or ***HTML***.

  The ***C#*** statements are prefixed with the **@** symbol.
- The base ***HTML*** file, which contains the *\<body>* tag, is called the **layout *V*iew**.

  It can be found at

      Views/Shared/_Layout.cshtml
- As mentioned above, to edit the ***CSS*** or anything *static*, you must go to

      wwwroot/css/site.css

- **Tag Helpers**:

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
  Razor markup to access it in the page:

      <label asp-for="Movie.Title"></label> # .cshtml
  which generates

      <label for="Movie_Title"></label>     # .html

## ASP .NET - Resources

- [ASP .NET documentation](https://docs.microsoft.com/en-us/aspnet/) --> [Tag Helpers](https://docs.microsoft.com/en-us/aspnet/core/mvc/views/tag-helpers/)
- [dotnet SDK](https://docs.microsoft.com/en-us/dotnet/core/sdk)
- [dotnet CLI](https://docs.microsoft.com/en-us/dotnet/core/tools/)
- [The Little ASP.NET Core Book (2018)](https://s3.amazonaws.com/recaffeinate-files/LittleAspNetCoreBook.pdf)
- [w3schools](https://www.w3schools.com/asp/default.asp)

[HOME](https://github.com/Stratis-Dermanoutsos/Full-Stack-2021#full-stack-roadmap-2021) or [Back to top](#asp-net)
