import Post from "../models/post";
import { IUserAuthorize } from "../types/authorize";
import { IPost, IPostPayload } from "../types/post";
import { AuthorizationError, NotFoundError } from "../utils/errors";

const postRepository = {
    async create(payload: IPostPayload, userId: string) {
        try {
            const post = new Post({
                ...payload,
                author: userId,
                createdAt: new Date(),
                updatedAt: new Date(),
                updatedBy: userId
            })

            const newPost = await post.save()
            return newPost
        } catch (error) {
            throw error
        }
    },
    async getAll() {
        try {
            const posts: IPost[] = await Post.find()
            if (!posts) throw NotFoundError("No posts exists")

            return posts
        } catch (error) {
            throw error
        }
    },
    async getById(postId: string) {
        try {
            const post = await Post.findById(postId)
            if (!post) throw NotFoundError("No such post exists")
            return post
        } catch (error) {
            throw error
        }
    },
    async update(user: IUserAuthorize, payload: IPostPayload, postId: string) {
        try {
            const post = await Post.findById(postId)
            if (!post) throw NotFoundError("No such post exists")

            if (user.role == "blogger" && post.author.toString() !== user._id) throw AuthorizationError("You don't have access to update")

            const updatedPost = await Post.findByIdAndUpdate(postId, { $set: {...payload , updatedBy : user._id} }, { new: true })
            return updatedPost

        } catch (error) {
            throw error
        }
    },

    async delete(postId : string, user : IUserAuthorize){
        try{
            const post = await Post.findById(postId)
            if(!post) throw NotFoundError("No such post exists")

            if(user.role == "blogger" && post.author.toString() !== user._id) throw AuthorizationError("You don't have access to delete")

            await Post.deleteOne({_id : postId})
            return {message : `Deleted : Post - ${postId}`}
        }catch(error){
            throw error
        }
    }
}

export default postRepository
