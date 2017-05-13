# Deliberate Practice

We're going to iterate an implementation of [Project Euler problem 1](https://projecteuler.net/problem=1) in Javascript via TDD.

Implement a command line program in Javascript to solve Project Euler problem 1.

## Auto re/run tests
To automatically run the spec files you've added to `src` folder when they change, run `npm --silent start`.

## Setup
1. Install [node.js/npm with package manager](https://nodejs.org/en/download/package-manager/)
1. Verify installation:
    - `which node` should tell you where node is installed e.g. `/usr/local/bin/node`
    - `which npm` should tell you the same e.g. `/usr/local/bin/npm`
1. Install dependencies with `npm install`, which should install [jasmine](https://jasmine.github.io/pages/getting_started.html) for node.
1. Verify dependency installation:
    - `npm test` should produce a similar output:
    ```
    Started

    >> Executing 2 defined specs...

    Test Suites & Specs:

    1) Example module
    .   ✔ should be loaded
    .   ✔ should be able to add


    2 specs, 0 failures
    Finished in 0.006 seconds



    >> Done!


    Summary:

    Suites:  1 of 1
    Specs:   2 of 2
    Expects: 2 (0 failures)
    ```
1. Tests/Specs should be saved in `src` folder with the suffix `_spec.js` e.g. `jasmine_spec.js`.

## TODO
There is desire to setup the project in IntelliJ.  However, only IntelliJ Ultimate or WebStorm support Javascript projects, and both require licenses.
1. Download [IntelliJ Community Edition](https://www.jetbrains.com/idea/download/download-thanks.html?platform=mac&code=IIC)
1. Setup your project in IntelliJ

