import { Request, Response } from "express";

import {
  CreateCategory,
  GetCategories,
  GetCategory,
  UpdateCategory,
  DeleteCategory,
} from "./service";

import {
  ResponseCategoryFormatter,
  ResponseCategoryListFormatter,
} from "./formatter";

import { CreateCategoryType, UpdateCategoryType } from "./types";

export const CreateCategoryController = async (
  req: Request<{}, {}, CreateCategoryType>,
  res: Response
) => {
  try {
    const data = req.body;
    const createdCategory = await CreateCategory(data);
    const category = ResponseCategoryFormatter(createdCategory);

    res.status(201).json(category);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const GetCategoriesController = async (req: Request, res: Response) => {
  try {
    const categories = await GetCategories();
    if (categories.length === 0) {
      res.status(404).json({ message: "Categories not found" });
      return;
    }
    const formattedCategories = ResponseCategoryListFormatter(categories);
    res.status(200).json(formattedCategories);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const GetCategoryController = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const { id } = req.params;
    if (!id || isNaN(+id)) {
      res.status(400).json({ message: "Invalid id" });
      return;
    }
    const specificCategory = await GetCategory(+id);
    if (!specificCategory) {
      res.status(404).json({ message: "Category not found" });
      return;
    }
    const category = ResponseCategoryFormatter(specificCategory);
    res.status(200).json(category);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const UpdateCategoryController = async (
  req: Request<{ id: string }, {}, UpdateCategoryType>,
  res: Response
) => {
  try {
    const { id } = req.params;
    if (!id || isNaN(+id)) {
      res.status(400).json({ message: "Invalid id" });
      return;
    }
    const data = req.body;
    const updatedCategory = await UpdateCategory(+id, data);
    const category = ResponseCategoryFormatter(updatedCategory);
    res.status(200).json(category);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const DeleteCategoryController = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const { id } = req.params;
    if (!id || isNaN(+id)) {
      res.status(400).json({ message: "Invalid id" });
      return;
    }
    const deletedCategory = await DeleteCategory(+id);
    if (!deletedCategory) {
      res.status(404).json({ message: "Category not found" });
      return;
    }
    const category = ResponseCategoryFormatter(deletedCategory);
    res.status(200).json(category);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
