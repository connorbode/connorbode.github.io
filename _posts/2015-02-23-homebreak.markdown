---
layout: post
title:  "Cool shit you didn't know about homebrew"
date:   2014-11-30 00:00:00
categories: draft
tags: !!seq
- C
- OpenMPI
---

As a project for [Dr. Dhrubajyoti Goswami](http://users.encs.concordia.ca/~goswami/)'s parallel programming course, I implemented some common algorithms in C using OpenMPI.  The algorithms were run on a Beowulf cluster on up to 16 machines.  Though there were many more machines in the cluster, I only had access to 16.

### Parallel Pie

As an introduction to OpenMPI, I implemented a simple program to generate the value of Pi.  Given a dart-board circle within a square, the user specifies the number of darts to throw.  The ratio of darts which landed within the circle to darts which did not is used to calculate the value.  The program was implemented in two different ways.  In the first, all processes are spawned instantly and each compute an equal share of the throws.  The results are reduced to a single process.  In the second, a master process runs and spawns child processes with an equal share of the data.  [The source code is available on Github](https://github.com/connorbode/parallel-pie).

### Hypercube Quicksort

After becoming comfortable with OpenMPI I implemented a divide-and-conquer quicksort using a hypercube topology, capable of sorting `n` elements on `p` processing units in `O((n/p) log (n/p))` time.  The algorithm requires `p = 2^d` processing units in order to arrange the units in a hypercube.  `d` iterations of compare-and-exchange operations along the `d`th hypercube dimension are carried out.  Finally, each processing unit carries out a sequential quicksort and the results are reduced.  [The source code is available on Github](https://github.com/connorbode/hypercube-quicksort).

### Floyd-Warshall

The final project I completed was a parallel implementation of the [Floyd-Warshall algorithm](http://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm).