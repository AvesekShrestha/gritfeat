import { Product } from "../models"
import { IReview } from "../types/product"

const reviewRepository = {

    async add(id: string, payload: IReview) {
        try {
            const updatedProduct = await Product.findByIdAndUpdate(
                id,
                { $push: { reviews: payload } },
                { new: true }
            )
            if (!updatedProduct) throw new Error("No such products exists")
            return updatedProduct
        } catch (error) {
            throw error
        }
    },
    async delete(id: string, reviewId: string) {
        try {

            const updatedProduct = await Product.findByIdAndUpdate(
                id,
                { $pull: { reviews: { _id: reviewId } } },
                { new: true }
            )

            if (!updatedProduct) throw new Error("No such product exists")
            return updatedProduct

        } catch (error) {
            throw error
        }
    }

}

export default reviewRepository