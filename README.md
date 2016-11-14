# Consecutive Run

## Getting started

This project is compiled using webpack. Provided you have node and npm/yarn installed, simply navigate to this directory and run the following

```
npm install
webpack
```
or 
```
yarn
webpack
```

Your compiled static artifacts will be compiled within the **dist/** directory. You can serve those files over a web server or interact with it locally (via the files:// protocol). For simplicity, I included a copy of the file assets in the **web/** directory (so it can be committed in the repo without the need to install node and webpack).

## How to use
When you load **index.html**, simply start typing numbers!  You will compile a list of values below on the fly.  Add three consecutive numbers in a row and the first value in the run will be emphasized.  You can also get a compiled list of indices below.

---

## Assignment

Write a javascript function named “find_consecutive_runs” that accepts as an argument a list of integers. 

- It must find in that list all runs of 3 consecutive numbers that increase or decrease by 1 
  - `[ x, x+1, x+2 ]` or `[ x, x-2, x-3 ]`
- It should return the list indices of the first element of each run 
- If there are no consecutive runs it should output `No Runs Found`

Example Input: [1, 2, 3, 5, 10, 9, 8, 9, 10, 11, 7, 8, 7]
Results: [0, 4, 6, 7]

## Tasks
1. This is an example of terrible UI design.
 - Make some improvements to the UI to make this more user friendly for input
1. Implement the javascript function `searchConsecutiveNumbers` to achieve the solution for the question stated
