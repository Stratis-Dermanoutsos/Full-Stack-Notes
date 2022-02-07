# Concepts

- [**Notes**](#concepts---notes)
  - [**Proxy**](#proxy)
  - [**Load Balancer**](#load-balancer)
  - [**Caching Server**](#caching-server)
  - [**Firewall**](#firewall)
- [**Resources**](#concepts---resources)

## Concepts - Notes

### Proxy

There are 2 kinds of ***proxies***:

- (***Forward***) ***Proxy***

  A ***forward proxy***, or ***proxy*** for short, server allows multiple clients to route traffic to an external network.
- ***Reverse Proxy***

  A ***reverse proxy*** routes traffic on behalf of multiple servers.

#### (Forward) Proxy

A ***proxy*** server, sometimes referred to as a ***forward proxy***, is a server that routes traffic between client(s) and another system, usually external to the network. By doing so, it can regulate traffic according to preset policies, convert and mask client IP addresses, enforce security protocols, and block unknown traffic.

***Proxy*** servers are often used by business organizations or data centers.

These servers expose a single interface with which clients interact without having to enforce all of the policies and route management logic.

#### Reverse Proxy

A ***reverse proxy*** is a type of ***proxy*** server.  Unlike a traditional ***proxy*** server, which is used to protect clients, a ***reverse proxy*** is used to protect servers.

How it works:

- accepts a request from a client
- forwards the request to another one of many other servers
- returns the results from the server that actually processed the request to the client as if the proxy server had processed the request itself

Basically, the client only communicates directly with the ***reverse proxy*** server and it does not know that some other server actually processed its request.

While a reverse proxy can greatly simplify the process of managing access to a network, setting it up and configuring it properly can get complicated.

### Load Balancer

A ***load balancer*** acts as the “*traffic cop*” sitting in front of your servers and routing client requests across all of them in a manner that:

- maximizes speed
- maximizes capacity utilization
- ensures that not one of the servers is overworked

When a single server goes down, the ***load balancer*** redirects traffic to the remaining online servers.

When a new server is added to the group, the ***load balancer*** automatically starts to send requests to it.

Α ***load balancer*** performs the following functions:

- Distributes requests or network load across multiple servers
- Sends requests only to the online servers
- Provides the flexibility to add or subtract servers as demand dictates

#### Load Balancing Algorithms

- **Round Robin**

  Requests are distributed across the group of servers sequentially.
- **Least Connections**

  A new request is sent to the server with the fewest current connections to clients. The relative computing capacity of each server is factored into determining which one has the least connections.
- **Least Time**

  Sends requests to the server selected by a formula that combines the fastest response time and fewest active connections.
- **Hash**

  Distributes requests based on a key you define, such as the client IP address or the request URL.
- **IP Hash**

  The IP address of the client is used to determine which server receives the request.
- **Random with Two Choices**

  Picks two servers at random and sends the request to the one that is selected by then applying the **Least Connections** algorithm.

### Caching Server

In computing, a ***cache*** is a high-speed data storage layer which stores a subset of data.

***Caching***, or temporarily storing content from previous requests, is part of the core content delivery strategy implemented within the ***HTTP*** protocol.

Locations Where Web Content Is ***Cached***:

- Browser ***cache***

  Web browsers themselves maintain a small ***cache***. This may be user-specific content or content deemed expensive to download.
- Intermediary ***caching proxies***

  Any server in between the client and your infrastructure can be used to ***cache***.
- Reverse ***Cache***

  Your server infrastructure can implement its own ***cache*** for backend services. This way, content won't be retrieved by the backend servers on each request.

#### Caching Headers

The majority of ***caching*** behavior is determined by the ***caching*** policy, which is set by the content owner. These policies are mainly articulated through the use of specific ***HTTP*** headers.

- **Expires**

  It sets a time in the future when the content will expire.

  Syntax:

      Expires: <http-date>

      // Example
      Expires: Wed, 21 Oct 2015 07:28:00 GMT
- **Cache-Control**

  It's a modern replacement for the **Expires** header. It is used for modern ***cache*** policy specification.

  Syntax:

      Cache-Control: <option>, <option>, ...

      // Examples
      Cache-Control: no-store
      Cache-Control: public, max-age=604800
  Some of the options you can use to dictate your content’s ***caching*** policy are:
  - `no-cache`
  - `no-store`
  - `public`
  - `private`
  - `max-age`
  - `s-maxage`
  - `must-revalidate`
  - `proxy-revalidate`
  - `no-transform`
- **Etag**

  It lets ***caches*** be more efficient and save bandwidth.

  Syntax:

      ETag: W/"<etag_value>"
      ETag: "<etag_value>"

      // Examples
      ETag: W/"0815"
      ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
  `W/`: (case-sensitive, optional) indicates that a weak validator is used. Weak **etags** are easy to generate, but are far less useful for comparisons.

  `"<etag_value>"`: Entity tag uniquely representing the requested resource. They are a string of ASCII characters placed between double quotes.
- **Last-Modified**

  It specifies the last time that the item was modified.

  Syntax:

      Last-Modified: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT

      // Example
      Last-Modified: Wed, 21 Oct 2015 07:28:00 GMT
  `<day-name>`: One of *Mon*, *Tue*, *Wed*, *Thu*, *Fri*, *Sat*, or *Sun* (case-sensitive).

  `<day>`: 2 digit day number, e.g. *04* or *23*.

  `<month>`: One of *Jan*, *Feb*, *Mar*, *Apr*, *May*, *Jun*, *Jul*, *Aug*, *Sep*, *Oct*, *Nov*, *Dec* (case sensitive).

  `<year>`: 4 digit year number, e.g. *1990* or *2016*.

  `<hour>`: 2 digit hour number, from *00* or *23*.

  `<minute>`: 2 digit minute number, from *00* to *59*.

  `<second>`: 2 digit second number, from *00* to *59*.

  `GMT`: Greenwich Mean Time. ***HTTP*** dates are always expressed in GMT, never in local time.
- **Content-Length**

  It will refuse to ***cache*** content if it does not know the size of the content it will need to reserve space for.

  Syntax:

      Content-Length: <length>
  `<length>`: The length in decimal number of octets.
- **Accept-Encoding**

  It advertises which content encoding, usually a compression algorithm, the client is able to understand.

  Syntax:

      Accept-Encoding: <algorithm>;q=<value>

      // Examples
      Accept-Encoding: gzip
      Accept-Encoding: gzip, compress, br
      Accept-Encoding: br;q=1.0, gzip;q=0.8, *;q=0.1
  Possibles algorithms:
  - `gzip`: A compression format using the *Lempel-Ziv coding (LZ77)*, with a 32-bit CRC.
  - `compress`: A compression format using the *Lempel-Ziv-Welch (LZW)* algorithm.
  - `deflate`: A compression format using the *zlib* structure, with the *deflate compression* algorithm.
  - `br`: A compression format using the *Brotli* algorithm.
  - `identity`: Indicates the identity function (i.e. no compression, nor modification). This value is always considered as acceptable, even if not present.
  - `*`: Matches any content encoding not already listed in the header. This is the default value if the header is not present.

  `;q=<value>`: (optional) Any value is placed in an order of preference expressed using a relative quality value called weight.
- **Vary**

  It can be used to tell ***caches*** to pay attention to an additional header. It's is most commonly used to tell caches to key by the **Accept-Encoding** header.

  Syntax:

      Vary: *
      Vary: <header-name>, <header-name>, ...

      // Example
      Vary: User-Agent
  `*`: Each request for a URL is supposed to be treated as a unique and uncacheable request.

  `<header-name>`: A comma-separated list of header names to take into account when deciding whether or not a cached response can be used.

### Firewall

A ***firewall*** is a security device/system (hardware or software) that can help protect your network by filtering traffic and blocking outsiders from gaining unauthorized access to the private data on your computer.

#### Firewall Types

- **Packet-filtering**

  This is the most basic ***firewall*** type. In other words, it provides only basic protection.

  Packet filtering ***firewalls*** don’t open data packets to inspect their contents. Any data packet that fails the simple inspection is dropped.

  They are not resource-intensive and have a low impact on system performance.
- **Proxy**

  **Proxy *firewalls*** filter network traffic at the [application layer of the OSI network model](https://osi-model.com/application-layer/).

  These ***firewalls*** typically operate in the cloud or through another proxy device. Instead of allowing traffic to connect directly, a connection to the traffic’s source is established and the data packet is inspected.

  They are relatively slow.
- **Network Address Translation (NAT)**

  These ***firewalls*** work by assigning a public address to a group of devices inside a private network. With **NAT**, individual IP addresses are hidden. Therefore, attackers scanning for IP addresses on a network are prevented from discovering specific details.
- **Web Application (WAF)**

  **WAF** are responsible for
  - filtering
  - monitoring
  - blocking

  data packets as they travel in and out of websites or web applications.

  A **WAF** is most similar to the **proxy *firewall***, but has a more specific focus on defending against application layer web-based attackers.

- **Next-Gen (NGFW)**

  **NGFW** is the most popular ***firewall*** type.

  These ***firewalls*** provide extensive application control and visibility, distinguish between safe and dangerous applications, and block malware from entering a network.

## Concepts - Resources

- Proxy
  - [Proxy server wiki](https://en.wikipedia.org/wiki/Proxy_server)
  - [Fireship video (NGINX explained)](https://youtu.be/JKxlsvZXG7c)
- Load Balancer
  - [Load balancing by NGINX](https://www.nginx.com/resources/glossary/load-balancing/)
- Caching Server
  - [Caching Overview by AWS](https://aws.amazon.com/caching/)
  - [Web Caching Basics by DigitalOcean](https://www.digitalocean.com/community/tutorials/web-caching-basics-terminology-http-headers-and-caching-strategies)
- Firewall
  - [Firewall wiki](https://en.wikipedia.org/wiki/Firewall_(computing))

[HOME](https://github.com/Stratis-Dermanoutsos/Full-Stack-Notes#full-stack-notes) or [⬆ Back to top](#concepts)
