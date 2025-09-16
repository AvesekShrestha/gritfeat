import mongoose from "mongoose"
import { IUser } from "../types/user"

const userSchema = new mongoose.Schema<IUser>({

    firstname :  {
        type : String,
        required: true,
    },
    lastname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    },
    role : {
        type: String,
        default : "admin",
        required : true
    },
    createdAt : {
        type : Date,
        default : new Date()
    },
    updatedAt : {
        type : Date,
        default : new Date()
     }
    
})

const User = mongoose.model<IUser>("user", userSchema)

export default User

