import { RequestHandler, Router } from "express";
import postController from "../../../controllers/postController";
import authorize from "../../../middlewares/authorize";

const router = Router()

router.post("/", authorize, postController.create) 
router.get("/", postController.getAll)
router.get("/:postId", postController.getById)
router.put("/:postId",authorize as RequestHandler , postController.update)
router.delete("/:postId", authorize, postController.delete)

export default router

