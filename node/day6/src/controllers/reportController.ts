import { Request, Response } from "express"
import reportService from "../services/reportService"

const reportController = {

    /** 
     * @swagger
     * tags:
     *  name: Report
     *  description: Report management APIs
     */

    /**
     * @swagger
     * /report/revenue:
     *   get:
     *     summary: Returns revenue of a month
     *     tags: [Report]
     *     security:
     *         - BearerAuth: []
     *     responses: 
     *       200:
     *         description: Total revenue of a month
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 type: object
     *                 properties:
     *                   total_revenue: 
     *                     type: number
     *                     example: 2999.98
     *       500: 
     *         description: Internal Server Error
     */


    async revenue(req: Request, res: Response) {
        try {
            const result = await reportService.revenue()
            return res.status(200).json(result)
        } catch (error: any) {
            return res.status(500).json({ message: error.message })
        }
    },

    /**
     * @swagger
     * /report/popular:
     *  get:
     *      summary: Returns the popular product
     *      tags: [Report]
     *      security:
     *          - BearerAuth: []
     *      responses: 
     *          200:
     *              description: returns popular product
     *              content:
     *                  application/json:
     *                      schema:
     *                          type: array
     *                          items:
     *                              type: object
     *                              properties:
     *                                  _id:
     *                                      type: string
     *                                      example: "62170c5af3d27e919f30b100"
     *                                  count:
     *                                      type: number
     *                                      example: 2
     *          500:
     *              description: Internal Server Error
     *                          
     */

    async popular(req: Request, res: Response) {
        try {
            const result = await reportService.popular()
            return res.status(200).json(result)
        } catch (error: any) {
            return res.status(500).json({ message: error.message })
        }
    },

    /**
     * @swagger
     * /report/monthly:
     *   get:
     *     summary: Returns monthly sales report
     *     tags: [Report]
     *     security:
     *         - BearerAuth: []
     *     responses:
     *       200:
     *         description: Returns monthly sales report
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 type: object
     *                 properties:
     *                   _id:
     *                     type: object
     *                     properties: 
     *                       year:
     *                         type: number
     *                         example: 2025
     *                       month:
     *                         type: number
     *                         example: 4
     *                   totalSales:
     *                     type: number
     *                     example: 2323.3
     *       500:
     *         description: Internal Server Error
     */


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