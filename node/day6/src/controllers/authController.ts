import { Request, Response } from "express"
import authService from "../services/authService"

const authController = {

    /**
     * @swagger
     * tags:
     *  name: Auth
     *  description: Authentiaction management APIs
     */

    /**
     * @swagger
     * /auth/register:
     *   post:
     *     summary: register a new user
     *     tags: [Auth]
     *     requestBody:
     *       required: true
     *       content: 
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               username:
     *                 type: string
     *                 example: jhon
     *               email:
     *                 type: string
     *                 example: jhon@example.com
     *               password:
     *                 type: string
     *                 example: jhon123
     *     responses:
     *       201: 
     *         description: new user created
     *         content: 
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 _id:
     *                   type: string
     *                   example: 64f0c0e1d5f1a23c45b67890
     *                 username:
     *                   type: string
     *                   example: jhon
     *                 email:
     *                   type: string
     *                   example: jhon@example.com
     *                 password:
     *                   type: string
     *                   example: jhon123 
     *       500:
     *         description: internal server error
     */

    async register(req: Request, res: Response) {
        try {
            const payload = req.body
            const result = await authService.register(payload)
            return res.status(200).json(result)
        } catch (error: any) {
            return res.status(500).json({ message: error.message })
        }
    },

    /**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: jhon@example.com
 *               password:
 *                 type: string
 *                 example: jhon123
 *     responses:
 *       200: 
 *         description: User logged in successfully
 *         content: 
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoxNTE2MjQyNjIyfQ.signature_string_here"
 *       500:
 *         description: Internal server error
 */


    async login(req: Request, res: Response) {
        try {
            const payload = req.body
            const result = await authService.login(payload)
            return res.status(200).json(result)
        } catch (error: any) {
            return res.status(500).json({ message: error.message })
        }
    },





}

export default authController