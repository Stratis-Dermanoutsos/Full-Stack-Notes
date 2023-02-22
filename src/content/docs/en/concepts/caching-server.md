---
title: "Caching Server"
description: "This section contains notes on Caching Servers."
---

In computing, a ***cache*** is a high-speed data storage layer which stores a subset of data.

***Caching***, or temporarily storing content from previous requests, is part of the core content delivery strategy implemented within the ***HTTP*** protocol.

Locations Where Web Content Is ***Cached***:

- Browser ***cache***

  Web browsers themselves maintain a small ***cache***. This may be user-specific content or content deemed expensive to download.
- Intermediary ***caching proxies***

  Any server in between the client and your infrastructure can be used to ***cache***.
- Reverse ***Cache***

  Your server infrastructure can implement its own ***cache*** for backend services. This way, content won't be retrieved by the backend servers on each request.

## Caching Headers

The majority of ***caching*** behavior is determined by the ***caching*** policy, which is set by the content owner. These policies are mainly articulated through the use of specific ***HTTP*** headers.

- **Expires**

  It sets a time in the future when the content will expire.

  Syntax:

  ```json
  Expires: <http-date>
  // Example
  Expires: Wed, 21 Oct 2015 07:28:00 GMT
  ```

- **Cache-Control**

  It's a modern replacement for the **Expires** header. It is used for modern ***cache*** policy specification.

  Syntax:

  ```json
  Cache-Control: <option>, <option>, ...
  // Examples
  Cache-Control: no-store
  Cache-Control: public, max-age=604800
  ```

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

  ```json
  ETag: W/"<etag_value>"
  ETag: "<etag_value>"
  // Examples
  ETag: W/"0815"
  ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
  ```

  `W/`: (case-sensitive, optional) indicates that a weak validator is used. Weak **etags** are easy to generate, but are far less useful for comparisons.

  `"<etag_value>"`: Entity tag uniquely representing the requested resource. They are a string of ASCII characters placed between double quotes.
- **Last-Modified**

  It specifies the last time that the item was modified.

  Syntax:

  ```json
  Last-Modified: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
  // Example
  Last-Modified: Wed, 21 Oct 2015 07:28:00 GMT
  ```

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

  ```json
  Content-Length: <length>
  ```

  `<length>`: The length in decimal number of octets.
- **Accept-Encoding**

  It advertises which content encoding, usually a compression algorithm, the client is able to understand.

  Syntax:

  ```json
  Accept-Encoding: <algorithm>;q=<value>
  // Examples
  Accept-Encoding: gzip
  Accept-Encoding: gzip, compress, br
  Accept-Encoding: br;q=1.0, gzip;q=0.8, *;q=0.1
  ```

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

  ```json
  Vary: *
  Vary: <header-name>, <header-name>, ...
  // Example
  Vary: User-Agent
  ```

  `*`: Each request for a URL is supposed to be treated as a unique and uncacheable request.

  `<header-name>`: A comma-separated list of header names to take into account when deciding whether or not a cached response can be used.

## Resources

- [Caching Overview by AWS](https://aws.amazon.com/caching/)
- [Web Caching Basics by DigitalOcean](https://www.digitalocean.com/community/tutorials/web-caching-basics-terminology-http-headers-and-caching-strategies)
