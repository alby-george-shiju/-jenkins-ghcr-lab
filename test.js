const greeting = require("./app");

if (greeting("Jenkins") !== "Hello, Jenkins!") {
  throw new Error("Greeting test failed");
}

console.log("Test passed");
