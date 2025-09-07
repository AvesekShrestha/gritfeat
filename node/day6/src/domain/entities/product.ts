import { IReview, IProduct } from "../types/product";
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema<IProduct>({
    name: {
        type: String,
        required: true,
        minLength: [5, "Length should be at least 5"]
    },
    category: String,
    brand: String,
    price: Number,
    stock: Number,
    features: [String],
    reviews: [new mongoose.Schema<IReview>({
        user: String,
        rating: Number,
        comment: String
    })]
})

const Product = mongoose.model<IProduct>("product", ProductSchema)
1
export default Product
