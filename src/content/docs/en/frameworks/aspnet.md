---
title: "ASP.NET"
description: "This section contains notes on the ASP.NET framework."
---

***ASP.NET*** is a web application framework built on top of the ***.NET*** framework. It is used to build dynamic web applications and web services using languages such as ***C\#*** or ***Visual Basic*** ***.NET***. ***ASP.NET*** includes features such as **web forms**, **MVC**, **web API**, and **SignalR** for building different types of web applications.

## Razor Pages

***Razor Pages*** is a less complex than [***MVC***](#mvc).

However, instead of the ***M*odels**, ***V*iews**, and ***C*ontrollers** that make ***MVC***, ***Razor Pages*** have 2 parts:

- Razor Page (Similar to ***V*iew**)
- Page Model (Contains all the non-***V*iew** code)

Everything that can be done with ***MVC*** can also be done with ***Razor Pages***.

Create and run your first ***ASP.NET Razor Pages*** project:

```bash
# create the project
dotnet new webapp
# run the project
dotnet run
```

What the default generated project contains:

- The **Program.cs** and **Startup.cs** files

  These files set up the web server and ***ASP.NET* Core** pipeline.
- The **wwwroot** directory

  It contains *static* assets like ***CSS***, ***JavaScript*** and image files. Files in **wwwroot** will be served as *static* content, and can be bundled and minified automatically.
- The **appsettings.json** file

  It contains configuration settings ***ASP.NET* Core** will load on startup. You can use this to store database connection strings or other things that you don't want to hard-code.
- The **launchSettings.json** property file

  This is basically the configuration file for when the project is run.
- The **Pages** directory

  This folder contains all of our pages (*\*.cshtml*) files and their respective ***M*odels** (*\*.cshtml.cs*).

### Routing in Razor Pages

- Routing in ***ASP.NET Razor Pages*** maps *URL*s to *Physical file* on disk

  | URL | Maps to |
  | --- | --- |
  |  |  |
  | www.domain.com | /Pages/Index.cshtml |
  | www.domain.com/index | /Pages/Index.cshtml |
  | www.domain.com/account | /Pages/Account.cshtml |
  | www.domain.com/account | /Pages/Account/Index.cshtml |
  | www.domain.com/randomname/account | /Pages/RandomName/Account.cshtml |
- ***Razor Pages*** needs a *root* folder
- *Index.cshtml* is the default document

### Create a simple Page to display Cars

- Add this to the **Pages/Shared/_Layout.cshtml** file, after the other navbar links

  ```html
  <li class="nav-item">
    <a class="nav-link text-dark" asp-area="" asp-page="/CarList/Index">Cars</a>
  </li>
  ```

- Create a **CarList** directory inside the **Pages** one and now we'll make the following files there:
  - **Index.cshtml**

    ```html
    @page
    @model AspnetExample.Pages.CarList.IndexModel

    <form method="post">
      <table class="table table-striped border">
        @* Add the table head *@
        <tr class="table-secondary">
          <th>
            <label asp-for="Cars.FirstOrDefault().LicensePlate"></label>
          </th>
          <th>
            <label asp-for="Cars.FirstOrDefault().Make"></label>
          </th>
          <th>
            <label asp-for="Cars.FirstOrDefault().Model"></label>
          </th>
          <th></th>
        </tr>
        @* Display our cars *@
        @foreach (var car in Model.Cars) {
          <tr>
            <td>
              @Html.DisplayFor(model => car.LicensePlate)
            </td>
            <td>
              @Html.DisplayFor(model => car.Make)
            </td>
            <td>
              @Html.DisplayFor(model => car.Model)
            </td>
            <td>
              <button asp-page-handler="Delete" asp-route-id="@car.LicensePlate" onclick="return confirm('Are you sure you want to delete car: `@car.Make`?')" class="btn btn-danger btn-sm">Delete</button>
              @* Go to the Edit page, passing Car's LicensePlate as parameter *@
              <a asp-page="Edit" asp-route-id="@car.LicensePlate" class="btn btn-success btn-sm text-white">Edit</a>
            </td>
          </tr>
        }
      </table>
    </form>
    ```

  - **Index.cshtml.cs**

    ```csharp
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.RazorPages;
    using Microsoft.EntityFrameworkCore;
    using AspnetExample.Model;
    namespace AspnetExample.Pages.CarList
    {
      public class IndexModel : PageModel
      {
        private readonly ApplicationDbContext _db;
        // We get the database context using Dependency Injection
        public IndexModel(ApplicationDbContext db)
        {
          _db = db;
        }
        public IEnumerable<Car> Cars { get; set; }
        public async Task OnGet()
        {
          Cars = await _db.Car.ToListAsync();
        }
        public async Task<IActionResult> OnPostDelete(int licensePlate)
        {
          var car = await _db.Car.FindAsync(licensePlate);
          if (car == null)
            return NotFound();
          _db.Car.Remove(car);
          await _db.SaveChangesAsync();
          return RedirectToPage("Index");
        }
      }
    }
    ```

  With the logic existing above, it is easy to write **Razor Pages** to *Create* and *Edit* cars in the database.

## MVC

Create and run your first ***ASP.NET MVC*** project:

```bash
# create the project
dotnet new mvc
# run the project
dotnet run
```

What the default generated project contains:

- The **Program.cs** and **Startup.cs** files

  These files set up the web server and ***ASP.NET* Core** pipeline.
- The ***M*odels**, ***V*iews**, and ***C*ontrollers** directories

  This project type is based on the ***MVC*** architecture.
- The **wwwroot** directory

  It contains *static* assets like ***CSS***, ***JavaScript*** and image files. Files in **wwwroot** will be served as *static* content, and can be bundled and minified automatically.
- The **appsettings.json** file

  It contains configuration settings ***ASP.NET* Core** will load on startup. You can use this to store database connection strings or other things that you don't want to hard-code.
More specifics:
- Routes that are handled by ***C*ontrollers** are called actions, and are represented by methods in the ***C*ontroller** class. For example, the **HomeController** includes three action methods (**Index**, **About**, and **Contact**) which are mapped by ***ASP.NET* Core** to these route URLs:

  ```csharp
  |- localhost:5000/Home->          Index()
  |- localhost:5000/Home/About->    About()
  |- localhost:5000/Home/Contact -> Contact()
  ```

- ***V*iews** in ***ASP.NET* Core** are built using the Razor templating language, which combines ***HTML*** and ***C#***.

  Most view code is just ***HTML***, with the occasional ***C#*** statement added in to pull data out of the ***V*iew *M*odel** and turn it into text or ***HTML***.

  The ***C#*** statements are prefixed with the **@** symbol.
- The base ***HTML*** file, which contains the *\<body>* tag, is called the **layout *V*iew**.

  It can be found at

  ```bash
  |- Views/Shared/_Layout.cshtml
  ```

- As mentioned above, to edit the ***CSS*** or anything *static*, you must go to

  ```bash
  |- wwwroot/css/site.css
  ```

### Create simple Model, View and Controller to display Cars

- Add this to the **Views/Shared/_Layout.cshtml** file, after the other navbar links

  ```html
  <li class="nav-item">
    <a class="nav-link text-dark" asp-area="" asp-controller="Cars" asp-action="Index">Car List</a>
  </li>
  ```

- Create a **CarsController.cs** with the following code

  ```csharp
  using System;
  using System.Collections.Generic;
  using System.Linq;
  using System.Threading.Tasks;
  using Microsoft.AspNetCore.Mvc;
  using Microsoft.EntityFrameworkCore;
  using AspnetExample.Models;
  namespace AspnetExample.Controllers
  {
    public class CarsController : Controller
    {
      private readonly ApplicationDbContext _db;
      [BindProperty]
      public Car Car { get; set; }
      public CarsController(ApplicationDbContext db)
      {
        _db = db;
      }
      public IActionResult Index()
      {
        return View();
      }
      [HttpGet]
      public async Task<IActionResult> GetAll()
      {
        return Json(new { data = await _db.Cars.ToListAsync() });
      }
      [HttpDelete]
      public async Task<IActionResult> Delete(int licensePlate)
      {
        var carFromDb = await _db.Books.FirstOrDefaultAsync(u => u.LicensePlate == licensePlate);
        if (carFromDb == null)
          return Json(new { success = false, message = "Error while Deleting" });
        _db.Cars.Remove(carFromDb);
        await _db.SaveChangesAsync();
        return Json(new { success = true, message = "Delete successful" });
      }
    }
  }
  ```

- Create a **Cars** directory inside the **Views** one and now we'll make the following files there.

## Web API

Web ***API*** (***A*pplication *P*rogramming *I*nterface**) is a set of subroutine definitions with the scope of managing data between clients and servers. Building ***API***s over ***HTTP*** protocol allows third-party apps to interact with a server thanks to the application protocol.

Create and run your first ***ASP.NET API*** project:

```bash
# create the project
dotnet new webapi
# run the project
dotnet run
```

What the default generated project contains:

- The **Program.cs** and **Startup.cs** files

  These files set up the web server and ***ASP.NET* Core** pipeline.
- A **WeatherForecast** class

  This is our ***M*odel** which describes the data.
- A ***C*ontrollers** directory holding the **WeatherForecastController**

  This ***C*ontroller** is responsible for generating data based on our ***M*odel** and returning it in *JSON* every time we visit the link below.

Now, if you visit [https://localhost:5001/weatherforecast](https://localhost:5001/weatherforecast), you'll be presented with data in *JSON* format.

For example,

```json
[
  {
    "date":"2021-09-03T11:58:42.4461568+03:00","temperatureC":13,"temperatureF":55,"summary":"Cool"
  },
  {
    "date":"2021-09-04T11:58:42.4466036+03:00","temperatureC":-7,"temperatureF":20,"summary":"Balmy"
  },
  {
    "date":"2021-09-05T11:58:42.4466101+03:00","temperatureC":31,"temperatureF":87,"summary":"Hot"
  },
  {
    "date":"2021-09-06T11:58:42.4466109+03:00","temperatureC":-3,"temperatureF":27,"summary":"Warm"
  },
  {
    "date":"2021-09-07T11:58:42.4466115+03:00","temperatureC":15,"temperatureF":58,"summary":"Hot"
  }
]
```

## Resources

- [ASP.NET documentation](https://docs.microsoft.com/en-us/aspnet/)
- [ASP.NET Core Succinctly book](https://www.syncfusion.com/succinctly-free-ebooks/asp-net-core-succinctly)
- [ASP.NET Core 3.1 Succinctly book](https://www.syncfusion.com/succinctly-free-ebooks/asp-net-core-3-1-succinctly)
- [The Little ASP.NET Core Book (2018)](https://s3.amazonaws.com/recaffeinate-files/LittleAspNetCoreBook.pdf)
- [ASP.NET Core 3.1 - Full Course for Beginners video by freeCodeCamp.org](https://youtu.be/C5cnZ-gZy2I)
- [ASP.NET Core MVC Course (.NET 5) by freeCodeCamp.org](https://youtu.be/Pi46L7UYP8I)
- [ASP.NET Core 5.0 MVC Course by tutorialsEU](https://youtu.be/DqD-NJf7-OM)
- [JetBrains on Razor Pages](https://www.jetbrains.com/dotnet/guide/tutorials/basics/razor-pages/)
- [w3schools](https://www.w3schools.com/asp/default.asp)
- [AspNetCore-Developer-Roadmap repository](https://github.com/MoienTajik/AspNetCore-Developer-Roadmap)
- [Tag Helpers documentation](https://docs.microsoft.com/en-us/aspnet/core/mvc/views/tag-helpers/)
- [Claims documentation](https://docs.microsoft.com/en-us/dotnet/api/system.security.claims)
- [ASP.NET Core - Authentication & Authorization video tutorial by Raw Coding](https://www.youtube.com/playlist?list=PLOeFnOV9YBa7dnrjpOG6lMpcyd7Wn7E8V)
- [Simple Login guide by c-sharpcorner](https://www.c-sharpcorner.com/article/asp-net-core-razor-pages-simple-login-using-entity-framework-database-first-app/)
- [API versioning](https://code-maze.com/aspnetcore-api-versioning/)
- [Set Up .NET Core Web App with React & TypeScript (blog)](https://blogs.perficient.com/2020/11/17/how-to-set-up-net-core-web-app-with-react-typescript/)
- [Create ASP.NET Core application with React Typescript by Syncfusion](https://www.syncfusion.com/kb/12375/how-to-create-asp-net-core-application-with-react-typescript-web-application-as-front-end)
- [Desktop application with ASP.NET Core, React and Typescript](https://itnext.io/write-a-desktop-app-with-react-typescript-asp-net-core-and-webview2-3a15daef4d64)
