import { User } from "../models"
import { LoginPayload, RegisterPayload } from "../types/user"
import { hash, verify } from "../utils/password"
import { generateToken } from "../utils/token"

const authRepository = {
    async register(payload: RegisterPayload) {
        try {
            const user = new User({
                ...payload,
                password: await hash(payload.password),
            })
            const newUser = await user.save()
            return newUser
        } catch (error) {
            throw error
        }
    },
    async login(payload: LoginPayload) {
        try {
            const user = await User.findOne({ email: payload.email })
            if (!user) throw new Error("No such user exists")

            const verified = await verify(payload.password, user.password);
            if (!verified) throw new Error("Password doesnot match")

            const token = generateToken({ userId: user._id })
            if (!token) throw new Error("Error on generating token")

            user.last_login = new Date()
            await user.save()

            return { token }

        } catch (error) {
            throw error
        }
    }
}

export default authRepository