import { Request, Response } from "express"
import orderService from "../services/orderSerivce";

const orderController = {

    /**
     * @swagger
     * components:
     *   securitySchemes:
     *     BearerAuth:
     *       type: http
     *       scheme: bearer
     *       bearerFormat: JWT
     *   schemas:
     *     Order:
     *       type: object
     *       properties:
     *         _id:
     *           type: string
     *           description: Auto-generated order ID
     *           example: 650d1f2a6c8b3a1f9d4a1234
     *         customer_id:
     *           type: string
     *           description: Reference to the User who placed the order
     *           example: 650d1f2a6c8b3a1f9d4a5678
     *         order_date:
     *           type: string
     *           format: date-time
     *           description: Date when the order was placed
     *           example: 2025-09-13T14:30:00.000Z
     *         items:
     *           type: array
     *           description: List of items in the order
     *           items:
     *             type: object
     *             properties:
     *               product_id:
     *                 type: string
     *                 description: Reference to the Product
     *                 example: 650d1f2a6c8b3a1f9d4a9876
     *               quantity:
     *                 type: number
     *                 description: Quantity of the product ordered
     *                 example: 2
     *               unit_price:
     *                 type: number
     *                 description: Price per unit of the product
     *                 example: 499.99
     *         status:
     *           type: string
     *           enum: [completed, pending, cancelled]
     *           description: Current status of the order
     *           example: pending
     *         total_amount:
     *           type: number
     *           description: Total price of the order
     *           example: 999.98
     *       required:
     *         - customer_id
     *         - items
     *         - status
     *         - total_amount
     */


    /**
     * @swagger
     * tags: 
     *  name: Order
     *  description: Order management APIs
     */


    /**
     * @swagger
     * /order:
     *  post:
     *      summary: Creates a new order
     *      tags: [Order]
     *      security:
     *          - BearerAuth: []
     *      requestBody:
     *          required: true
     *          content:
     *              application/json:
     *                  schema:
     *                      $ref: "#/components/schemas/Order"
     *      responses:
     *          201:
     *              description: Order Created
     *              content: 
     *                  application/json:
     *                      schema:
     *                          $ref : "#/components/schemas/Order"
     *          500:
     *              description: Internal Server Error
     */


    async create(req: Request, res: Response) {
        try {
            const payload = req.body;
            const order = await orderService.create(payload)
            return res.status(201).json(order)
        } catch (error: any) {
            return res.status(500).json({ message: error.message })
        }
    },

    /**
     * @swagger
     * /order/{id}:
     *   get:
     *     summary: List of orders related to the customer id
     *     tags: [Order]
     *     security:
     *         - BearerAuth: []
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: string
     *         required: true
     *         description: Customer Id
     *     responses: 
     *       200: 
     *         description: Returns list of orders related to specific user
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: "#/components/schemas/Order"
     *       500:
     *         description: Internal Server Error
     */


    async getById(req: Request, res: Response) {
        try {
            const { id } = req.params
            const orders = await orderService.getById(id);
            return res.status(200).json(orders)
        } catch (error: any) {
            return res.status(500).json({ message: error.message })
        }
    },

    /**
     * @swagger
     * /order/{id}:
     *  patch:
     *      summary: Updates order status
     *      tags: [Order]
     *      security:
     *          - BearerAuth: []
     *      parameters:
     *          - in: path
     *            name: id
     *            schema: 
     *              type: string
     *            required: true
     *            description: OrderId
     *      requestBody:
     *          required: true
     *          content:
     *              application/json:
     *                  schema:
     *                      type: object
     *                      properties:
     *                          status:
     *                              type: string
     *                              example: completed
     *      responses: 
     *          200: 
     *              description: Returns updated order
     *              content: 
     *                  application/json:
     *                      schema: 
     *                          $ref : "#/components/schemas/Order"
     *              
     */

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