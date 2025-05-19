import { Router } from "express";
import {
  CreateTagController,
  GetTagsController,
  GetTagController,
  UpdateTagController,
  DeleteTagController,
} from "./controller";
import { CreateTagDto, UpdateTagDto } from "./dto";
import { validate } from "src/middleware/validation";
const router = Router();

router.post("/", validate(CreateTagDto), CreateTagController);
router.get("/", GetTagsController);
router.get("/:id", GetTagController);
router.put("/:id", validate(UpdateTagDto), UpdateTagController);
router.delete("/:id", DeleteTagController);

export default router;
