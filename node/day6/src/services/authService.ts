import authRepository from "../repositories/authRepository";
import { IUser, LoginPayload, RegisterPayload } from "../types/user";

const authService = {
    register(payload: RegisterPayload) {
        try {
            if (!payload) throw new Error("Payload required")
            return authRepository.register(payload)
        } catch (error) {
            throw error
        }
    },
    login(payload: LoginPayload) {
        try {
            if (!payload) throw new Error("Payload required")
            return authRepository.login(payload)
        } catch (error) {
            throw error
        }
    }
}

export default authService