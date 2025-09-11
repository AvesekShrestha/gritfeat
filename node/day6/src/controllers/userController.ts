import { Request, Response } from "express";
import userService from "../services/userService";
import ISearchQuery from "../types/searchQuery";

const userController = {
    async create(req: Request, res: Response) {
        try {
            const body = req.body;
            if (!body) return res.status(400).json({ message: "No body passed" })
            const user = await userService.create(body)
            return res.status(200).json(user)

        } catch (error: any) {
            return res.status(500).json({ message: error.message })
        }
    },
    async getAll(req: Request, res: Response) {
        try {
            const {
                country,
                minFollowers,
                interest,
                profileTheme,
                subscriptionTier,
                page = "1",
                limit = "10"
            } = req.query;

            const filters: ISearchQuery = {}

            if (country) filters.country = String(country);
            if (minFollowers) filters.minFollowers = Number(minFollowers);
            if (interest) filters.interest = String(interest);
            if (profileTheme) filters.profileTheme = String(profileTheme);
            if (subscriptionTier) filters.subscriptionTier = String(subscriptionTier);

            filters.page = Number(page);
            filters.limit = Number(limit);

            const users = await userService.getAll(filters)
            return res.status(200).json(users)


        } catch (error: any) {
            return res.status(500).json({ message: error.message })
        }
    },
    async getById(req: Request, res: Response) {
        try {
            const id = req.params.id as string

            if (!id) return res.status(400).json({ message: "Id required" })
            const user = await userService.getById(id)
            return res.status(200).json(user)
        } catch (error: any) {
            return res.status(500).json({ message: error.message })
        }
    },
    async update(req: Request, res: Response) {
        try {
            const { id } = req.params
            const payload = req.body

            const updatedUser = await userService.update(id, payload)
            return res.status(200).json(updatedUser)
        } catch (error: any) {
            return res.status(500).json({ message: error.message })
        }
    },
    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params
            const result = await userService.delete(id)
            return res.status(200).json({ message: result })
        } catch (error: any) {
            return res.status(500).json({ message: error.message })
        }
    }
}

export default userController
