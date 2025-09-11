import { Router } from "express";
import reportController from "../../../controllers/reportController";

const router = Router()

router.get("/revenue", reportController.revenue)
router.get("/popular", reportController.popular)
router.get("/monthly", reportController.monthly)

export default router