---
title: "Firewall"
description: "This section contains notes on Firewalls."
---

A ***firewall*** is a security device/system (hardware or software) that can help protect your network by filtering traffic and blocking outsiders from gaining unauthorized access to the private data on your computer.

## Firewall Types

- ### Packet-filtering

  This is the most basic ***firewall*** type. In other words, it provides only basic protection.

  Packet filtering ***firewalls*** don’t open data packets to inspect their contents. Any data packet that fails the simple inspection is dropped.

  They are not resource-intensive and have a low impact on system performance.
- ### Proxy

  **Proxy *firewalls*** filter network traffic at the [application layer of the OSI network model](https://osi-model.com/application-layer/).

  These ***firewalls*** typically operate in the cloud or through another proxy device. Instead of allowing traffic to connect directly, a connection to the traffic’s source is established and the data packet is inspected.

  They are relatively slow.
- ### Network Address Translation (NAT)

  These ***firewalls*** work by assigning a public address to a group of devices inside a private network. With **NAT**, individual IP addresses are hidden. Therefore, attackers scanning for IP addresses on a network are prevented from discovering specific details.
- ### Web Application (WAF)

  **WAF** are responsible for
  - filtering
  - monitoring
  - blocking

  data packets as they travel in and out of websites or web applications.

  A **WAF** is most similar to the **proxy *firewall***, but has a more specific focus on defending against application layer web-based attackers.

- ### Next-Gen (NGFW)

  **NGFW** is the most popular ***firewall*** type.

  These ***firewalls*** provide extensive application control and visibility, distinguish between safe and dangerous applications, and block malware from entering a network.

## Resources

- [Firewall wiki](https://en.wikipedia.org/wiki/Firewall_(computing))
