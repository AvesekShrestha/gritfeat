import reviewService from "../services/reviewService"
import { Request, Response } from "express"

const reviewController = {
    async add(req: Request, res: Response) {
        try {
            const { id } = req.params
            const payload = req.body
            const updatedProduct = await reviewService.add(id, payload)
            return res.status(201).json(updatedProduct)
        } catch (error: any) {
            return res.status(500).json({ message: error.message })
        }
    }


}

export default reviewController