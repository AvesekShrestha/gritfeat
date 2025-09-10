import { IOrder , IOrderItem } from "../types/order";
import mongoose from "mongoose";


const OrderSchema = new mongoose.Schema<IOrder>({
    customer_id :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User" 
    },
    order_date : Date,
    items : [new mongoose.Schema<IOrderItem>({
        product_id : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Product"
        },
        quantity : Number,
        unit_price : Number
    })],
    status : {
        type : String,
        enum : ["completed" , "pending", "cancelled"]
    },
    total_amount : Number
})

const Order = mongoose.model<IOrder>("order" , OrderSchema)

export default Order