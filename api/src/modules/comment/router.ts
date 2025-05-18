import { Router } from "express";
import {
  CreateCommentController,
  GetCommentsController,
  GetCommentController,
  UpdateCommentController,
  DeleteCommentController,
} from "./controller";
import { CreateCommentDto, UpdateCommentDto } from "./dto";
import { validate } from "src/middleware/validation";
const router = Router();

router.post("/", validate(CreateCommentDto), CreateCommentController);
router.get("/:postId", GetCommentsController);
router.get("/:id", GetCommentController);
router.patch("/:id", validate(UpdateCommentDto), UpdateCommentController);
router.delete("/:id", DeleteCommentController);

export default router;
