import { Request, Response } from "express";
import {
  CreateComment,
  GetComments,
  GetComment,
  UpdateComment,
  DeleteComment,
} from "./service";
import {
  CreateCommentType,
  UpdateCommentType,
  ResponseCommentType,
} from "./types";
import {
  ResponseCommentFormatter,
  ResponseCommentListFormatter,
} from "./formatter";

export const CreateCommentController = async (
  req: Request<{}, {}, CreateCommentType>,
  res: Response
) => {
  try {
    const data = req.body;
    const createdComment = await CreateComment(data);
    const comment = ResponseCommentFormatter(createdComment);
    res.status(201).json(comment);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const GetCommentsController = async (
  req: Request<{ postId: string }>,
  res: Response
) => {
  try {
    const { postId } = req.params;
    if (!postId || isNaN(+postId)) {
      res.status(400).json({ message: "Invalid postId" });
      return;
    }
    const comments = await GetComments(+postId);
    if (comments.length === 0) {
      res.status(404).json({ message: "Comments not found" });
      return;
    }
    const formattedComments = ResponseCommentListFormatter(comments);
    res.status(200).json(formattedComments);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const GetCommentController = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const { id } = req.params;
    if (!id || isNaN(+id)) {
      res.status(400).json({ message: "Invalid id" });
      return;
    }
    const specificComment = await GetComment(+id);
    if (!specificComment) {
      res.status(404).json({ message: "Comment not found" });
      return;
    }
    const comment = ResponseCommentFormatter(specificComment);
    res.status(200).json(comment);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const UpdateCommentController = async (
  req: Request<{ id: string }, {}, UpdateCommentType>,
  res: Response
) => {
  try {
    const { id } = req.params;
    if (!id || isNaN(+id)) {
      res.status(400).json({ message: "Invalid id" });
      return;
    }
    const data = req.body;
    const updatedComment = await UpdateComment(+id, data);
    const comment = ResponseCommentFormatter(updatedComment);
    res.status(200).json(comment);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const DeleteCommentController = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const { id } = req.params;
    if (!id || isNaN(+id)) {
      res.status(400).json({ message: "Invalid id" });
      return;
    }
    const deletedComment = await DeleteComment(+id);
    if (!deletedComment) {
      res.status(404).json({ message: "Comment not found" });
      return;
    }
    const comment = ResponseCommentFormatter(deletedComment);
    res.status(200).json(comment);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
