import express from "express"
import { Request, Response } from "express"
import port from "./infrastrucutre/config"
import connectDb from "./infrastrucutre/database/connect"
import router from "./presentation/routes"

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

