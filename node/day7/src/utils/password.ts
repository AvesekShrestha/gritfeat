import argon2 from "argon2"
import { InternalError } from "./errors"


const hashPassword = async (rawPassword: string): Promise<string> => {
    try {
        const hashedPassword = await argon2.hash(rawPassword)
        return hashedPassword
    } catch (error: any) {
        throw InternalError(error.message)
    }
}


const verifyPassword = async (rawPassword: string, hashedPassword: string): Promise<boolean> => {
    try {
        const verified = await argon2.verify(hashedPassword, rawPassword)
        return verified
    } catch (error: any) {
        throw InternalError(error.message)
    }
}

export { hashPassword, verifyPassword }

