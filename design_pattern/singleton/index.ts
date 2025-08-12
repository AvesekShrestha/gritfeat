import DatabaseConnection from "./database.ts";

const connection1: DatabaseConnection = DatabaseConnection.getInstance()
const connection2: DatabaseConnection = DatabaseConnection.getInstance()

console.log(`connection1 === connection2 : ${connection1 === connection2}`)
connection1.connect()

