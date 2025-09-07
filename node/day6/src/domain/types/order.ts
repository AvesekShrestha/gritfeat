
import mongoose from "mongoose";


interface IOrderItem {
    product_id: mongoose.Types.ObjectId,
    quantity: number,
    unit_price?: number
}

interface IOrder {
    customer_id: mongoose.Types.ObjectId,
    order_date: Date,
    items: [IOrderItem],
    status: "completed" | "pending"
    total_amount: number
}

export { IOrder, IOrderItem }
