import mongoose from "mongoose";
import { IPost } from "../types/post";

const postSchema = new mongoose.Schema<IPost>({
    title : {
        type : String,
        required : true
    },
    body : {
        type : String,
        required : true
    },
    createdAt : {
        type : Date,
        default : new Date()
    },
    updatedAt : {
        type : Date,
        default : new Date()
    },
    author : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        required : true
    },
    updatedBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        required : true
    }
})


const Post = mongoose.model<IPost>("post", postSchema)

export default Post



