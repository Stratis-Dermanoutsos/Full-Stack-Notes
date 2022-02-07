# API

- [**Notes**](#api---notes)
- [**Resources**](#api---resources)

## HTTP

***HTTP*** means ***H*yper*T*ext *T*ransfer *P*rotocol**.

As a request-response protocol, ***HTTP*** gives users a way to interact with web resources such as ***HTML*** files by transmitting hypertext messages between clients and servers.

***HTTP*** is a method for encoding and transporting information between a client (such as a web browser) and a web server.

### Common HTTP requests

- **CONNECT**: The **CONNECT** method establishes a tunnel to the server identified by the target resource.
- **DELETE**: The **DELETE** method deletes the specified resource.
- **GET**: The **GET** method requests a representation of the specified resource. Requests using **GET** should only retrieve data.
- **HEAD**: The **HEAD** method asks for a response identical to that of a ***GET*** request, but without the response body.
- **OPTIONS**: The **OPTIONS** method is used to describe the communication options for the target resource.
- **PATCH**: The **PATCH** method is used to apply partial modifications to a resource.
- **POST**: The **POST** method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server.
- **PUT**: The **PUT** method replaces all current representations of the target resource with the request payload.
- **TRACE**: The **TRACE** method performs a message loop-back test along the path to the target resource.

### HTTP Status Codes

- **2XX**
  - **200**: Everything is good. Successful request!
  - **201**: New resource was created.
  - **204**: Everything is good. Nothing to return!
- **3XX**
  - **304**: Resource is same. Use cached version.
- **4XX**
  - **400**: Bad request. Invalid URL/syntax.
  - **401**: Invalid/wrong credentials.
  - **403**: Athenticated user but does not have permission.
  - **404**: Not found. Resource could not be accessed by the server.
- **5xx**
  - **500**: Unexpected internal server error.

## API - Notes

***API*** is the acronym for ***A*pplication *P*rogramming *I*nterface**, which is a software intermediary that allows two applications to talk to each other. Each time you use an app like Facebook, send a message, or check the weather on your phone, you’re using an ***API***.

***API*** is a general set of protocols and is deployed over the software to help it interact with some other software.

Public ***API*** usually require an ***API* key**. An ***API* key** is a simple *encrypted string* that identifies an application without any principal. They are useful for accessing *public data* anonymously, and are used to associate ***API*** requests with your project for quota and billing.

There are many types of ***API***:

- **REST**
- **SOAP**
- **GraphQL** and more...

To keep this short and more to the point, most jobs require **REST**ful ***API***.

**REST**ful ***API*** is only geared towards web applications and mostly deals with ***HTTP*** requests and responses.

Basically, users send requests and the ***API*** then replies with a response.

Each ***API*** response consists of:

- Status code (eg. **200**)

  A status code falls into levels:
  - **2\*\***

    Everything went well.
  - **4\*\***

    Something went wrong.
  - **5\*\***

    There was a server failure.
- Response Headers

  They contain information about the server.
- Response Body

  It contains the data, which is usually formatted in *JSON*.

### Pactical API

- Create an ***API*** (***C#***)

  Use the **dotnet CLI** (at the time of writing, I am using ***dotnet 3.1 LTS***) to create a ***ASP .NET* Core** Web *API***

      dotnet new webapi
  Run with

      dotnet run
  and, inside your browser, visit [localhost/WeatherForecast](https://localhost:5001/WeatherForecast).
  You should see text similar to

      [
        {"date":"2021-08-26T20:37:19.0099349+03:00","temperatureC":8,"temperatureF":46,"summary":"Warm"},
        {"date":"2021-08-27T20:37:19.0102424+03:00","temperatureC":13,"temperatureF":55,"summary":"Scorching"},
        {"date":"2021-08-28T20:37:19.0102465+03:00","temperatureC":23,"temperatureF":73,"summary":"Balmy"},
        {"date":"2021-08-29T20:37:19.0102471+03:00","temperatureC":-8,"temperatureF":18,"summary":"Scorching"},
        {"date":"2021-08-30T20:37:19.0102476+03:00","temperatureC":-3,"temperatureF":27,"summary":"Bracing"}
      ]
  This is our data provided by the API.

  In the template's code you can notice 2 files:
  - **WeatherForecast.cs**

    This is the class that describes the objects returned from our ***API***.
  - **WeatherForecastController.cs**

    This is our controller that, in the template, generates several objects of type **WeatherForecast** with random values and is called when we visit the above link.

    Notice that every time we visit the link, we call the **WeatherForecastController**. In other words, we send a request and it generates a different response every time the link is visited.

    Pay attention to the *[ApiController]* and *[HttpGet]* attributes above the **WeatherForecastController** class and its **Get()** method respectively. They are important as:
    - *[ApiController]* indicates that a type and all derived types are used to serve ***HTTP API*** responses.
    - *[HttpGet]* identifies an action that supports the ***HTTP* GET** method.

    These make the ***API*** work as it does.

- Access data through ***API*** (***JavaScript***)

  ***JavaScript*** (and, by extension, ***TypeScript***) has a number of ways to access and work with ***API***.

  The most popular ones are:
  - **XMLHttpRequest**
  - **Fetch**

  Differences:
  - **Fetch** makes it easier to make *asynchronous* requests.
  - **Fetch** handles responses better.
  - The **Fetch *API*** uses *Promises*, hence avoiding callback hell.

  Basically, **Fetch** is a better alternative to **XMLHttpRequest**.

  A simple example of getting data in *JSON* format

      const action = async () => {
        const response = await fetch('<URI>');
        const data = await response.json(); //extract JSON from the HTTP response
      }

## API - Resources

- [HTTP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
- [Fireship video](https://youtu.be/-MTSQjw5DrM)
- [RapidAPI](https://docs.rapidapi.com)
- [Nick Chapsas video (.NET Minimal API)](https://youtu.be/eRJFNGIsJEo)
- [Authentication and Authorization, tweet by RapidAPI](https://twitter.com/Rapid_API/status/1463190771448885255)
- [Authentication and Authorization by devoteam](https://nl.devoteam.com/expert-view/authentication-and-authorization-to-secure-apis/)
- [Make secure .NET Microservices and Web Applications](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/secure-net-microservices-web-applications/)
- [Five tips for building a standout API, tweet by RapidAPI](https://twitter.com/Rapid_API/status/1462752410103910407)

[HOME](https://github.com/Stratis-Dermanoutsos/Full-Stack-2021#full-stack-roadmap-2021) or [⬆ Back to top](#api)
