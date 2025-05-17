import { z } from "zod";
import { CreateCategoryDto, UpdateCategoryDto, CategoryDto } from "./dto";

export type CreateCategoryType = z.infer<typeof CreateCategoryDto>;
export type UpdateCategoryType = z.infer<typeof UpdateCategoryDto>;
export type ResponseCategoryType = z.infer<typeof CategoryDto>;
