import { Router } from "express";
import {
  CreateCategoryController,
  GetCategoriesController,
  GetCategoryController,
  UpdateCategoryController,
  DeleteCategoryController,
} from "./controller";
import { CreateCategoryDto, UpdateCategoryDto } from "./dto";
import { validate } from "../../middleware/validation";

const router = Router();

router.post("/", validate(CreateCategoryDto), CreateCategoryController);
router.get("/", GetCategoriesController);
router.get("/:id", GetCategoryController);
router.put("/:id", validate(UpdateCategoryDto), UpdateCategoryController);
router.delete("/:id", DeleteCategoryController);

export default router;
