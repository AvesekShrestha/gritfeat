import { Router } from "express";
import orderController from "../../../controllers/orderController";

const router = Router()

router.post("/", orderController.create)
router.get("/:id", orderController.getById)
router.patch("/:id", orderController.update)


export default router