import { secret } from "../config/constant"
import jwt from "jsonwebtoken"
import { AuthorizationError, InternalError } from "./errors"
import { IUserAuthorize } from "../types/authorize"

const generateToken = (payload : IUserAuthorize) => {
    try {
        if (!secret) throw new Error("secret for jwt is not set at .env file")
        const token = jwt.sign(payload, secret, { expiresIn: "24h" })
        if (!token) throw new Error("Token cannot be generated")

        return token

    } catch (error: any) {
        throw InternalError(error.message)
    }
}

const verfiyToken = (token: string) => {
    try {

        if (!secret) throw new Error("secret for jwt is not set at .env file")
        const user = jwt.verify(token, secret)
        return user

    } catch (error: any) {
        throw AuthorizationError(error.message)
    }
}

export { verfiyToken, generateToken }

