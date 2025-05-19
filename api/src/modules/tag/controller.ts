import { Request, Response } from "express";
import { CreateTagType, UpdateTagType } from "./types";
import { ResponseTagFormatter, ResponseTagListFormatter } from "./formatter";
import { CreateTag, GetTags, GetTag, UpdateTag, DeleteTag } from "./service";

export const CreateTagController = async (
  req: Request<{}, {}, CreateTagType>,
  res: Response
) => {
  try {
    const data = req.body;
    const tag = await CreateTag(data);
    const formattedTag = ResponseTagFormatter(tag);
    res.status(201).json(formattedTag);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const GetTagsController = async (req: Request, res: Response) => {
  try {
    const tags = await GetTags();
    const formattedTags = ResponseTagListFormatter(tags);
    res.status(200).json(formattedTags);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const GetTagController = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const id = req.params.id;
    if (!id || isNaN(+id)) {
      res.status(400).json({ message: "Tag ID is required" });
      return;
    }
    const tag = await GetTag(+id);
    if (!tag) {
      res.status(404).json({ message: "Tag not found" });
      return;
    }
    const formattedTag = ResponseTagFormatter(tag);
    res.status(200).json(formattedTag);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const UpdateTagController = async (
  req: Request<{ id: string }, {}, UpdateTagType>,
  res: Response
) => {
  try {
    const id = req.params.id;
    if (!id || isNaN(+id)) {
      res.status(400).json({ message: "Tag ID is required" });
      return;
    }
    const data = req.body;
    const tag = await UpdateTag(+id, data);
    const formattedTag = ResponseTagFormatter(tag);
    res.status(200).json(formattedTag);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const DeleteTagController = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const id = req.params.id;
    if (!id || isNaN(+id)) {
      res.status(400).json({ message: "Tag ID is required" });
      return;
    }
    const tag = await DeleteTag(+id);
    const formattedTag = ResponseTagFormatter(tag);
    res.status(200).json(formattedTag);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
