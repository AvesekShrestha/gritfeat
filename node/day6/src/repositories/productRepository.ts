import { Product } from "../models"
import { IProduct, IReview } from "../types/product"
import IProductQuery from "../types/productQuery"

const productRepository = {
    async create(payload: IProduct) {
        try {
            const product = new Product({ ...payload })
            const newProduct = await product.save()
            return newProduct

        } catch (error) {
            throw error
        }
    },
    async getAll(query: IProductQuery) {
        try {
            const filter: any = {};

            const page = Number(query.page) || 1;
            const limit = Number(query.limit) || 5;
            const skip = (page - 1) * limit;

            if (query.category) filter.category = query.category;

            if (query.minPrice || query.maxPrice) {
                filter.price = {};
                if (query.minPrice) filter.price.$gte = query.minPrice;
                if (query.maxPrice) filter.price.$lte = query.maxPrice;
            }

            if (query.maxStock) {
                filter.stock = { $lte: query.maxStock };
            }

            if (query.hasReviews != null) {
                if (query.hasReviews === true) {
                    filter.reviews = { $exists: true, $not: { $size: 0 } };
                } else if (query.hasReviews === false) {
                    filter.reviews = { $size: 0 };
                }
            }

            const products: IProduct[] = await Product.find(filter)
                .skip(skip)
                .limit(limit);


            return products;
        } catch (error) {
            throw error;
        }
    },
    async getById(id: string) {
        try {
            const product = await Product.findOne({ _id: id })
            if (!product) throw new Error("No such product exists")
            return product
        } catch (error) {
            throw error
        }
    },
    async update(id: string, payload: Partial<IProduct>) {
        try {
            const updatedProduct = await Product.findByIdAndUpdate(
                id,
                { $set: payload },
                { new: true }
            )

            if (!updatedProduct) throw new Error("No such product exists")
            return updatedProduct
        } catch (error) {
            throw error
        }
    },
    async delete(id: string) {
        try {
            await Product.deleteOne({ _id: id })
            return "Product deleted"
        } catch (error) {
            throw error
        }
    },

    
}

export default productRepository

