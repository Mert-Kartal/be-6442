import prisma from "src/plugin/db";
import {
  CreateCommentType,
  UpdateCommentType,
  ResponseCommentType,
} from "./types";

export const CreateComment = async (
  data: CreateCommentType
): Promise<ResponseCommentType> => {
  try {
    const comment = await prisma.postComment.create({
      data: {
        postId: data.postId,
        content: data.content,
        commenter_name: data.commenter_name,
      },
    });
    return comment;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const GetComments = async (
  postId: number
): Promise<ResponseCommentType[]> => {
  try {
    const comments = await prisma.postComment.findMany({
      where: {
        postId,
        deleted_at: null,
      },
    });
    return comments;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const GetComment = async (
  id: number
): Promise<ResponseCommentType | null> => {
  try {
    const comment = await prisma.postComment.findUnique({
      where: {
        id,
        deleted_at: null,
      },
    });
    return comment;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const UpdateComment = async (
  id: number,
  data: UpdateCommentType
): Promise<ResponseCommentType> => {
  try {
    const comment = await prisma.postComment.update({
      where: {
        id,
        deleted_at: null,
      },
      data: {
        content: data.content,
      },
    });
    return comment;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const DeleteComment = async (
  id: number
): Promise<ResponseCommentType | null> => {
  try {
    const comment = await prisma.postComment.update({
      where: {
        id,
      },
      data: {
        deleted_at: new Date(),
      },
    });
    return comment;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
