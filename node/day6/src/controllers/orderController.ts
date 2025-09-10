import { Request, Response } from "express"
import orderService from "../services/orderSerivce";

const orderController = {
    async create(req: Request, res: Response) {
        try {
            const payload = req.body;
            const order = await orderService.create(payload)
            return res.status(201).json(order)
        } catch (error: any) {
            return res.status(500).json({ message: error.message })
        }
    },
    async getById(req: Request, res: Response) {
        try {
            const { id } = req.params
            const orders = await orderService.getById(id);
            return res.status(200).json(orders)
        } catch (error: any) {
            return res.status(500).json({ message: error.message })
        }
    },
    async update(req: Request, res: Response) {
        try {
            const { id } = req.params
            const payload = req.body

            const updatedOrder = await orderService.update(id, payload)
            return res.status(200).json(updatedOrder)
        } catch (error: any) {
            return res.status(500).json({ message: error.message })
        }
    }
}

export default orderController