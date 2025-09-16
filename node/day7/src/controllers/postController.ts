import { Request, Response } from "express"
import postService from "../services/postService"

const postController = {

    async create(req: Request, res: Response) {
       try {
            const payload = req.body
            const post = await postService.create(payload, req.user._id)
            return res.status(201).json(post)
        } catch (error: any) {
            return res.status(error.statusCode).json({ message: error.message })
        }
    },
    async getAll(req: Request, res: Response) {
        try {
            const posts = await postService.getAll()
            return res.status(200).json(posts)
        } catch (error: any) {
            return res.status(error.statusCode).json({ message: error.message })
        }
    },
    async getById(req: Request, res: Response) {
        try {
            const {postId} = req.params
            const post = await postService.getById(postId)
            return res.status(200).json(post)
        } catch (error: any) {
            return res.status(error.statusCode).json({ message: error.message })
        }
    },
    async update(req: Request, res: Response) {
        try {
            const payload = req.body
            const {postId} = req.params
            const updatedPost = await postService.update(payload , postId ,req.user)
            return res.status(200).json(updatedPost)
        } catch (error: any) {
            return res.status(error.statusCode).json({ message: error.message })
        }
    },
    async delete(req: Request, res: Response) {
        try {
            
            const {postId} = req.params

            const result = await postService.delete(req.user, postId)
            return res.status(200).json(result)
        } catch (error: any) {
            return res.status(error.statusCode).json({ message: error.message })
        }
    }


}

export default postController
