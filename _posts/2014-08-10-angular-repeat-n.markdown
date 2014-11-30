---
layout: post
title:  "angular-repeat-n"
blurb: "An AngularJS directive for repeating a DOM element n times"
date:   2014-08-10 19:52:00
categories: project
tags: !!seq
- AngularJS
- Gulp
- NodeJS
- ExpressJS
- Bower
---

### Overview

Angular ships with a wonderful tool called [ngRepeat](https://docs.angularjs.org/api/ng/directive/ngRepeat) which makes repeating DOM elements super easy.  Its one fallback is that there is no way to repeat an element n times.  

There are many [different solutions](http://stackoverflow.com/questions/16824853/way-to-ng-repeat-defined-number-of-times-instead-of-repeating-over-array) to the problem.  Most involve some extra logic in your controller, or building a filter for the purpose.  I got extremely fed up with the situation and built an easy-to-use directive.

### Installation & Usage

The package has been submitted to [Bower](http://bower.io/search/?q=angular-repeat-n) and can be easily added to a project using `bower install angular-repeat-n`.  

Once installed & referenced in the application's `index.html`, usage is simple:

First, reference the `angular-repeat-n` module:

{% highlight javascript %}
angular.module('myApp', ['angular-repeat-n']);
{% endhighlight %}

Then repeat elements!

{% highlight html %}
<!-- repeat an element 4 times -->
<span ng-repeat-n="4"></span>
{% endhighlight %}

The current repitition is tracked using `$index`:

{% highlight html %}
<!-- produces "1234" -->
<span ng-repeat-n="4">{{$index}}</span>
{% endhighlight %}

Repeating based on a scope variable is also possible.  Given that `$scope.numRepeats = 10`, the following span will repeat 10 times:

{% highlight html %}
<span ng-repeat-n="numRepeats"></span>
{% endhighlight %}

### Internals

The directive uses [ngTransclude](https://docs.angularjs.org/api/ng/directive/ngTransclude) to replace its internals.  It watches for changes in the value of `ng-repeat-n`, then inserts / removes DOM elements as required.  

The project's build processes are driven by [Gulp](http://gulpjs.com).  The project also includes a simple HTTP server built using [NodeJS](http://nodejs.org) and [ExpressJS](http://expressjs.com), for serving the example page.