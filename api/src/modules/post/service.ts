import prisma from "../../plugin/db";
import { PostType, CreatePostType, UpdatePostType } from "./types";

export const CreatePost = async (data: CreatePostType): Promise<PostType> => {
  const createdPost = await prisma.post.create({
    data: {
      title: data.title,
      content: data.content,
      categoryId: data.categoryId,
    },
  });
  return createdPost;
};

export const GetPosts = async (): Promise<PostType[]> => {
  const posts = await prisma.post.findMany({
    where: { deleted_at: null },
  });
  return posts;
};

export const GetPost = async (id: number): Promise<PostType | null> => {
  const post = await prisma.post.findUnique({
    where: { id },
  });

  return post;
};

export const UpdatePost = async (
  id: number,
  data: UpdatePostType
): Promise<PostType> => {
  const updatedPost = await prisma.post.update({
    where: { id },
    data: {
      title: data.title,
      content: data.content,
      categoryId: data.categoryId,
      published_at: data.published_at,
    },
  });
  return updatedPost;
};

export const DeletePost = async (id: number): Promise<PostType> => {
  const deletedPost = await prisma.post.update({
    where: { id },
    data: { deleted_at: new Date() },
  });
  return deletedPost;
};
