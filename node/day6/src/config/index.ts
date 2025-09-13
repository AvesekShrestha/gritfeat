import dotenv from "dotenv"
dotenv.config()

const rawPort = process.env.PORT
const port = rawPort && !isNaN(parseInt(rawPort)) ? parseInt(rawPort) : 8000

const secret = process.env.JWT_SECRET
if (!secret) throw new Error("JWT secret not defined in .env file")
const jwt_secret: string = secret


export { port, jwt_secret }
