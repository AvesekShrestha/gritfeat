import { Request, Response } from "express" 
import authService from "../services/authService"

const authController = {
    async register(req : Request , res : Response){
        try{
            const payload = req.body
            const user = await authService.register(payload)
            
            return res.status(201).json(user)

        }catch(error : any){
            return res.status(error.statusCode).json({message : error.message})
        }
    },
    async login(req : Request , res : Response){
        try{
            const payload = req.body
            const token = await authService.login(payload)

            return res.status(200).json(token)
        }catch(error : any){
            return res.status(error.statusCode).json({message : error.message})
        }
    }
}

export default authController

