import User from "../models/user"
import { ILoginPayload, IRegisterPayload } from "../types/user"
import { AuthenticationError, ConflictError, NotFoundError } from "../utils/errors"
import { hashPassword, verifyPassword } from "../utils/password"
import { generateToken } from "../utils/token"

const authRepository = {

    async register(payload: IRegisterPayload) {
        try {
            const userExists = await User.findOne({ email: payload.email })
            if (userExists) throw ConflictError("User with email already exists")
                
            const hashedPassword = await hashPassword(payload.password)
            const user = new User({
                ...payload,
                createdAt: new Date(),
                updatedAt: new Date(),
                password: hashedPassword,
            })

            const newUser = await user.save()
            return newUser
        } catch (error) {
            throw error
        }
    },

    async login(payload: ILoginPayload) {
        try {
            const user = await User.findOne({ email: payload.email })
            if (!user) throw NotFoundError("No such user exists")

            const verified = await verifyPassword(payload.password, user.password)
            if (!verified) throw AuthenticationError("Password doesnot match")

                 
            const token = generateToken({ _id: user._id.toString(), role: user.role })
            return { token }

        } catch (error) {
            throw error
        }
    }
}

export default authRepository
