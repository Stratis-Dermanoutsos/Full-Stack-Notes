---
title: "Load Balancer"
description: "This section contains notes on Load Balancers."
---

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

## Load Balancing Algorithms

- ### Round Robin

  Requests are distributed across the group of servers sequentially.
- ### Least Connections

  A new request is sent to the server with the fewest current connections to clients. The relative computing capacity of each server is factored into determining which one has the least connections.
- ### Least Time

  Sends requests to the server selected by a formula that combines the fastest response time and fewest active connections.
- ### Hash

  Distributes requests based on a key you define, such as the client IP address or the request URL.
- ### IP Hash

  The IP address of the client is used to determine which server receives the request.
- ### Random with Two Choices

  Picks two servers at random and sends the request to the one that is selected by then applying the **Least Connections** algorithm.

## Resources

- [Load balancing by NGINX](https://www.nginx.com/resources/glossary/load-balancing/)
