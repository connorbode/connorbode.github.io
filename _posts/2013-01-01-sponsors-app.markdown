---
layout: post
title:  "CAC Sponsors App"
date:   2013-01-01 16:25:16
categories: draft
technologies: !!seq
- Ruby
- Javascript
- CSS
- Grape
- RSpec
- Angular
- S3
client: Canadian Avalanche Centre
---
The [Canadian Avalanche Centre](http://www.avalanche.ca/cac/) publishes public avalanche warnings for various Canadian regions.  These forecasts are published daily, and each day has a sponsor.  The management of sponsors was mega-ugly: the sponsorship coordinator (who had no technical knowledge) would create a spreadsheet mapping sponsorship details to specific days.  A tech employee would manually upload sponsor logos to a server & add a column to the spreadsheet containing URIs for the logos.  The spreadsheet would be converted to CSV and uploaded to a server.  Then, a script would read the CSV and generate sponsorship details for the day.  __Sponsorship details would change frequently throughout the winter & this process would have to be repeated.__

To solve the problem, I created a REST-like API using Ruby, [Grape](http://intridea.github.io/grape/) and [DataMapper](http://datamapper.org/) which is deployed on [Heroku](http://heroku.com/).  API routes can be viewed & tested on [this demo deployment](insert link..) (uses [Grape-Swagger](https://github.com/tim-vandecasteele/grape-swagger)).  The demo instance is not hooked up to an AWS S3 account so sponsor logos will not upload.  Apart from that, the demo API is fully functional.  

The client application was built using [AngularJS](http://angularjs.org/) and [Bootstrap](http://getbootstrap.com/).  It is viewable [here](insert link..)