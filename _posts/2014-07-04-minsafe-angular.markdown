---
layout: post
title:  "MinSafe Angular"
date:   2014-07-04 19:52:00
categories: blog
---

[Minification](http://www.programmerinterview.com/index.php/javascript/what-is-javascript-minification/) is often used to decrease the size of JS files, consequently decreasing load times.  

Many minification tools rename variables to single characters.  For example a minification tool will take the following code block: 

{% highlight javascript %}
function sayHi (name) {
  console.log("Hi " + name);
}

sayHi("Dave");
{% endhighlight %}

..and change it to:

{% highlight javascript %}
// note: the only minification task shown in the examples on this page is the
// renaming of variables

function sayHi (a) {
  console.log("Hi " + a);
}

sayHi("Dave");
{% endhighlight %}

This can cause problems with [Angular dependency injection](https://docs.angularjs.org/guide/di).  A common way of injecting dependencies is to pass the dependency names as function arguments:

{% highlight javascript %}
angular.module("myApp")

  .controller("MyCtrl", function ($location) {
    var path = $location.path();
    console.log("This page is located at " + path);
  });
{% endhighlight %}

..becomes:

{% highlight javascript %}
angular.module("myApp")

  .controller("MyCtrl", function (a) {
    var b = a.path();  // undefined
    console.log("This page is located at " + b)
  });
{% endhighlight %}

To ensure minification does not break an Angular app, __Inline Array Notation__ must be to ensure that the dependency injection will be successful regardless of the name of the function's parameter:

{% highlight javascript %}
angular.module("myApp")

  .controller("MyCtrl", ["$location", function (locationVar) {
    var path = locationVar.path();
    console.log("This page is located at " + path);
  }]);

// after variables are renamed:

angular.module("myApp")

  .controller("MyCtrl", ["$location", function (a) {
    var b = a.path();  // undefined
    console.log("This page is located at " + b)
  }]);
{% endhighlight %}

If you want to save yourself from writing extra lines of code, you can forget the Inline Array Notation and use [ngmin](https://github.com/btford/ngmin) to make your Angular code minsafe before minifying it.

