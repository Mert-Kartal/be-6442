import { Request, Response } from "express";

import {
  CreatePost,
  GetPosts,
  GetPost,
  UpdatePost,
  DeletePost,
} from "./service";

import { ResponsePostFormatter, ResponsePostListFormatter } from "./formatter";

import { CreatePostType, UpdatePostType } from "./types";

export const CreatePostController = async (
  req: Request<{}, {}, CreatePostType>,
  res: Response
) => {
  try {
    const data = req.body;
    const createdPost = await CreatePost(data);
    const formattedPost = ResponsePostFormatter(createdPost);
    res.status(201).json(formattedPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const GetPostsController = async (req: Request, res: Response) => {
  try {
    const posts = await GetPosts();
    if (posts.length === 0) {
      res.status(404).json({ message: "Posts not found" });
      return;
    }
    const formattedPosts = ResponsePostListFormatter(posts);
    res.status(200).json(formattedPosts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const GetPostController = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const { id } = req.params;
    if (!id || isNaN(+id)) {
      res.status(400).json({ message: "Invalid id" });
      return;
    }
    const specificPost = await GetPost(+id);
    if (!specificPost) {
      res.status(404).json({ message: "Post not found" });
      return;
    }
    const formattedPost = ResponsePostFormatter(specificPost);
    res.status(200).json(formattedPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const UpdatePostController = async (
  req: Request<{ id: string }, {}, UpdatePostType>,
  res: Response
) => {
  try {
    const { id } = req.params;
    if (!id || isNaN(+id)) {
      res.status(400).json({ message: "Invalid id" });
      return;
    }
    const data = req.body;
    const updatedPost = await UpdatePost(+id, data);
    const formattedPost = ResponsePostFormatter(updatedPost);
    res.status(200).json(formattedPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const DeletePostController = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const { id } = req.params;
    if (!id || isNaN(+id)) {
      res.status(400).json({ message: "Invalid id" });
      return;
    }
    const deletedPost = await DeletePost(+id);
    if (!deletedPost) {
      res.status(404).json({ message: "Post not found" });
      return;
    }
    const formattedPost = ResponsePostFormatter(deletedPost);
    res.status(200).json(formattedPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
