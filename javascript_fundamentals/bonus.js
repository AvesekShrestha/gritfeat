// Task 11: Factorial Function with Recursion (Edge Case Handling)

// Write a function that calculates the factorial of a number using recursion.

const factorial = (number) => {
    if (number == 0 || number == 1) return 1;
    else return number * factorial(number - 1)
}

console.log(factorial(5))


// Challenge: Add error handling for invalid inputs (like negative numbers or non-numeric values).

const factorial2 = (number) => {
    if (typeof (number != "number")) throw new Error("Invaild number")
    if (number == 0 || number == 1) return 1;
    else return number * factorial(number - 1)
}

// console.log(factorial2("Hello"))

// Task 12: Higher-Order Functions (without Callbacks)

// Write a higher-order function multiplyAll that accepts an array of numbers and a multiplier. The function should return a new array where each element is multiplied by the given multiplier.

const multiplyAll = (numbers, multiplier) => {
    return numbers.map(number => {
        return number * multiplier
    })
}

console.log(multiplyAll([1, 2, 3], 2))



// Bonus: Write a higher-order function sumAll that accepts an array of numbers. The function should return the sum of all the numbers in the array.

const sumAll = (numbers) => {
    let sum = 0
    numbers.map(number => {
        sum += number
    })
    return sum

}

console.log(sumAll([1, 2, 3, 4, 5]))