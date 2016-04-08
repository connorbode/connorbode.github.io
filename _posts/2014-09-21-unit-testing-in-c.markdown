---
layout: post
title:  "Unit Testing in C"
date:   2014-09-21 00:00:00
categories: blog
tags: !!seq
- C
- testing
---

Coming from Javascript and Ruby development, I found it quite difficult to get unit tests running in C.  This is a short tutorial on how to set up testing.


### Installing Boost Test

[Boost](http://www.boost.org) is a massive collection of C++ libraries.  I haven't had the time to look over the collection, but [Boost Test Library](http://www.boost.org/doc/libs/1_56_0/libs/test/doc/html/index.html) provides the simple unit testing support I needed.

- OSX : `brew install boost`
- Linux (Debian flavours) : `sudo apt-get install libboost-all-dev`
- Windows : [Here's an install tutorial](http://www.boost.org/doc/libs/1_55_0/more/getting_started/windows.html).  Good luck.

### Creating a Test Module

{% highlight c %}

#define BOOST_TEST_MODULE MyTestModule
#include <boost/test/included/unit_test.h>

BOOST_AUTO_TEST_CASE(myTestCase) {
  BOOST_CHECK(true);
}

{% endhighlight %}

That's a barebones test module that will compile and run.  

- `MyTestModule` is the name of our module
- `BOOST_AUTO_TEST_CASE` declares a test case
- `myTestCase` is the name of the test case.
- `BOOST_CHECK` accepts one parameter and asserts it is true

### Simple Example

Take the following C++ header file `useful.h`.

{% highlight c %}

#ifndef TEST_H
#define TEST_H

int usefulFunction (int val) {
  return val;
}

#endif

{% endhighlight %}

The function above simply returns any integer you give it.  We can test it with the following file `useful.spec.c`:

{% highlight c %}

#define BOOST_TEST_MODULE UsefulModule
#include <boost/test/included/unit_test.h>
#include "useful.h"

BOOST_AUTO_TEST_CASE(usefulFunctionTest) {
  BOOST_CHECK(usefulFunction(2) == 2);
  BOOST_CHECK(usefulFunction(3) == 3);
}

{% endhighlight %}

To run the tests:

1. Compile using `g++ -o useful.spec.o useful.spec.c`
2. Run with `./useful.spec.o`