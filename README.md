# 100 DAYS OF CODE

This is a challenge and way for me to give my all and acquire practical knowledge and skills. The goal is to complete the TODO list in the [GOALS](./README.md#GOALS) section.

Hopefully, by the end of this challenge, I will have the skills to get a job and know what I am doing!

## RULES

- Consecutive days of coding/studying.
- No cheating preferably.
- If cheat day, make 2 things the next day.
- Upload progress on GitHub

## GOALS

- Learn
  - [x] ***HTTP*** protocol
  - [x] ***HTTP*** requests
  - [ ] Fullstack web development
    - [ ] Frontend
      - [x] Basics
        - [x] ***HTML***
        - [x] ***CSS***
        - [x] ***JavaScript***
      - [ ] Framework
        - [x] ***Tailwind CSS***
        - [ ] ***SASS***
        - [ ] ***React JS***
      - [x] Version Control System (***Git*** & ***Github***)
      - [ ] Package Manager (***NPM***)
      - [ ] Module Bundler (***Webpack***)
      - [ ] Extras for ***React JS***
        - [ ] ***NextJS***
        - [ ] ***Redux***
    - [ ] Backend
      - [x] ***C#***
      - [ ] ***ASP.NET***
      - [ ] Process management
      - [ ] Threads & Concurrency
      - [ ] Basic Networking Concepts
        - [ ] Server-Client
        - [ ] APIs
      - [ ] Databases
        - [x] ***MySQL***
        - [x] ***PostgreSQL***
        - [ ] ***MongoDB***
      - [ ] CI/CD Tools
        - [ ] ***Jenkins***
        - [ ] ***GitLab***
      - [ ] Cloud Providers
        - [ ] ***AWS***
        - [ ] ***Azure***
      - [ ] Learn concept and how to setup
        - [ ] Reverse and Forward proxy
        - [ ] Load Balancer
        - [ ] Caching Server
        - [ ] Firewall
  - [ ] ***MAUI***

## Days - Knowledge gained

### 1

- ***HTTP*** means ***HyperText Transfer Protocol***
- ***HTTP***, as a request-response protocol, gives users a way to interact with web resources such as HTML files by transmitting hypertext messages between clients and servers
- ***HTTP*** is a method for encoding and transporting information between a client (such as a web browser) and a web server
- ***HTTP*** requests are:
  - ***CONNECT***: The ***CONNECT*** method establishes a tunnel to the server identified by the target resource.
  - ***DELETE***: The ***DELETE*** method deletes the specified resource.
  - ***GET***: The ***GET*** method requests a representation of the specified resource. Requests using ***GET*** should only retrieve data.
  - ***HEAD***: The ***HEAD*** method asks for a response identical to that of a ***GET*** request, but without the response body.
  - ***OPTIONS***: The ***OPTIONS*** method is used to describe the communication options for the target resource.
  - ***PATCH***: The ***PATCH*** method is used to apply partial modifications to a resource.
  - ***POST***: The ***POST*** method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server.
  - ***PUT***: The ***PUT*** method replaces all current representations of the target resource with the request payload.
  - ***TRACE***: The ***TRACE*** method performs a message loop-back test along the path to the target resource.
- I made basic ***API*** in ***C#***
  - Project is called ***BirthdayAPI***

### 2

- Basics of ***JavaScript*** (from ***[Speaking JavaScript](http://speakingjs.com)***)
- ***obj.propKey = value*** and ***obj['propKey'] = value*** are equal
- if ***1 = 0001***, then ***~1 = 1110***
- ***'abc'.charAt(1)*** and  ***'abc'[1]*** are equal, tho some older browsers don't support the latter
- Comparing strings
  - is case-sensitive

        > 'B' > 'A' // true
        > 'B' > 'a' // false
  - doesn't handle umlauts and accents well

        > 'b' > 'ä' // false
- ***C#*** vs ***JavaScript*** (only notable differences/similarities as I am used to writing code in ***C#***)

|  | C#      | JavaScript |
| ----------- | ----------- | ----------- |
| types | int, float, double, char, bool, ... | let, var, const |
| methods | \<access> \<type> \<name>(\<type> x)  | function \<name>(x) |
| named parameters | fun(x=4) | fun({ x: 4 }) |
| print | System.Console.WriteLine(str) | console.log(str) |
| str -> num | int.Parse(str) | +str (or parseInt(str)) |
| num -> str | num.ToString() | num.toString() |
| exceptions | try {} catch(Exception) {} | try {} catch(exception) {} |
| closures | return delegate() { return val;}; | return function() { return val;} |
| foreach | foreach (int elem in arr) {} | for (var elem in arr) {} |
| using | using (obj) {} | with (obj) {} |
| class | class Dog { string name; public Dog(string x) { this.name = x; } } | function Dog(x) { this.name = x; } |
| inheritance | class Subclass : Baseclass | var subclass = { [[Prototype]]: baseclass } |
| accessors | \<type> X { get {return x;} set {x = value;} } | get X() { return x; }, set X(value) { x = value; } |
| regular expressions | Regex reg = new Regex(@"^\w") | /^\w/ |
