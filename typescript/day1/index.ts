// What will this code log? Explain your reasoning.

// const person = {
//   name: 'Alice',
//   sayHi: function() {
//     console.log(`Hi, my name is ${this.name}.`);
//   }
// };
// person.sayHi();


// interface IPerson {
//     name: string;
//     sayHi: () => void;
// }

// const person: IPerson = {
//     name: 'Alice',
//     sayHi: function () {
//         console.log(`Hi, my name is ${this.name}.`);
//     }
// };

// person.sayHi();



// What is logged to the console, and why? How would you fix it so it logs "Alice"?

// const person = {
//   name: 'Alice',
//   greet: function() {
//     console.log(`Hello, ${this.name}`);
//   }
// };
// const greetFunction = person.greet;
// greetFunction();



// interface IPerson {
//     name: string;
//     greet: () => void;
// }


// const person: IPerson = {
//     name: "Alice",
//     greet: function () {
//         console.log(`Hello, ${this.name}`);
//     }
// }

// const greetFunction = person.greet.bind(person);
// greetFunction()



// What will this code log and why?

// const user = {
//   name: 'Bob',
//   logName: function() {
//     setTimeout(() => {
//       console.log(this.name);
//     }, 100);
//   }
// };
// user.logName()



// interface IUser {
//     name: string;
//     logName: () => void;
// }

// const user: IUser = {
//     name: 'Bob',
//     logName: function () {
//         setTimeout(() => {
//             console.log(this.name);
//         }, 100);
//     }
// };
// user.logName()


// You have a User object with a method that logs a welcome message. There's also a "Login" button in your HTML. You want the welcome method to be called when the button is clicked, and the message should use the User object's data.

// const User = {
//   name: 'Alice',
//   welcome: function() {
//     console.log(`Welcome, ${this.name}!`);
//   }
// }



// interface IUser {
//     name: string;
//     welcome: () => void;
// }


// const user: IUser = {
//     name: 'Alice',
//     welcome: function () {
//         console.log(`Welcome, ${this.name}!`);
//     }
// }

// const loginButton: HTMLElement | null = document.getElementById("login-button")
// if (loginButton) {

//     loginButton.addEventListener("click", () => {
//         console.log("Clickewd")
//         user.welcome();
//     })
// }






// What will be logged to the console? Explain!

// let animal = 'Cat';
// function showAnimal() {
//   let animal = 'Dog';
//   console.log(animal);
// }
// showAnimal();
// console.log(animal);



// let animal: string = "Cat";
// function showAnimal() {
//     let animal: string = "Dog";
//     console.log(animal)
// }

// showAnimal();
// console.log(animal);




// What will this code output? Why?

// function test() {
//   console.log(a);
//   console.log(foo());
//   var a = 1;
//   function foo() {
//     return 2;
//   }
// }
// test();



// function test() {
//     console.log(a);
//     console.log(foo())

//     var a: number = 1;
//     function foo() {
//         return 2;
//     }
// }


// test()



// Explain the output of this for loop.

// for (var i = 0; i < 5; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 10);
// }


// for (var i: number = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i)
//     }, 10)
// }



// What will the following code log to the console on the last two lines? Explain why the count variable is not reset.

// function createCounter() {
//   let count = 0;
//   return function() {
//     count++;
//     console.log(count);
//   };
// }
// const counter = createCounter();
// counter();
// counter();


// function createCounter(): () => void {
//     let count: number = 0;
//     return function () {
//         count++;
//         console.log(count)
//     }
// }

// const counter = createCounter()
// counter()
// counter()



// What does this code log? Explain!

// const myObject = {
//   id: 'my-object',
//   createLogger: function() {
//     return () => {
//       console.log(`Logger for ${this.id}`);
//     };
//   }
// };
// const logger = myObject.createLogger();
// logger();


// interface IObject {
//     id: string;
//     createLogger: () => () => void;
// }


// const myObject: IObject = {
//     id: 'my-object',
//     createLogger: function () {
//         return () => {
//             console.log(`Logger for ${this.id}`);
//         };
//     }
// };
// const logger = myObject.createLogger();
// logger();



// Write a function makeAdder(x) that takes a number x and returns a new function. The new function should take a number y and return the sum x + y. Use a closure to achieve this.

// Eg: 
// let add = makeAdder(5);
// console.log(add(2)); 

// Answer: 7


// const makeAdder = (x: number) => {
//     return function (y: number) {
//         return x + y;
//     }
// }


// const adder = makeAdder(3);
// const sum = adder(5);

// console.log(sum)


// or


// function makeAdder(x: number): (y: number) => number {
//     return function (y: number) {
//         return x + y;
//     }
// }


// const adder = makeAdder(3);
// const sum = adder(5);

// console.log(sum)











