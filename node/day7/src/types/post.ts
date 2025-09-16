import z from "zod"
import { Types } from "mongoose"

const ZodPostSchema = z.object({
    title : z.string().min(1, "Title is required)"),
    body : z.string().min(1 , "Body is required"),
})

interface IPostPayload{
    title : string
    body : string
}

interface IPost{
    title : string
    body : string
    author : Types.ObjectId
    createdAt : Date
    updatedAt : Date
    updatedBy : Types.ObjectId
}



export {ZodPostSchema , IPost, IPostPayload}
