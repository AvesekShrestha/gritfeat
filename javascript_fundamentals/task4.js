// Create a program that uses a switch statement to return a message based on a given day number (1 = Sunday, 2 = Monday, etc.).
// Enhance the program by considering invalid input (i.e., numbers outside the range 1-7). Return a default message for invalid input.

const calender = (day) => {
    switch (day) {
        case 1:
            console.log("Sunday")
            break
        case 2:
            console.log("Monday")
            break
        case 3:
            console.log("Tuesday")
            break
        case 4:
            console.log("Wednesday")
            break
        case 5:
            console.log("Thursday")
            break

        case 6:
            console.log("Friday")
            break
        case 7:
            console.log("Saturday")
            break
        default: console.log("Invalid Input")
    }
}

calender(3)
calender(23)