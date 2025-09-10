import userRepository from "../repositories/userRepository"
import ISearchQuery from "../types/searchQuery"
import { IUser } from "../types/user"

const userService = {
    create(payload: IUser) {
        try {
            if (!payload) throw new Error("Payload required")
            return userRepository.create(payload)
        } catch (error) {
            throw error
        }
    },
    getAll(query: ISearchQuery) {
        try {
            return userRepository.getAll(query)
        } catch (error) {
            throw error
        }
    },
    getById(id: string) {
        try {
            return userRepository.getById(id)
        } catch (error) {
            throw error
        }
    },
    update(id: string, payload: Partial<IUser>) {
        try {
            if (!id || !payload) throw new Error("Both id and payload required")
            return userRepository.update(id, payload)
        } catch (error) {
            throw error
        }
    },
    delete(id: string) {
        try {
            if (!id) throw new Error("Id required")
            return userRepository.delete(id)
        } catch (error) {
            throw error
        }
    }
}

export default userService
