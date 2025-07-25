// Task 2 : Data Types and Type Coercion


// Create variables of various types (string, number, boolean, object, undefined, null, symbol, BigInt).

// const myStr = "This is string variable"
// const myNumber = 3
// const myBool = false

// const myObject = {
//     name: "Ram",
//     age: 20,
//     roll: 1
// }

// let myUndefined
// const myNull = null
// const mySymbol = Symbol("GT")
// const myBigInt = 23948723985732987432n


// console.log(typeof (myStr))
// console.log(typeof (myNumber))
// console.log(typeof (myBool))
// console.log(typeof (myObject))
// console.log(typeof (myUndefined))
// console.log(typeof (myNull))
// console.log(typeof (mySymbol))
// console.log(typeof (myBigInt))

// Add a variable with a value of NaN and show how JavaScript handles it when combined with other data types.

// const myNaN = NaN

// console.log("Hello" + myNaN)
// console.log(1 + myNaN)
// console.log(false + myNaN)
// console.log(null + myNaN)
// console.log(mySymbol + myNaN)
// console.log(myObject + myNaN)

// Perform type coercion on various combinations of variables (string + number, boolean + number, etc.) and observe the results.

console.log(`String + Number -> '5' + 3\nValue : ${"5" + 3} Type : ${typeof ("5" + 3)}\n`)
console.log(`Boolean + Number -> flase + 3\nValue : ${false + 3} Type : ${typeof (false + 3)}\n`)
console.log(`Boolean + String -> false + "Gritfeat"\nValue : ${false + "Gritfeat"} Type : ${typeof (false + "Gritfeat")}\n`)
console.log(`Null + Number -> null + 3\nValue : ${null + 3} Type : ${typeof (null + 3)}\n`)
console.log(`Undefined + Number -> undefined + 3\nValue : ${undefined + 3} Type : ${typeof (undefined + 3)}\n`)
