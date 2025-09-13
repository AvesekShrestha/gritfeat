import reviewService from "../services/reviewService"
import { Request, Response } from "express"

const reviewController = {

    /**
     * @swagger
     * components:
     *   schemas:
     *     Product:
     *       type: object
     *       properties:
     *         name:
     *           type: string
     *           description: Product name
     *           minLength: 5
     *           example: "iPhone 15 Pro"
     *         category:
     *           type: string
     *           description: Product category
     *           example: "Smartphone"
     *         brand:
     *           type: string
     *           description: Brand of the product
     *           example: "Iphone"
     *         price:
     *           type: number
     *           description: Price of the product
     *           example: 1499.99
     *         stock:
     *           type: number
     *           description: Available stock count
     *           example: 50
     *         features:
     *           type: array
     *           items:
     *             type: string
     *           description: List of product features
     *           example: ["5G", "OLED Display", "Triple Camera"]
     *         reviews:
     *           type: array
     *           description: List of user reviews
     *           items:
     *             type: object
     *             properties:
     *               user:
     *                 type: string
     *                 description: Username of the reviewer
     *                 example: "john_doe"
     *               rating:
     *                 type: number
     *                 description: Rating given by the user
     *                 example: 5
     *               comment:
     *                 type: string
     *                 description: Review comment
     *                 example: "Amazing phone, worth the price!"
     *       required:
     *         - name
     *         - price
     *         - stock
     */



    /**
     * @swagger
     * /product/{id}/review:
     *  post:
     *      summary: adds review to specific product
     *      tags: [Product]
     *      security:
     *          - BearerAuth: []
     *      parameters: 
     *          - in: path
     *            name: id
     *            schema:
     *              type: string
     *            required: true
     *            description: Product Id
     *      requestBody:
     *          required: true
     *          content:
     *              application/json:
     *                  schema:
     *                      type: object
     *                      properties:
     *                          user:
     *                              type: string
     *                              example: Jhon
     *                          rating:
     *                              type: number
     *                              example: 3.4
     *                          comment: 
     *                              type: string
     *                              example : Good Product
     *                      
     *      responses: 
     *          201:
     *              description: Adds new comment
     *              content: 
     *                  application/json:
     *                      schema:
     *                          $ref: "#/components/schemas/Product" 
     * 
     *          500:
     *              description: Internal Server Error
     *                  
     *          
     */

    async add(req: Request, res: Response) {
        try {
            const { id } = req.params
            const payload = req.body
            const updatedProduct = await reviewService.add(id, payload)
            return res.status(201).json(updatedProduct)
        } catch (error: any) {
            return res.status(500).json({ message: error.message })
        }
    },


    /**
     * @swagger
     * /product/{id}/review/{reviewId}:
     *  delete:
     *      summary: Deletes review
     *      tags: [Product]
     *      security:
     *          - BearerAuth: []
     *      parameters:
     *          - in: path
     *            name: id
     *            schema: 
     *              type: string
     *            required: true
     *            description: Product Id
     * 
     *          - in: path
     *            name: reviewId
     *            schema:
     *              type: string
     *            required: true
     *            description: Review Id
     *      responses: 
     *          200:
     *              description: Deletes review from product
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: "#/components/schemas/Product"
     *              
     */

    async delete(req: Request, res: Response) {
        try {
            const { id, reviewId } = req.params
            const updatedProduct = await reviewService.delete(id, reviewId)
            return res.status(200).json(updatedProduct)
        } catch (error: any) {
            return res.status(500).json({ message: error.message })
        }
    }


}

export default reviewController