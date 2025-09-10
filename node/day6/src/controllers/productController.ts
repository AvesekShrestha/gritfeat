import { Request, Response } from "express"
import productService from "../services/productService"
import IProductQuery from "../types/productQuery"

const productController = {
    async create(req: Request, res: Response) {
        try {
            const body = req.body
            const product = await productService.create(body)
            return res.status(201).json(product)

        } catch (error: any) {
            return res.status(500).json({ message: error.message })
        }
    },
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
    async getById(req: Request, res: Response) {
        try {
            const { id } = req.params
            const product = await productService.getById(id)
            return res.status(200).json(product)
        } catch (error: any) {
            return res.status(500).json({ message: error.message })
        }
    },
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
