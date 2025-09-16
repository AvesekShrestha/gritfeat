import z from "zod"

const role = z.enum(["admin" , "blogger"])

const ZodUserSchema = z.object({
    firstname : z.string().min(1, "Firstname is required"),
    lastname : z.string().min(1, "Lastname is requied"),
    email : z.email(),
    password : z.string().min(8 , "Length of password must exceeds 8 character"),
    role : role,
    createdAt : z.date(),
    updatedAt : z.date()
})

const ZodRegisterSchema = ZodUserSchema.pick({
    firstname : true,
    lastname : true,
    email : true,
    password : true
})

const ZodLoginSchema = ZodUserSchema.pick({
    email : true,
    password : true
})

interface IUser{
    firstname : string
    lastname : string
    email :string
    password : string
    role : "blogger" | "admin"
    createdAt : Date,
    updatedAt : Date
}

interface IRegisterPayload{
    firstname : string
    lastname : string
    email : string
    password : string
}

interface ILoginPayload{
    email : string
    password : string
}

export {IUser , IRegisterPayload , ILoginPayload, ZodRegisterSchema , ZodLoginSchema}


