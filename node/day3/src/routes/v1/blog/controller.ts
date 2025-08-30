import blogService from "./service";
import { IBlog, IBlogPayload } from "./types";
import { Request, Response } from "express";

const blogController = {
    create(req: Request<null, null, IBlogPayload>, res: Response) {
        try {
            const body = req.body
            const result = blogService.create(body)
            res.status(201).json(result)
        } catch (error) {
            res.status(500).json({ message: "Error occured while creating blog" })
        }
    },
    getAll(req: Request, res: Response) {
        try {
            const result = blogService.getAll()
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json({ message: "Error occured while fetching all blogs" })
        }
    },
    getById(req: Request<{ id: string }>, res: Response) {
        try {
            const { id } = req.params
            const result = blogService.getById(id)
            res.status(200).json(result)

        } catch (error) {
            res.status(500).json({ message: "Error occured wihle fetching blog by id" })
        }
    },
    deleteById(req: Request<{ id: string }>, res: Response) {
        try {
            const { id } = req.params
            const result = blogService.deleteById(id)
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json({ message: "Error occured while deleting" })
        }
    },
    updateById(req: Request<{ id: string }, null, Partial<IBlogPayload>>, res: Response) {
        try {
            const body = req.body
            const { id } = req.params
            const result = blogService.updateById(id, body)

            res.status(200).json(result)
        } catch (error) {
            res.status(500).json({ message: "Error occured while updating" })
        }
    }
}

export default blogController