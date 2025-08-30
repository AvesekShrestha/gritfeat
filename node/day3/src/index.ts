import express from "express"
import { port } from "./config/env"
import router from "./routes"

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("hello")
})

app.use("/api", router)

app.listen(port, () => {
    console.log(`Listening at port ${port}`)
})
