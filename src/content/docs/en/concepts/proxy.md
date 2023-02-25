---
title: "Proxy"
description: "This section contains notes on proxies and their types."
---

There are 2 kinds of ***proxies***:

- (***Forward***) ***Proxy***

  A ***forward proxy***, or ***proxy*** for short, server allows multiple clients to route traffic to an external network.
- ***Reverse Proxy***

  A ***reverse proxy*** routes traffic on behalf of multiple servers.

## (Forward) Proxy

A ***proxy*** server, sometimes referred to as a ***forward proxy***, is a server that routes traffic between client(s) and another system, usually external to the network. By doing so, it can regulate traffic according to preset policies, convert and mask client IP addresses, enforce security protocols, and block unknown traffic.

***Proxy*** servers are often used by business organizations or data centers.

These servers expose a single interface with which clients interact without having to enforce all of the policies and route management logic.

## Reverse Proxy

A ***reverse proxy*** is a type of ***proxy*** server.  Unlike a traditional ***proxy*** server, which is used to protect clients, a ***reverse proxy*** is used to protect servers.

How it works:

- accepts a request from a client
- forwards the request to another one of many other servers
- returns the results from the server that actually processed the request to the client as if the proxy server had processed the request itself

Basically, the client only communicates directly with the ***reverse proxy*** server and it does not know that some other server actually processed its request.

While a reverse proxy can greatly simplify the process of managing access to a network, setting it up and configuring it properly can get complicated.

## Resources

- [Proxy server wiki](https://en.wikipedia.org/wiki/Proxy_server)
- [Fireship video (NGINX explained)](https://youtu.be/JKxlsvZXG7c)
