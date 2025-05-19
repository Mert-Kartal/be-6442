import { z } from "zod";

export const CreateTagDto = z.object({
  name: z
    .string()
    .min(1, "Tag name is required")
    .max(50, "Tag name must be less than 50 characters"),
});

export const UpdateTagDto = CreateTagDto.partial();

export const TagDto = CreateTagDto.extend({
  id: z.number(),
});
