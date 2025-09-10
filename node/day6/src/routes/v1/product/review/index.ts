import { Router } from "express";
import reviewController from "../../../../controllers/reviewController";

const router = Router({ mergeParams: true });


router.post("/", reviewController.add)

export default router