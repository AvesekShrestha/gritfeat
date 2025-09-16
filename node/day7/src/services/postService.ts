import { ZodError } from "zod";
import { IPostPayload, ZodPostSchema } from "../types/post";
import { AuthenticationError, InternalError, ValidationError } from "../utils/errors";
import postRepository from "../repositories/postRepository";
import { IUserAuthorize } from "../types/authorize";

const postService = {

    create(payload: IPostPayload, userId : string) {
        try {
            ZodPostSchema.parse(payload)
            const post = postRepository.create(payload , userId)
            return post
        } catch (error) {
            if (error instanceof ZodError) throw ValidationError(error)
            throw error
        }
    },
    getAll() {
        try {
            return postRepository.getAll()
        } catch (error) {
            throw error
        }
    },
    getById(postId: string) {
        try {
            if (!postId) throw InternalError("Post Id is requied")
            return postRepository.getById(postId)

        } catch (error) {
            throw error
        }
    },
    update(payload: IPostPayload, postId: string, user: IUserAuthorize ) {
        try {
            if(!postId) throw AuthenticationError("postid required")
            ZodPostSchema.parse(payload)

            const updatedPost = postRepository.update(user , payload , postId)
            return updatedPost
        } catch (error) {
            if (error instanceof ZodError) throw ValidationError(error)
            throw error
        }
    },
    delete(user: IUserAuthorize, postId: string) {
        try {
           if(!postId) throw InternalError("Post Id required") 
               return postRepository.delete(postId , user)
        } catch (error) {
            if (error instanceof ZodError) throw ValidationError(error)
            throw error
        }
    },
}

export default postService
