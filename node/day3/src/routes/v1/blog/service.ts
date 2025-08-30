import { IBlogPayload } from "./types";
import blogRepository from "./repository";

const blogService = {

    create(payload: IBlogPayload) {
        try {
            if (!payload) throw new Error("Payload required")
            if (typeof (payload.content) !== "string" || typeof (payload.title) !== "string") throw new Error("Title and Content must be of type string")

            return blogRepository.create(payload)
        } catch (error) {
            throw error
        }
    },

    getAll() {
        try {
            return blogRepository.getAll()
        } catch (error) {
            throw error
        }
    },
    getById(id: string) {
        try {
            if (typeof (id) !== "string") throw new Error("type of id must be string")
            return blogRepository.getById(id)
        } catch (error) {
            throw error
        }
    },
    deleteById(id: string) {

        try {
            if (!id) throw new Error("Id required")
            if (typeof (id) !== "string") throw new Error("Type of sting should be string")
            return blogRepository.deleteById(id)
        } catch (error) {
            throw error
        }
    },
    updateById(id: string, payload: Partial<IBlogPayload>) {
        try {
            if (!id) throw new Error("Id required")
            if (typeof (id) !== "string") throw new Error("Type of sting should be string")

            return blogRepository.updateById(id, payload)
        } catch (error) {
            throw error
        }
    }
}

export default blogService