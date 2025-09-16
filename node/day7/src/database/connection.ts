import mongoose from "mongoose";

const connectDb = async()=>{
    try{
        
        const connection = mongoose.connection
        connection.on("connected" , ()=> console.log("Databaes Connected"))
        connection.on("error", (error : any)=> console.log(`Error : ${error.any}`))

        await mongoose.connect("mongodb://localhost:27017/blog")
        
    }catch(error: any){
        console.log(`Error : ${error.message}`)
    }
}

export default connectDb
