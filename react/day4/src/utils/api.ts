import axios from "axios"
import type IProduct from "../data/types"

export const fetchProducts = async (): Promise<IProduct[]> => {
    const res = await axios.get("https://fakestoreapi.com/products")
    return res.data
}

export const updateProduct = async (product: IProduct) => {
    const res = await axios.put(`https://fakestoreapi.com/products/${product.id}`, product)
    return res.data
}

export const deleteProduct = async (id: number) => {
    const res = await axios.delete(`https://fakestoreapi.com/products/${id}`)
    return res.data
}

export const addProduct = async (product: IProduct) => {
    const res = await axios.post("https://fakestoreapi.com/products", product)
    return res.data
}
