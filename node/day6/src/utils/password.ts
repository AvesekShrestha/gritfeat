import argon from "argon2"

const hash = async (password: string) => {
    try {
        const hashedPassword = await argon.hash(password)
        return hashedPassword
    } catch (error) {
        throw error
    }
}

const verify = async (rawPassword: string, hashedPassword: string) => {
    try {
        const verified = await argon.verify(hashedPassword, rawPassword)
        return verified
    } catch (error) {
        throw error
    }
}

export { hash, verify }