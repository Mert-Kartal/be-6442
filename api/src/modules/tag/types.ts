import { z } from "zod";
import { CreateTagDto, TagDto, UpdateTagDto } from "./dto";

export type CreateTagType = z.infer<typeof CreateTagDto>;
export type UpdateTagType = z.infer<typeof UpdateTagDto>;
export type ResponseTagType = z.infer<typeof TagDto>;
