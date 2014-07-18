---
layout: post
title:  "CAC Sponsors App"
date:   2013-01-01 16:25:16
categories: draft
languages: !!seq
- Ruby
- Javascript
- CSS
technologies: !!seq
- Grape
- RSpec
- Angular
client: Canadian Avalanche Centre
---
The [Canadian Avalanche Centre](http://www.avalanche.ca/cac/) publishes public avalanche warnings for various Canadian regions.  These forecasts are published daily, and each day has a sponsor.  The management of sponsors was mega-ugly: the sponsorship coordinator (who had no technical knowledge) would create a spreadsheet mapping sponsorship details to specific days.  A tech employee would manually upload sponsor logos to a server & add a column to the spreadsheet containing URIs for the logos.  The spreadsheet would be converted to CSV and uploaded to a server.  Then, a script would read the CSV and generate sponsorship details for the day.  __Sponsorship details would change frequently throughout the winter & this process would have to be repeated.__

To solve the problem, I created a REST-like API using Ruby, [Grape](http://intridea.github.io/grape/) and [DataMapper](http://datamapper.org/) which was deployed on [Heroku](http://heroku.com/).  The API was composed of the following routes:

- `GET /sponsor/:year/:month/:day` Retrieve the sponsor for a given day
- `GET /sponsor/:id` Retrieve a sponsor by ID
- `GET /sponsor` Retrieve a list of all sponsors
- `POST /sponsor` Create a sponsor resource
- `PUT /sponsor/:id` Modify a sponsor
- `DELETE /sponsor/:id` Delete a sponsor resource
- `PUT /schedule/:year/:month/:day` Register a sponsor for a day
- `DELETE /schedule/:year/:month/:day` Delete a schedule for a day
- `GET /schedule` Retrieve all timeslot entries

