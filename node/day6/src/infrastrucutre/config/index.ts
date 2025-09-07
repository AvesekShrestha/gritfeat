import dotenv from "dotenv"
dotenv.config()

const rawPort = process.env.PORT

const port = rawPort && !isNaN(parseInt(rawPort)) ? parseInt(rawPort) : 8000

export default port