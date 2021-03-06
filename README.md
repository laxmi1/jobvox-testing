# Jobvox Automation testing with Protractor

## Prerequisites

Protractor is a [Node.js](https://nodejs.org/en/) program. To run, you will need to have Node.js installed. You will download Protractor package using [npm](https://www.npmjs.com/), which comes with Node.js. Check the version of Node.js you have by running `node --version`.

By default, Protractor uses the [Jasmine](https://jasmine.github.io/) test framework for its testing interface. This tutorial assumes some familiarity with Jasmine, and we will use version 2.4.

This tutorial will set up a test using a local standalone Selenium Server to control browsers. You will need to have the [Java Development Kit (JDK)](http://www.oracle.com/technetwork/java/javase/downloads/index.html) installed to run the standalone Selenium Server. Check this by running `java -version` from the command line.



## Setup

Use npm to install Protractor globally with:
```
npm install -g protractor
```
This will install two command line tools, `protractor` and `webdriver-manager`. Try running `protractor --version` to make sure it's working.

The `webdriver-manager` is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:

```
webdriver-manager update
```
Now start up a server with:

```
webdriver-manager start
```
This will start up a Selenium Server and will output a bunch of info logs. Your Protractor test will send requests to this server to control a local browser. You can see information about the status of the server at http://localhost:4444/wd/hub.


## Run the test 

Now run the test with:
```
protractor conf.js
```
By default it will run headless mode, you can see the output like below in the terminal 
```
laxmikanth@laxmikanth:~/work/jobvox-testing (master)$protractor conf.js 
[10:14:33] I/launcher - Running 1 instances of WebDriver
[10:14:33] I/local - Starting selenium standalone server...
[10:14:34] I/local - Selenium standalone server started at http://192.168.1.42:49291/wd/hub
Started
.........


9 specs, 0 failures
Finished in 275.374 seconds

[10:19:14] I/local - Shutting down selenium standalone server.
[10:19:14] I/launcher - 0 instance(s) of WebDriver still running
[10:19:14] I/launcher - firefox #01 passed
```
you can also get output file here jobvox-testing/JasmineRports/firefox-test-report.html
