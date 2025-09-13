import { Request, Response, NextFunction } from "express"
import { verifyToken } from "../utils/token"


const checkAuthorization = (req: Request, res: Response, next: NextFunction) => {

    try {

        const publicEndpoints: { method: string; path: string }[] = [
            { method: "POST", path: "/v1/auth/login" },
            { method: "POST", path: "/v1/auth/register" },
            { method: "GET", path: "/v1/product" }
        ]

        const isPublic = publicEndpoints.some(
            ep => ep.method === req.method && ep.path === req.path
        )

        if (isPublic) return next()



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

