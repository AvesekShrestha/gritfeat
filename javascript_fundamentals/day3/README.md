# What will this code log? Explain your reasoning.

```
const person = {
  name: 'Alice',
  sayHi: function() {
    console.log(`Hi, my name is ${this.name}.`);
  }
};
person.sayHi();
```

**Output** 

```
Hi, my name is Alice.
```

**Reason** 

* In normal function, *this* is determined by how the function is called(runtime), not where it was defined.
* If called as method, *this* refers to the object call it.
* Example 

```
person.sayHi(); // Alice (this refers to object person)
```

# What is logged to the console, and why? How would you fix it so it logs "Alice"?

```
const person = {
  name: 'Alice',
  greet: function() {
    console.log(`Hello, ${this.name}`);
  }
};
const greetFunction = person.greet;
greetFunction();

```

**Output** 

```
Hello, undefined
```

**Reason** 

```
const greetFunction = person.greet
```

* This line is detaching the *greet* method from the person object, making *greetFunction* standalone not bounded with person object.
* As reult, *this* is not bound to *person* object anymore, instead holds the value of global object.

**Fix** 

* Using bind() method
* *bind* method can borrow object's method, preserving *this* object

**Fixed Code** 

```
const person = {
  name: 'Alice',
  greet: function() {
    console.log(`Hello, ${this.name}`);
  }
};
const greetFunction = person.greet.bind(person);
greetFunction();

```

# What will this code log and why?

```
const user = {
  name: 'Bob',
  logName: function() {
    setTimeout(() => {
      console.log(this.name);
    }, 100);
  }
};
user.logName();
```

**Output** 

```
Bob  -> after 100ms
```

**Reason** 

* *this* inside the *logName* refers to user as function is called using *user.logName()* 
* Inside *logName* method a arrow function is used, which inherits *this* from its lexical scope.


# You have a User object with a method that logs a welcome message. There's also a "Login" button in your HTML. You want the welcome method to be called when the button is clicked, and the message should use the User object's data.

```
const User = {
  name: 'Alice',
  welcome: function() {
    console.log(`Welcome, ${this.name}!`);
  }
}
```


**Code** 

```
const loginButton = document.getElementById("loginButton")
loginButton.addEventListener("click" , ()=>{
    User.welcome()
})

```

# What will be logged to the console? Explain!

```
let animal = 'Cat';
function showAnimal() {
  let animal = 'Dog';
  console.log(animal);
}
showAnimal();
console.log(animal);
```

**Result** 

```
Dog
Cat
```

**Reason** 

* *animal* variable declared inside *showAnimal* (i.e; local variable) will be resolved first during variable lookup within its scope. 


# What will this code output? Why?

```
function test() {
  console.log(a);
  console.log(foo());
  var a = 1;
  function foo() {
    return 2;
  }
}
test();
```

**Output** 

```
undefined 
2
```

**Reason** 

* *foo* function and variable decleration are hoisted at the top of scope.
* Conceptual code after hoisting 

```
function test() {

  var a; 
  function foo() {
    return 2;
  }
  console.log(a);     // a -> undefined
  console.log(foo());  // 2

 a = 1; 
}
test();

```

# Explain the output of this for loop.

```
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 10);
}
```

**Output** 

```
5 
5 
5 
5 
5
```

**Reason** 

* *var* is function-scoped, meaning same *i* variable is shared across all iteration.
* *setTimeout* is an async function, so by the time *setTimeout* execute, for loop finished executing. Meaning variable *i* becomes 5. 



# What will the following code log to the console on the last two lines? Explain why the count variable is not reset.

```
function createCounter() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
  };
}
const counter = createCounter();
counter();
counter();
```

**Output** 

```
1
2
```

**Reason** 

* Because of closure, *count* variable is being remembered. so, *count* is not begin reset.

# What does this code log? Explain!

```
const myObject = {
  id: 'my-object',
  createLogger: function() {
    return () => {
      console.log(`Logger for ${this.id}`);
    };
  }
};
const logger = myObject.createLogger();
logger();
```

**Output** 

```
Logger for my-object
```

**Reason** 

* When *createLogger* function is evoked, *this* refers to *myObject* inside *createLogger* function.
* Inside *createLogger*, an arrow function is returned. Arrow functions inherit *this* from the lexical scope in which they were defined — in this case, the *createLogger* function
* Because *this* in *createLogger* refers to myObject, the arrow function also captures and uses that same *this*.



# Write a function makeAdder(x) that takes a number x and returns a new function. The new function should take a number y and return the sum x + y. Use a closure to achieve this.

**Code** 

```
const makeAdder =(x)=> (y) => x+y;
const add = makeAdder(5)
console.log(add(2))
```

**Result** 

```
7
```

# Implement a parent Animal and a child Dog relationship. 

**Using Constructor/prototype pattern** 

```
function Animal(){}    // Creating Animal class

Animal.prototype.eat = function(){  // adding eat method
  console.log("Eat Eat")
}

function Dog(){}    //creating Dog class 

Dog.prototype = Object.create(Animal.prototype)  // inherit from Animal

Dog.prototype.bark = function(){    // adding bark method 
  console.log("Bark Bark")
}

const dog = new Dog()
dog.bark()
dog.eat()
```

**Using ES6**

```
class Animal{
  eat(){
    console.log("Eat Eat")
  }
}

class Dog extends Animal{ 
  bark(){
    console.log("Bark Bark")
  }
}

const dog = new Dog()
dog.eat()
dog.bark()
```


