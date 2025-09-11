import { Request, Response } from "express"
import reportService from "../services/reportService"

const reportController = {

    async revenue(req: Request, res: Response) {
        try {
            const result = await reportService.revenue()
            return res.status(200).json(result)
        } catch (error: any) {
            return res.status(500).json({ message: error.message })
        }
    },
    async popular(req: Request, res: Response) {
        try {
            const result = await reportService.popular()
            return res.status(200).json(result)
        } catch (error: any) {
            return res.status(500).json({ message: error.message })
        }
    },
    async monthly(req: Request, res: Response) {
        try {
            const result = await reportService.monthly()
            return res.status(200).json(result)
        } catch (error: any) {
            return res.status(500).json({ message: error.message })
        }
    }
}


export default reportController