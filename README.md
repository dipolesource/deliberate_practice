# Deliberate Practice

We're going to iterate an implementation of [Project Euler problem 1](https://projecteuler.net/problem=1) in Javascript via TDD.

Implement a command line program in Javascript to solve Project Euler problem 1.

## Auto re/run tests
To automatically run the spec files you've added to `src` folder when they change, run `npm --silent start`.

## Setup
1. Clone this repository.
1. Install [node.js/npm with package manager](https://nodejs.org/en/download/package-manager/)
1. Verify installation:
    - `which node` should tell you where node is installed e.g. `/usr/local/bin/node`
    - `which npm` should tell you the same e.g. `/usr/local/bin/npm`
1. Install dependencies with `npm install`, which should install [jasmine](https://jasmine.github.io/pages/getting_started.html) for node.
1. The `postinstall` script should have ran, and if all dependencies are installed correctly, should have produced an output similar to:
```shell
>> Executing 5 defined specs...

Test Suites & Specs:

1) Example module
.   ✔ should be loaded
.   ✔ should be able to add
.   ✔ should not know how to subtract

   2) nested test suite
*      ⚠ should have a pending test
*      ⚠ should have another pending test

Pending:

1) Example module nested test suite should have a pending test
  How to create a pending test


2) Example module nested test suite should have another pending test
  Temporarily disabled with xit

5 specs, 0 failures, 2 pending specs
Finished in 0.012 seconds



>> Done!


Pending Specs:

1) Example module nested test suite : should have a pending test
   Reason: How to create a pending test

2) Example module nested test suite : should have another pending test
   Reason: Temporarily disabled with xit

Summary:

Suites:  2 of 2
Specs:   3 of 5 (2 pending)
Expects: 3 (0 failures)
Finished in 0.012 seconds
```
1. Tests/Specs should be saved in `src` folder with the suffix `_spec.js` e.g. `euler_1_spec.js`.

## TODO
There is desire to setup the project in IntelliJ.  However, only IntelliJ Ultimate or WebStorm support Javascript projects, and both require licenses.
1. Download [IntelliJ Community Edition](https://www.jetbrains.com/idea/download/download-thanks.html?platform=mac&code=IIC)
1. Setup your project in IntelliJ

