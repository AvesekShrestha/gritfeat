import { IProduct, IReview } from "../types/product";
import IProductQuery from "../types/productQuery";

interface IProductRepository {
    create(payload: IProduct): Promise<IProduct>
    getAll(query: IProductQuery): Promise<IProduct[]>
    getById(id: string): Promise<IProduct>
    update(id: string, payload: Partial<IProduct>): Promise<IProduct>
    delete(id: string): Promise<string>
    addReview(id: string, payload: IReview): Promise<IProduct>


}

export default IProductRepository