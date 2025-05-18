import { z } from "zod";
import { CreatePostDto, UpdatePostDto, PostDto } from "./dto";

export type CreatePostType = z.infer<typeof CreatePostDto>;
export type UpdatePostType = z.infer<typeof UpdatePostDto>;
export type ResponsePostType = z.infer<typeof PostDto>;
