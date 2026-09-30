function greeting(name) {
  return `Hello, ${name}!`;
}

if (require.main === module) {
  console.log(greeting("Jenkins"));
}

module.exports = greeting;
