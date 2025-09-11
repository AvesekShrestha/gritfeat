interface IReview {
    user: string
    rating: number
    comment: string
}

interface IProduct {
    name: string,
    category: string,
    brand: string,
    price: number,
    stock: number,
    features: string[],
    reviews: IReview[]
}

export { IReview, IProduct }
