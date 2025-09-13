import { Request, Response } from "express"
import authService from "../services/authService"

const authController = {

    async register(req: Request, res: Response) {
        try {
            const payload = req.body
            const result = await authService.register(payload)
            return res.status(200).json(result)
        } catch (error: any) {
            return res.status(500).json({ message: error.message })
        }
    },

    async login(req: Request, res: Response) {
        try {
            const payload = req.body
            const result = await authService.login(payload)
            return res.status(200).json(result)
        } catch (error: any) {
            return res.status(500).json({ message: error.message })
        }
    },




}

export default authController