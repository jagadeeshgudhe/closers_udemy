// === 1. First-Class and Higher-Order Functions ===

// First-Class Function: Assigning a function to a variable
const sayHello = function(name) {
    return `Hello, ${name}!`;
  };
  console.log(sayHello('Jagadeesh'));
  
  // Higher-Order Function: Taking a function as an argument
  function greetUser(greetFn, name) {
    console.log(greetFn(name));
  }
  greetUser(sayHello, 'Suneel');
  
  // Higher-Order Function: Returning a function
  function createGreeting(greeting) {
    return function(name) {
      return `${greeting}, ${name}!`;
    };
  }
  const sayHi = createGreeting('Hi');
  console.log(sayHi('Suneel'));
  
  // === 2. Functions Accepting Callback Functions ===
  
  // Callback Function Example
  function fetchData(callback) {
    const data = 'Sample Data';
    // Simulate asynchronous operation using setTimeout
    setTimeout(() => {
      callback(data);
    }, 1000);
  }
  
  function displayData(data) {
    console.log(`Data received: ${data}`);
  }
  
  fetchData(displayData);
  
  // === 3. Functions Returning Functions ===
  
  // Function Returning Function Example
  function multiplier(factor) {
    return function(number) {
      return number * factor;
    };
  }
  
  const double = multiplier(2);
  const triple = multiplier(3);
  
  console.log(double(5));
  console.log(triple(5));
  
  // === 4. The `call` and `apply` Methods ===
  
  const person = {
    firstName: 'Jagadeesh',
    lastName: 'Gudhe',
  };
  
  function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.firstName} ${this.lastName}${punctuation}`);
  }
  
  // Using call
  greet.call(person, 'Hello', '!');
  
  // Using apply
  greet.apply(person, ['Hi', '!!']);
  
  // === 5. The `bind` Method ===
  
  function greetBound(greeting, punctuation) {
    console.log(`${greeting}, ${this.firstName} ${this.lastName}${punctuation}`);
  }
  
  // Bind the person object to the greet function
  const greetPerson = greetBound.bind(person);
  greetPerson('Hello', '!');
  
  // Preset the greeting
  const sayHiBound = greetBound.bind(person, 'Hi');
  sayHiBound('?');
  
  // === 6. Immediately Invoked Function Expressions (IIFE) ===
  
  // Basic IIFE
  (function() {
    const message = 'This is an IIFE!';
    console.log(message);
  })();
  
  // IIFE with parameters
  (function(name) {
    console.log(`Hello, ${name}!`);
  })('Suneel');
  
  // === 7. Closures ===
  
  function outerFunction() {
    const outerVariable = 'I am from outer function';
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  const myClosure = outerFunction();
  myClosure();
  
  // === 8. More Closure Examples ===
  
  // Data Privacy Example
  function createCounter() {
    let count = 0;
  
    return {
      increment: function() {
        count += 1;
        console.log(count);
      },
      decrement: function() {
        count -= 1;
        console.log(count);
      },
    };
  }
  
  const counter = createCounter();
  counter.increment();
  counter.increment();
  counter.decrement();
  
  // Function Factory Example
  function makeGreeting(greeting) {
    return function(name) {
      console.log(`${greeting}, ${name}!`);
    };
  }
  
  const greetHello = makeGreeting('Hello');
  greetHello('Suneel');
  
  const greetHi = makeGreeting('Hi');
  greetHi('Jaga');
  