import { z } from "zod";

export const CreatePostDto = z.object({
  title: z.string().min(3, "Title is required"),
  content: z.string().min(3, "Content is required"),
  categoryId: z.number(),
  published_at: z.date().nullable(),
});

export const UpdatePostDto = CreatePostDto.partial();

export const PostDto = CreatePostDto.extend({
  id: z.number(),
  created_at: z.date(),
  published_at: z.date().nullable(),
  deleted_at: z.date().nullable(),
});
