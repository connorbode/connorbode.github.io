---
layout: post
title:  "Prototyping Angular Resources"
date:   2014-05-21 19:52:00
categories: blog
---
[ngResource](https://docs.angularjs.org/api/ngResource/service/$resource) is a useful Angular.js module which aids communication with RESTful data sources.  ngResource objects can be extended using prototypes just like any other JavaScript object.

Let's start with a simple resource called _persons_.  Imagine that a person contains only a name and an id. An example record would be 
{% highlight json %}
{"id": 1, "name": "James"}
{% endhighlight %}

Now, let's connect to the resource (which is hosted at `myfakeurl.com/persons`) using ngResource.

{% highlight javascript %}
var PersonsResource = $resource('http://myfakeurl.com/persons/:id');
{% endhighlight %}

We don't want our people to be rude, so let's extend our resource to let them introduce themselves to the JavaScript console.

{% highlight javascript %}
PersonsResource.prototype.introduce = function () {
  var introduction = "Hi, my name is " + this.name;
  console.log(introduction);
}
{% endhighlight %}

Any people created using the resource will now be able to introduce themselves.

{% highlight javascript %}
var james = PersonsResource.get({id: 1});
james.introduce(); // logs "Hi, my name is James"

var people = PersonsResource.query();
people[0].introduce(); // logs "Hi, my name is James"
{% endhighlight %}

