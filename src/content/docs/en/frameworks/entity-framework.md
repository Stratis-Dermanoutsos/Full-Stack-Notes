---
title: "Entity Framework"
description: "This section contains notes on Entity Framework."
---

***Entity Framework*** is an object-relational mapping (ORM) framework developed by **Microsoft**. It is a component of the ***.NET*** framework that enables developers to work with relational databases using ***.NET*** objects.

It supports a wide range of database providers, including ***SQL Server***, ***Oracle***, ***MySQL*** and ***PostgreSQL***. It also includes support for advanced features such as *transactions*, *caching*, and *concurrency control*.

To use ***Entity Framework* Core**, 4 ***NuGet*** packages are needed:

- Microsoft.EntityFrameworkCore
- Microsoft.EntityFrameworkCore.*\<SQLtool>*
- Microsoft.EntityFrameworkCore.Tools
- Microsoft.EntityFrameworkCore.Design

## The CLI tool

```bash
dotnet tool install --global dotnet-ef
```

To update it

```bash
dotnet tool update --global dotnet-ef
```

To use it on a project

```bash
dotnet add package Microsoft.EntityFrameworkCore.Design
```

Verify installation

```bash
dotnet ef
```

## Setup

We'll setup an ***SQLite*** database for the sake of an example.

- Install the necessary tools

  ```bash
  dotnet tool install --global dotnet-ef
  dotnet add package Microsoft.EntityFrameworkCore.Sqlite
  ```

- Create a *\<file>.db* database using ***SQLite***
- Go to the project's *appsettings.json* file and add

  ```json
  "ConnectionStrings": {
    "DefaultConnection" : "Data Source=<file>.db;"
  }
  ```

- Create a class inside the ***M*odels** folder
  We'll name it **Car** for this example

  ```csharp
  using System.ComponentModel.DataAnnotations;
  namespace AspnetExample.Models
  {
    public class Car
    {
      [Key] // Set as primary key
      public int LicensePlate { get; set; }
      [Required] // Cannot be null
      public string Make { get; set; }
      public string Model { get; set; }
    }
  }
  ```

- Create the *ApplicationDbContext* class inside the ***M*odels** folder
  The file should look like this

  ```csharp
  using Microsoft.EntityFrameworkCore;
  namespace AspnetExample.Models
  {
    public class ApplicationDbContext : DbContext
    {
      // Empty constructor but the parameter is needed for Dependency Injection
      public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
      {
      }
      // Entry used to add data to the database
      public DbSet<Car> Car { get; set; }
    }
  }
  ```

- Go to **Startup.cs** inside the *ConfigureServices* method and add

  ```csharp
  services.AddDbContext<ApplicationDbContext>(option=> option.UseSqlite(Configuration.GetConnectionString("DefaultConnection")));
  ```

  or, if top level statements,

  ```csharp
  var builder = WebApplication.CreateBuilder(args);
  ...
  builder.Services.AddDbContext<ApplicationDbContext>(options => option.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));
  ```

- Run

  ```bash
  dotnet add package Microsoft.EntityFrameworkCore.Design
  dotnet ef migrations add AddCarToDb
  ```

  Notice that, now, there is a **\<numbers>_AddCarToDb.cs** file in the **Migrations** folder.
- Update the database and schema by running

  ```bash
  dotnet ef database update
  ```

## Resources

- [Entity Framework Core documentation](https://docs.microsoft.com/en-us/ef/core/)
- [Entity Framework in Console](https://www.entityframeworktutorial.net/efcore/entity-framework-core-console-application.aspx)
- [JetBrains on Entity Framework](https://www.jetbrains.com/dotnet/guide/tutorials/basics/entity-framework-core/)
- [PostgreSQL with EF Core](https://www.npgsql.org/efcore/index.html)
