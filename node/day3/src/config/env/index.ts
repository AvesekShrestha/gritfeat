import dotenv from "dotenv"
dotenv.config()

const rawPort = process.env.PORT

const port = rawPort && (isNaN(parseInt(rawPort)) ? 8000 : parseInt(rawPort))

export { port }

