import { Router } from "express";
import blogController from "./controller";

const router = Router()

router.get("/", blogController.getAll)
router.get("/:id", blogController.getById)
router.post("/", blogController.create)
router.delete("/:id", blogController.deleteById)
router.patch("/:id", blogController.updateById)

export default router