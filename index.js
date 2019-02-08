
// Import module from local file system
var chalk = require("chalk");

// Declare message variable and use installed package 'chalk'
var message = "Hello " + chalk.yellow("World");

// Declare second message variable and use installed package 'chalk'
var message2 = chalk.red("Hello ") + chalk.green("my ") + chalk.red("Friends!");

// Print message 1 and message 2 to standard output
console.log(message);
console.log(message2);