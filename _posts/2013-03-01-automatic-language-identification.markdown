---
layout: post
title:  "Automatic Language Identification"
date:   2014-03-01 16:25:16
categories: project
tags: !!seq
- Java
- n-grams
- Naive Bayes Classification
source: https://github.com/connorbode/Automatic-Language-Identification
---
This was a fun project done in my artificial intelligence class with [Dr. Leila Kosseim](http://users.encs.concordia.ca/~kosseim/).  

The purpose of the language identifier is to predict the language of a given block of text.  It consumes large amounts of training text in numerous different languages.  Then, given a block of text, it estimates the language of that text by calculating which language it is most probable to be.  

The language identifier has two main functions: __training__ and __identifying text__.

Training the identifier on a single language involves reading a training corpus and keeping record of the number of occurrences of every possible 2-character sequence (known as a [bigram](http://en.wikipedia.org/wiki/Bigram)) in the language.  The resulting data can be used to compute the probability of any 2-character sequence occurring in the language.

After training the identifier on numerous languages it can be used to identify a block of mystery text.  For each language, the mystery text into bigrams and the joint probability of each bigram occurring in a given language is computed.  The identifier reasons that the language in which the sequence of mystery text has the highest probability of occurring __is__ the language of the myster text.

This method of probabilistic reasoning is known as [Naive Bayes Classification](http://en.wikipedia.org/wiki/Naive_Bayes_classifier).