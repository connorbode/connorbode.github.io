---
layout: post
title:  "Breaking Things"
date:   2016-04-08 00:00:00
categories: blog
---

Recently I've been spending a lot of time breaking computer stuff.  I've found a lot of great tutorials, tools, and services in my explorations..

### Kali

Kali Linux (previously Backtrack) is the first thing that comes to mind when one thinks pentesting.  Initially, I installed Kali on a USB stick with persistent storage.  Shutting down my Macbook and booting into Kali got old pretty quick.  The USB speed also drastically slowed down any IO operations.

I decided to start installing tools on OSX.  Higher level tools like [wpscan](http://wpscan.org/) have no issues on running on OSX.  Others, like [aircrack](http://aircrack-ng.org/), have Linux requirements and will have limited functionality on OSX.  And after the [metasploit](https://www.metasploit.com/) installation was fully quarantined by my antivirus, I realized that I did not want to be using these tools on my day-to-day computer.  Despite the exploits being harmless when downloaded, I decided separation of concerns is applicable outside of software as well.

The next step was to move to a virtual machine.  There are preconfigured VirtualBox images available for download on the Kali site.  VirtualBox saved machines are really quick to boot up (~15 seconds) and with the SSH daemon set up I feel at home in my regular environment with all of the Kali features available to me.

### Tools and Explorations

I don't have any authority or expertise to write about using any of the tools, but here's a summary of what I've been exploring:

- WPS / WEP attacks for gaining access to WiFi networks
- WPA handshake capture for dictionary attacks on WiFi passwords
- Amazon EC2 GPU instances running oclHashcat for running dictionary attacks (I don't have high performance hardware..)
- Metasploit (through [this great tutorial from Offensive Security](https://www.offensive-security.com/metasploit-unleashed))
- MITM attacks using Ettercap
- BeEF XSS Framework (which is quite disturbing..)