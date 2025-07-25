// Write a program that checks if a given number is positive, negative, or zero, and also checks whether it is divisible by both 2 and 3.

const check = (number) => {

    if (number < 0) console.log("Number is negative")
    else if (number > 0) console.log("Number is positive")
    else console.logl("Number is zero")

    if (number % 2 == 0 && number % 3 == 0) console.log("Number is divisible by both 2 and 3")
    else console.log("Number is not divisible by both 2 and 3")
}

check(-2)
check(4)
check(6)


// Add a condition to check if the number is a multiple of any of the numbers in a given array (e.g., checkMultiples(10, [2, 3, 5])).

const checkMultiples = (number, numberList) => {
    let multiples = []
    for (let i = 0; i < numberList.length; i++) {
        if (number % numberList[i] == 0) multiples.push(numberList[i])
    }

    console.log(multiples)
}

checkMultiples(10, [2, 3, 5])
