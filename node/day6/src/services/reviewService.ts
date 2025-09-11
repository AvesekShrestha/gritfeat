import reviewRepository from "../repositories/reviewRepository"
import { IReview } from "../types/product"

const reviewService = {

    add(id: string, payload: IReview) {
        try {
            if (!id || !payload) throw new Error("Both id and payload required")
            return reviewRepository.add(id, payload)
        } catch (error) {
            throw error
        }
    },
    delete(id: string, reviewId : string) {
        try {
            if (!id || !reviewId) throw new Error("Both id and payload required")
            return reviewRepository.delete(id, reviewId)
        } catch (error) {
            throw error
        }
    }
}

export default reviewService