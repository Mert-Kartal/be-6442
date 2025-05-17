import { Router } from "express";
import {
  CreatePostController,
  GetPostsController,
  GetPostController,
  UpdatePostController,
  DeletePostController,
} from "./controller";

const router = Router();

router.post("/", CreatePostController);
router.get("/", GetPostsController);
router.get("/:id", GetPostController);
router.put("/:id", UpdatePostController);
router.delete("/:id", DeletePostController);

export default router;
