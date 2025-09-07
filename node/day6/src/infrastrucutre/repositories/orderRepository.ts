import { IOrder } from "../../domain/types/order";
import { Order, Product, User } from "../../domain/entities";
import mongoose from "mongoose";
import { IOrderItem } from "../../domain/types/order";
import IOrderRespository from "../../domain/interfaces/IorderRepository";


const orderRepository: IOrderRespository = {

    async create(payload: IOrder) {
        const session = await mongoose.startSession();
        session.startTransaction();

        try {
            const customer = await User.findById(payload.customer_id).session(session);
            if (!customer) throw new Error("Invalid customer Id");

            let total_amount = 0;
            const orderItems: IOrderItem[] = [];

            for (const item of payload.items) {
                const product = await Product.findById(item.product_id).session(session);
                if (!product) throw new Error("Invalid product Id");

                const quantity = Number(item.quantity);
                if (isNaN(quantity) || quantity <= 0) throw new Error(`Invalid quantity for product ${item.product_id}`);

                const currentStock = Number(product.stock);
                if (isNaN(currentStock)) throw new Error(`Invalid stock for product ${product._id}`);

                if (currentStock < quantity) throw new Error(`Insufficient stock for product ${product.name}`);

                product.stock = currentStock - quantity;
                await product.save({ session });

                total_amount += quantity * product.price;

                orderItems.push({
                    product_id: product._id,
                    quantity: quantity,
                    unit_price: product.price
                });
            }

            const order = new Order({
                customer_id: customer._id,
                order_date: new Date(),
                status: "pending",
                items: orderItems,
                total_amount: total_amount
            })

            await order.save({ session });

            await session.commitTransaction();
            session.endSession();

            return order;
        } catch (error) {
            await session.abortTransaction();
            session.endSession();
            throw error;
        }
    },
    async getById(id: string) {
        try {
            const orders = await Order.find({ customer_id: id })
            if (!orders) throw new Error("No such orders")
            return orders
        } catch (error) {
            throw error
        }
    },
    async update(id: string, payload: { "status": string }) {

        const session = await mongoose.startSession()
        session.startTransaction()

        try {
            const updatedOrder = await Order.findByIdAndUpdate(id, { $set: payload }, { new: true }).session(session)
            if (!updatedOrder) throw new Error("No such order exists")

            if (payload.status === "cancelled") {
                for (const item of updatedOrder.items) {
                    const product = await Product.findById(item.product_id).session(session);
                    if (!product) throw new Error("No such product exists");

                    product.stock = (Number(product.stock) || 0) + Number(item.quantity);
                    await product.save({ session });
                }
            }

            await session.commitTransaction()
            session.endSession()

            return updatedOrder

        } catch (error) {
            await session.abortTransaction()
            session.endSession()
            throw error
        }
    }

}

export default orderRepository

