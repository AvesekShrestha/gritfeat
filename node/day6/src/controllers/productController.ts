import { Request, Response } from "express"
import productService from "../services/productService"
import IProductQuery from "../types/productQuery"

const productController = {

    /**
     * @swagger
     * components:
     *   securitySchemes:
     *     BearerAuth:
     *       type: http
     *         scheme: bearer
     *         bearerFormat: JWT
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
     * tags:
     *  name: Product
     *  description: Product management APIs
     */


    /** 
     * @swagger
     * /product:
     *  post:
     *      summary : Create a new product
     *      tags: [Product]
     *      security:
     *        - BearerAuth: []
     *      requestBody:
     *          required: true
     *          content:
     *              application/json:
     *                  schema: 
     *                      $ref : "#/components/schemas/Product"
     *      responses:
     *          201:
     *              description: Product created
     *              content: 
     *                  application/json:
     *                      schema:
     *                          $ref : "#/components/schemas/Product"
     *          500:
     *              description: Internal Server Error
     *  
     */

    async create(req: Request, res: Response) {
        try {
            const body = req.body
            const product = await productService.create(body)
            return res.status(201).json(product)

        } catch (error: any) {
            return res.status(500).json({ message: error.message })
        }
    },

    /**
     * @swagger
     * /product:
     *  get:
     *      summary: Returns the list of products
     *      tags : [Product]
     *      responses:
     *          200:
     *              description: List of products
     *              content:
     *                  application/json:
     *                      schema:
     *                          type: array
     *                          items:
     *                              $ref: "#/components/schemas/Product"
     *          500:
     *              description: Internal Server Error
     */

    async getAll(req: Request, res: Response) {
        try {
            const { category, minPrice, maxPrice, maxStock, hasReviews, page = "1", limit = "5" } = req.query

            const filters: IProductQuery = {}

            if (category) filters.category = String(category);
            if (minPrice) filters.minPrice = Number(minPrice);
            if (maxPrice) filters.maxPrice = Number(maxPrice);
            if (maxStock) filters.maxStock = Number(maxStock);
            if (hasReviews) filters.hasReviews = Boolean(hasReviews)

            filters.page = Number(page);
            filters.limit = Number(limit);

            const products = await productService.getAll(filters)
            return res.status(200).json(products)

        } catch (error: any) {
            return res.status(500).json({ message: error.message })
        }
    },


    /**
     * @swagger
     * /product/{id}:
     *  get:
     *      summary: Return specific product
     *      tags : [Product]
     *      security:
     *        - BearerAuth: []
     *      parameters:
     *          - in: path
     *            name: id
     *            schema:
     *              type: string
     *            required: true
     *            description: Product Id
     *      responses:
     *          200:
     *              description: Specific product
     *              content: 
     *                  application/json:
     *                      schema:
     *                          $ref: "#/components/schemas/Product"
     *          500: 
     *              description: Internal Server Error
     */

    async getById(req: Request, res: Response) {
        try {
            const { id } = req.params
            const product = await productService.getById(id)
            return res.status(200).json(product)
        } catch (error: any) {
            return res.status(500).json({ message: error.message })
        }
    },

    /**
       * @swagger
       * /product/{id}:
       *   put:
       *     summary: Updates product
       *     tags: [Product]
       *     security:
       *       - BearerAuth: []
       *     parameters:
       *       - in: path
       *         name: id
       *         schema:
       *           type: string
       *         required: true
       *         description: Product Id
       *     requestBody:
       *       required: true
       *       content:
       *         application/json:
       *           schema:
       *             $ref: "#/components/schemas/Product"
       *     responses:
       *       200:
       *         description: Product successfully updated
       *         content:
       *           application/json:
       *             schema:
       *               $ref: "#/components/schemas/Product"
       *       500:
       *         description: Internal Server Error
       */


    async update(req: Request, res: Response) {
        try {
            const { id } = req.params
            const payload = req.body

            const updatedProduct = await productService.update(id, payload)
            return res.status(200).json(updatedProduct)
        } catch (error: any) {
            return res.status(500).json({ message: error.message })
        }
    },

    /**
     * @swagger
     * /product/{id}:
     *  delete:
     *      summary: Deletes specific product
     *      tags : [Product]
     *      security:
     *        - BearerAuth: []
     *      parameters: 
     *          - in: path
     *            name: id
     *            schema:
     *              type: string
     *            required: true
     *            description: Product Id
     *      responses:
     *          200:
     *              description: Deletes a user
     *              content:
     *                  application/json:
     *                      schema:
     *                          type: object
     *                          properties:
     *                              message:
     *                                  type: string
     *                                  example: "Product deleted successfully"
     * 
     *          500:
     *              description: Internal Server Error
     */

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params
            const result = await productService.delete(id)
            return res.status(200).json({ message: result })
        } catch (error: any) {
            return res.status(500).json({ message: error.message })
        }
    },
}


export default productController
