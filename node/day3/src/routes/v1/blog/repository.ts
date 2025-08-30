import { v4 as uuidv4 } from "uuid"
import { IBlog, IBlogPayload } from "./types"


let blogs: IBlog[] = []

const blogRepository = {

    create(payload: IBlogPayload): IBlog {
        if (!payload) throw new Error("no payload")

        const newBlog = {
            id: uuidv4(),
            ...payload,
            createdAt: new Date().toISOString()
        }
        blogs.push(newBlog)
        return newBlog
    },

    getAll(): IBlog[] {
        return blogs
    },

    getById(id: string): IBlog {

        const blog = blogs.find(blog => blog.id === id)
        if (!blog) throw new Error("No such blog found")

        return blog
    },

    deleteById(id: string): IBlog {

        const blog = this.getById(id)
        blogs = blogs.filter(b => b.id !== id)

        return blog
    },

    updateById(id: string, payload: Partial<IBlogPayload>): IBlog {

        const blog = this.getById(id)
        const updatedBlog = {
            ...blog,
            ...payload
        }

        blogs = blogs.map(blog => blog.id === id ? updatedBlog : blog)
        return updatedBlog
    }

}

export default blogRepository