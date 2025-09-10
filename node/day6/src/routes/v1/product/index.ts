import { Router } from "express";
import productController from "../../../controllers/productController";
import reviewRouter from "./review"

const router = Router()

router.post("/", productController.create)
router.get("/", productController.getAll)
router.get("/:id", productController.getById)
router.put("/:id", productController.update)
router.delete("/:id", productController.delete)


router.use("/:id/review", reviewRouter)


export default router