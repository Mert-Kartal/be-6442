import { z } from "zod";
import { CreateCommentDto, UpdateCommentDto, CommentDto } from "./dto";

export type CreateCommentType = z.infer<typeof CreateCommentDto>;
export type UpdateCommentType = z.infer<typeof UpdateCommentDto>;
export type ResponseCommentType = z.infer<typeof CommentDto>;
