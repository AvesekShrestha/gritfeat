import { IOrder, IOrderItem } from "../../domain/types/order";
import orderRepository from "../../infrastrucutre/repositories/orderRepository";

const orderService = {
    create(payload: IOrder) {
        try {
            if (!payload) throw new Error("Payload required")
            return orderRepository.create(payload)
        } catch (error) {
            throw error
        }
    },
    getById(id: string) {
        try {
            if (!id) throw new Error("Id required")
            return orderRepository.getById(id)
        } catch (error) {
            throw error
        }
    },
    update(id: string, payload: { "status": string }) {
        try {
            if (!id || !payload) throw new Error("Both id and payload required")
            return orderRepository.update(id, payload)
        } catch (error) {
            throw error
        }
    }
}

export default orderService