import { IProduct, IReview } from "../../domain/types/product";
import IProductQuery from "../../domain/types/productQuery";
import productRepository from "../../infrastrucutre/repositories/productRepository";

const productService = {
    create(payload: IProduct) {
        try {
            if (!payload) throw new Error("payload required")
            return productRepository.create(payload)
        } catch (error) {
            throw error
        }
    },
    getAll(query: IProductQuery) {
        try {
            if (!query) throw new Error("Query required")
            return productRepository.getAll(query)
        } catch (error) {
            throw error
        }
    },
    getById(id: string) {
        try {
            if (!id) throw new Error("Id required")
            return productRepository.getById(id)
        } catch (error) {
            throw error
        }
    },
    update(id: string, payload: Partial<IProduct>) {
        try {
            if (!id || !payload) throw new Error("Both id and payload required")
            return productRepository.update(id, payload)
        } catch (error) {
            throw error
        }
    },
    delete(id: string) {
        try {
            if (!id) throw new Error("Id required")
            return productRepository.delete(id)
        } catch (error) {
            throw error
        }
    },
    addReview(id: string, payload: IReview) {
        try {
            if (!id || !payload) throw new Error("Both id and payload required")
            return productRepository.addReview(id, payload)
        } catch (error) {
            throw error
        }
    }
}

export default productService
