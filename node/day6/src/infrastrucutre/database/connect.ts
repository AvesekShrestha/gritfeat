import mongoose from "mongoose";

const connectDb = async () => {

    const connection = mongoose.connection

    connection.on("connected", () => {
        console.log("Database Connected!")
    })

    connection.on("error", () => {
        console.log("Error on connecting database.")
    })

    try {
        await mongoose.connect("mongodb://localhost:27017/test?replicaSet=rs0&directConnection=true")
    } catch (error: any) {
        console.log(error.message)
    }

}

export default connectDb
