---
layout: post
title:  "File Transfer Application"
date:   2014-04-08 16:25:16
categories: project
tags: !!seq
- C++
- Winsock2
---
This project was done in a computer networking class with [Dr. Ebrahim Soujeri](http://soujeri.org/).  The source code is available on [Github](https://github.com/connorbode/Stop-and-Wait-Protocol).

The project consissts of a client application and a server application which enable file transfer between the hosts running the applications.  The applications accommodate for packet loss and delay, using the [stop-and-wait protocol](http://en.wikipedia.org/wiki/Stop-and-wait_ARQ).  Packet delivery is ensured.

The applications are written in C++ using Winsock2 and UDP sockets.