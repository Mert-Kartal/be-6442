import prisma from "src/plugin/db";
import {
  ResponseCategoryType,
  UpdateCategoryType,
  CreateCategoryType,
} from "./types";

export const CreateCategory = async (
  data: CreateCategoryType
): Promise<ResponseCategoryType> => {
  try {
    const category = await prisma.category.create({
      data: {
        name: data.name,
      },
    });
    return category;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const GetCategories = async (): Promise<ResponseCategoryType[]> => {
  try {
    const categories = await prisma.category.findMany({
      where: { deleted_at: null },
    });
    return categories;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const GetCategory = async (
  id: number
): Promise<ResponseCategoryType | null> => {
  try {
    const category = await prisma.category.findUnique({
      where: {
        id,
        deleted_at: null,
      },
    });
    return category;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const UpdateCategory = async (
  id: number,
  data: UpdateCategoryType
): Promise<ResponseCategoryType> => {
  try {
    const category = await prisma.category.update({
      where: {
        id,
        deleted_at: null,
      },
      data: {
        name: data.name,
      },
    });
    return category;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const DeleteCategory = async (
  id: number
): Promise<ResponseCategoryType | null> => {
  try {
    const category = await prisma.category.update({
      where: {
        id,
      },
      data: {
        deleted_at: new Date(),
      },
    });
    return category;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
