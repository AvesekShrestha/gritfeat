import { IOrder } from "../types/order";

interface IOrderRespository {
    create(payload: IOrder): Promise<IOrder>
    getById(id: string): Promise<IOrder[]>
    update(id: string, payload: { "status": string }): Promise<IOrder>
    
}

export default IOrderRespository