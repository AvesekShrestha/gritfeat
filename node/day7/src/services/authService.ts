import { ZodError } from "zod";
import authRepository from "../repositories/authRepository";
import { ILoginPayload, IRegisterPayload, ZodLoginSchema, ZodRegisterSchema } from "../types/user";
import { ValidationError } from "../utils/errors";

const authService = {
    register(payload : IRegisterPayload){
        try{
           ZodRegisterSchema.parse(payload)
           return authRepository.register(payload)
        }catch(error){
            if(error instanceof ZodError) throw ValidationError(error)
            throw error
        }
    },
    login(payload : ILoginPayload){
        try{
            ZodLoginSchema.parse(payload)
            return authRepository.login(payload)
        }catch(error){
            if(error instanceof ZodError) throw ValidationError(error)
            throw error
        }
    }
} 

export default authService

