// Task 7: Function Declaration, Parameters, and Return Values

// Write a function that accepts an array of numbers and returns the sum of all the numbers greater than 10.

const sum = (array) => {
    let sum = 0
    array.forEach(element => {
        if (element > 10) sum += element
    });
    return sum
}

console.log(sum([1, 2, 30, 40, 50]))


// Challenge: Extend the function to return the average of the numbers greater than 10.

const average = (array) => {
    let sum = 0
    let count = 0
    array.forEach(element => {
        if (element > 10) {
            sum += element
            count++
        }
    });

    return sum / count
}

console.log(average([10, 20, 30, 40]))


// Task 8: Function with Multiple Parameters & Default Parameters

// Write a function that accepts two parameters: a string (greeting) and a number (times). The function should print the greeting multiple times (based on the value of times). If no times parameter is provided, it defaults to 3.

const greeting = (message, times = 3) => {
    for (let i = 1; i <= times; i++) console.log(message)
}

greeting("Hello")



// Bonus: Add a validation to check if times is a positive integer.

const greetingValidation = (message, times = 3) => {
    if (times < 0) return
    for (let i = 1; i <= times; i++) console.log(message)
}

greetingValidation("Hello", -1)


// Task 9 : Function Expressions and Arrow Functions

// Write a traditional function expression that accepts two arguments and returns their product.

function product(num1, num2) {
    return num1 * num2
}

console.log(product(2, 3))

// Convert this function into an arrow function

const productArrow = (num1, num2) => num1 * num2
console.log(productArrow(4, 5))


// Bonus: Modify the arrow function to also log the result before returning it.

const productArrow2 = (num1, num2) => {
    result = num1 * num2
    console.log(result)
    return result

}
console.log(productArrow2(4, 5))


// Task 10: Function Scope and Closure with Examples

// Write a function outer that returns another function inner. The inner function should add a specific number (from the outer function) to an argument passed to it.

const outer = (x) => inner = (y) => x + y

const myAddition = outer(5)
console.log(myAddition(3))

// Challenge: Demonstrate how closures allow the inner function to remember the value of the outer function’s variable even after outer has finished execution.

const closureDemo = () => {
    const secret = "outer secret"
    return inner = () => console.log(secret)
}

const closure = closureDemo()
closure()



