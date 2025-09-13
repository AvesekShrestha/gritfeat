import { Request, Response, NextFunction } from "express"
import { verifyToken } from "../utils/token"


const checkAuthorization = (req: Request, res: Response, next: NextFunction) => {

    try {

        const excludedPaths: string[] = [
            "/v1/auth/login",
            "/v1/auth/register",
            "/v1/product"
        ]

        if (excludedPaths.includes(req.path)) return next();


        const header = req.headers.authorization
        if (!header || !header.startsWith("Bearer ")) throw new Error("Authorization heading missing")

        const token = header.split(" ")[1]
        verifyToken(token)

        next()

    } catch (error) {
        throw error
    }


}

export default checkAuthorization

