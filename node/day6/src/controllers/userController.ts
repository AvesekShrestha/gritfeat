import { Request, Response } from "express";
import userService from "../services/userService";
import ISearchQuery from "../types/searchQuery";

const userController = {

    /**
     * @swagger
     * components:
     *   securitySchemes:
     *     BearerAuth:
     *       type: http
     *       scheme: bearer
     *       bearerFormat: JWT
     *   schemas:
     *     User:
     *       type: object
     *       required:
     *         - username
     *         - email
     *         - password
     *       properties:
     *         id:
     *           type: string
     *           description: Auto-generated MongoDB ObjectId
     *         username:
     *           type: string
     *           description: Name of user
     *         email:
     *           type: string
     *           description: Unique user email
     *         password:
     *           type: string
     *           description: User password
     *         age:
     *           type: number
     *         country:
     *           type: string
     *         last_login:
     *           type: string
     *           format: date-time
     *         followers:
     *           type: number
     *         interests:
     *           type: array
     *           items:
     *             type: string
     *         profile:
     *           type: object
     *           properties:
     *             theme:
     *               type: string
     *               description: Profile theme
     *             bio:
     *               type: string
     *               description: Short bio of the user
     *           example:
     *             theme: dark
     *             bio: Hello, I am John
     *         device:
     *           type: array
     *           items:
     *             type: object
     *             properties:
     *               type:
     *                 type: string
     *                 description: Device type (mobile, desktop, etc.)
     *               os:
     *                 type: string
     *                 description: Operating system
     *               last_seen:
     *                 type: string
     *                 format: date-time
     *                 description: Last seen timestamp
     *             example:
     *               type: mobile
     *               os: iOS
     *               last_seen: "2025-09-13T12:00:00Z"
     *         subscription:
     *           type: object
     *           properties:
     *             tier:
     *               type: string
     *               description: Subscription tier
     *             start_date:
     *               type: string
     *               format: date-time
     *               description: Subscription start date
     *           example:
     *             tier: Gold
     *             start_date: "2025-01-01T00:00:00Z"
     *       example:
     *         id: "64f0c0e1d5f1a23c45b67890"
     *         username: JohnDoe
     *         email: john@example.com
     *         password: secret
     *         age: 30
     *         country: USA
     *         last_login: "2025-09-13T07:00:00Z"
     *         followers: 150
     *         interests: ["coding", "music"]
     *         profile:
     *           theme: dark
     *           bio: Hello, I am John
     *         device:
     *           - type: mobile
     *             os: iOS
     *             last_seen: "2025-09-13T07:00:00Z"
     *           - type: desktop
     *             os: Windows
     *             last_seen: "2025-09-12T18:00:00Z"
     *         subscription:
     *           tier: Gold
     *           start_date: "2025-01-01T00:00:00Z"
     */


    /**
     * @swagger 
     * tags:
     *  name: User
     *  description: User management APIs
     */


    /**
     * @swagger
     * /user:
     *   get:
     *     summary: Get all users
     *     tags:
     *       - User
     *     security:
     *       - BearerAuth: []
     *     responses:
     *       200:
     *         description: List of users
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/User'
     */


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

    /**
     * @swagger
     * /user/{id}:
     *   get:
     *     summary: Get specific user by Id
     *     tags:
     *       - User
     *     security:
     *       - BearerAuth: []
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: string
     *         required: true
     *         description: User Id
     *     responses:
     *       200:
     *         description: Returns specific user with Id
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/User'
     *       500:
     *         description: Internal server error
     */


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

    /**
     * @swagger
     * /user/{id}:
     *   put:
     *     summary: Update user details except username and email
     *     tags: [User]
     *     security: 
     *       - BearerAuth: []
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: string
     *         required: true
     *         description: User Id
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: "#/components/schemas/User"
     *     responses:
     *       200:
     *         description: User details successfully updated
     *         content:
     *           application/json:
     *             schema:
     *               $ref: "#/components/schemas/User"
     *       500:
     *         description: Internal Error
     */


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

    /**
      * @swagger
      * /user/{id}:
      *   delete:
      *     summary: Deletes a specific user
      *     tags: [User]
      *     security:
      *       - BearerAuth: []
      *     parameters:
      *       - in: path
      *         name: id
      *         schema:
      *           type: string
      *         required: true
      *         description: User Id
      *     responses:
      *       200:
      *         description: User successfully deleted
      *         content:
      *             application/json:
      *                 schema:
      *                     type: object
      *                     properties: 
      *                         message:
      *                             type: string
      *                             example: "User successfully deleted" 
      *       500:
      *         description: Internal server error
      */


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
