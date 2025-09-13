import { Router } from "express";
import userRouter from "./user"
import productRouter from "./product"
import orderRouter from "./order"
import reportRouter from "./report"
import authRouter from "./auth"

const router = Router()

router.use("/user", userRouter)
router.use("/product", productRouter)
router.use("/order", orderRouter)
router.use("/report", reportRouter)
router.use("/auth", authRouter)

export default router