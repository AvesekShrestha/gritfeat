import { AuthorizationError, InternalError } from "../utils/errors"
import { Request , Response , NextFunction } from "express"
import { verfiyToken } from "../utils/token"
import { IUserAuthorize } from "../types/authorize"
import jwt from "jsonwebtoken";


declare global {
  namespace Express {
    interface Request {
      user: IUserAuthorize;
    }
  }
}

const authorize = (req : Request , res : Response , next : NextFunction)=>{
    try{
        const header = req.headers.authorization

        if(!header || !header.startsWith("Bearer ")) return res.status(401).json({message : "Unauthorized : No token provided"})

        const token = header.split(" ")[1]

        try{
           const user = verfiyToken(token) as IUserAuthorize
           req.user = user
           next()
        }catch(error : any){
            throw AuthorizationError(error.message)
        }
        
    }catch(error){
        if (error instanceof jwt.TokenExpiredError) throw AuthorizationError("Token Expired")
            if(error instanceof jwt.JsonWebTokenError) throw AuthorizationError("Invalid token")
        throw InternalError("Error while authorizating")
    }
}

export default authorize

