import dotenv from "dotenv"
dotenv.config()


const rawPort = process.env.PORT
const port = rawPort && !isNaN(parseInt(rawPort)) ? parseInt(rawPort) : 8000

const secret : string | undefined = process.env.JWT_SECRET

export {port, secret}
