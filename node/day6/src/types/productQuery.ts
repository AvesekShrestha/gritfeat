interface IProductQuery {
    category?: string
    minPrice?: number
    maxPrice?: number
    maxStock?: number
    hasReviews?: boolean
    page?: number,
    limit?: number
}

export default IProductQuery