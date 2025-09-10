import express from "express"
import { Request, Response } from "express"
import port from "./config"
import connectDb from "./database/connect"
import router from "./routes"

const app = express()

connectDb()
app.use(express.json())
app.use("/api", router)

app.get("/health", (req: Request, res: Response) => {

    res.status(200).json({ message: "Hello" })
})


app.listen(port, () => {
    console.log(`Server listining at port : ${port}`)
})

