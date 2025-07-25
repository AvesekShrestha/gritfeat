// Task 5 : Loops with Break, Continue, and Nested Loops

// Write a program that prints the numbers 1 to 20. Skip numbers that are divisible by 3 using continue and stop when it encounters a number that is divisible by 5 using break.

for (let i = 1; i <= 20; i++) {
    if (i % 3 == 0) continue
    if (i % 5 == 0) break
    console.log(i)
}


//  Create a program that calculates the sum of even numbers between 1 and 100 using a for loop.

let sum = 0
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) sum += i
}

console.log(`Sum of even number from 1-100 : ${sum}`)


const pattern = () => {
    for (let i = 1; i <= 5; i++) {
        let row = ''
        for (let j = i; j >= 1; j--) row += j + " "
        console.log(row)
    }

}

pattern()