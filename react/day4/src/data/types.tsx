export interface IRating {
    rate: number
    count: number
}

export default interface IProduct {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: IRating
}
