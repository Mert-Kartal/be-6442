import { z } from "zod";

export const CreateCategoryDto = z.object({
  name: z.string().min(3, "Name is required"),
});

export const UpdateCategoryDto = CreateCategoryDto.partial();

export const CategoryDto = CreateCategoryDto.extend({
  id: z.number(),
  created_at: z.date(),
  updated_at: z.date(),
  deleted_at: z.date().nullable(),
});
