import express from "express"
import {Request, Response} from "express"
import connectDb from "./database/connection"
import { port } from "./config/constant"
import router from "./routes"

const app = express()
app.use(express.json())

connectDb()

app.use("/api", router)
app.get("/health" , (req: Request , res: Response)=>{
    res.send("Hello world")
})

app.listen(port, ()=>{
    console.log(`Server listening at port : ${port}`)
})
