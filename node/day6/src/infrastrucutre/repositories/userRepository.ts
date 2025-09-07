import { IUserRepository } from "../../domain/interfaces";
import { User } from "../../domain/entities";
import ISearchQuery from "../../domain/types/searchQuery";
import { IUser } from "../../domain/types/user";

const userRepository: IUserRepository = {
    async create(payload: IUser) {
        try {
            const user = new User({
                ...payload,
                last_login: new Date(),

            })
            const newUser = await user.save()
            return newUser
        } catch (error) {
            throw error
        }
    },
    async getAll(query: ISearchQuery) {

        const page = query.page || 1
        const limit = query.limit || 5
        const skip = (page - 1) * limit

        const filters: any = {};

        if (query.country) filters.country = query.country;
        if (query.minFollowers !== undefined) filters.followers = { $gte: query.minFollowers };
        if (query.interest) filters.interests = query.interest;
        if (query.profileTheme) filters["profile.theme"] = query.profileTheme;
        if (query.subscriptionTier) filters["subscription.tier"] = query.subscriptionTier;


        const users = await User.find(filters).skip(skip).limit(limit)
        return users
    },

    async getById(id: string) {
        try {
            const user = await User.findById(id)

            if (!user) throw new Error("User doesnot exists")
            return user
        } catch (error) {
            throw error
        }
    },
    async update(id: string, payload: Partial<IUser>) {

        try {
            const updatedUser = await User.findByIdAndUpdate(
                id,
                { $set: payload },
                { new: true }
            )
            if (!updatedUser) throw new Error("No such user exists")
            return updatedUser
        } catch (error) {
            throw error
        }
    },
    async delete(id: string) {
        try {
            const result = await User.deleteOne({ _id: id })
            if (result.deletedCount === 0) {
                throw new Error("No such user exists");
            }
            return "Deleted successfully"
        } catch (error) {
            throw error
        }
    }

}


export default userRepository
