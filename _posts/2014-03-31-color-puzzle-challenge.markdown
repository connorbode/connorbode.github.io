---
layout: post
title:  "The Color Puzzle Challenge"
date:   2014-03-31 19:52:00
categories: project
---
This project was done in an artificial intelligence class with [Dr. Leila Kosseim](http://users.encs.concordia.ca/~kosseim/).  Its source is available on [Github](https://github.com/connorbode/TheColorPuzzleChallenge).

The project solves a game called the color puzzle.  The color puzzle is a variation of the [sliding puzzle](http://en.wikipedia.org/wiki/Sliding_puzzle).  Given a 5x3 grid containing 14 colored tiles and an empty space, the puzzle is solved when the tiles in the 1st and 3rd row are symmetric with regard to color.

The project uses the [A* search algorithm](http://en.wikipedia.org/wiki/A*_search_algorithm) to explore the state space and a simple heuristic based on the number of symmetric columns to evaluate each state.