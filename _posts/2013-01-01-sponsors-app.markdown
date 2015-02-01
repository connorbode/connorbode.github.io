---
layout: post
title:  "CAC Sponsors App"
blurb: "A schedule manager for avalanche forecast sponsors"
date:   2013-01-01 16:25:16
categories: project
tags: !!seq
- Ruby
- Javascript
- CSS
- Grape
- Grape-Swagger
- RSpec
- AngularJS
- Bootstrap
- S3
demo: /cac-sponsors-api
client: Canadian Avalanche Centre
---

### Problem

The [Canadian Avalanche Centre](http://www.avalanche.ca/cac/) publishes public avalanche warnings for various Canadian regions.  These forecasts are published daily, and each day has a sponsor.  The management of sponsors was mega-ugly (CSVs and hacky scripts).

### Solution

To solve the problem, I created a REST-like API using Ruby, [Grape](http://intridea.github.io/grape/) and [DataMapper](http://datamapper.org/) which is deployed on [Heroku](http://heroku.com/).  API routes can be viewed & tested [here](/cac-sponsors-api) (using [Grape-Swagger](https://github.com/tim-vandecasteele/grape-swagger) & [Swagger-UI](https://github.com/wordnik/swagger-ui) for API visualization).  The demo instance is not hooked up to an AWS S3 account so sponsor logos will not upload.  Apart from that, the demo API is fully functional.  

The client application was built using [AngularJS](http://angularjs.org/) and [Bootstrap](http://getbootstrap.com/).  I haven't uploaded a demo _yet_.