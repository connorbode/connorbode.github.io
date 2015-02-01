---
layout: post
title:  "Concordia Calendar Ninja"
blurb: "A sneaky way to export a university timetable to Google or Apple calendar"
date:   2014-03-10 16:25:16
categories: project
tags: !!seq
- Ruby
- Javascript
- CSS
- Sinatra
- Mechanize
- Nokogiri
- RSpec
- AngularJS
---

This project was inspired by Concordia University's [Software Engineering and Computer Science Society (SCS)](http://scs.ecaconcordia.ca/).  I was working on the project at an SCS hackathon two years ago ([see the repo](https://github.com/SCS-hackers-group/Schedule-To-Calendar)), but there hasn't been any progress on it since.  I needed an idea for a demo project, so I just stole this one!

### Problem

Most people I know use Google Calendar or Apple iCal for managing their schedule.  MyConcordia doesn't provide a way to export your class schedule, so for each semester you need to create bunch of recurring events.  In the end it takes maybe 20 minutes max to add all of your events but it is a tedious task.

### Solution

The Concordia Calendar Ninja takes a Concordia student's username & password, retrieves the users schedule, authenticates the user to Google & adds their schedule to Google Calendar.  There are also plans to allow export to iCal.

The back-end is written using Ruby with [Sinatra](http://www.sinatrarb.com/) to handle HTTP requests.  [Mechanize](http://docs.seattlerb.org/mechanize/) is used to crawl the MyConcordia portal & [Nokogiri](http://nokogiri.org/) is used to parse the schedule HTML.

The client uses [AngularJS](https://angularjs.org/).  While Angular may be overkill for such a small application, I will never go back to using jQuery alone for front-end development.  I attempted to do the client without Angular and got frustrated at the lack of structure.

__Links:__

- [Github repo](https://github.com/connorbode/ConcordiaCalendarNinja)
- [Github page](http://connorbode.github.io/ConcordiaCalendarNinja/)