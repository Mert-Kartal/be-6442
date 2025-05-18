import { z } from "zod";

export const CreateCommentDto = z.object({
  postId: z.number(),
  content: z.string().min(3, "Content is required"),
  commenter_name: z.string().min(3, "Commenter name is required"),
});

export const UpdateCommentDto = CreateCommentDto.partial();

export const CommentDto = CreateCommentDto.extend({
  id: z.number(),
  created_at: z.date(),
  updated_at: z.date(),
  deleted_at: z.date().nullable(),
});
