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
    }
}

export default reviewService