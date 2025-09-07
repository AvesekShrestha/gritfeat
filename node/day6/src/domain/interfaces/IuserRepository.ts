import ISearchQuery from "../types/searchQuery";
import { IUser } from "../types/user";

interface IUserRepository {
    create(payload: IUser): Promise<IUser>
    getById(id : string) : Promise<IUser>
    getAll(query: ISearchQuery): Promise<IUser[]>
    update(id : string , user : Partial<IUser>) : Promise<IUser>,
    delete(id : string) : Promise<string>
}

export default IUserRepository