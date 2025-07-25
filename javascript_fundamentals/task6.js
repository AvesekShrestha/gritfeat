// Task 6: Nested Loops for Multi-Dimensional Arrays


// Write a program to print a 3x3 multiplication table (from 1 to 3) using nested for loops. Output the table in a neat grid-like format.

for (let i = 1; i <= 3; i++) {
    row = ""
    for (let j = 1; j <= 3; j++) {
        row += i * j + " "
    }
    console.log(row)
}


// Bonus: Modify the program to print a multiplication table for numbers 1 to 12.

console.log("\nMultiplication table of 1 to 12\n")


for (let i = 1; i <= 12; i++) {
    row = ""
    for (let j = 1; j <= 12; j++) {
        row += i * j + " "
    }
    console.log(row)
}

