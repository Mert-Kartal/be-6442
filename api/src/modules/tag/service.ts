import prisma from "src/plugin/db";
import { CreateTagType, UpdateTagType, ResponseTagType } from "./types";

export const CreateTag = async (tag: CreateTagType) => {
  const { name } = tag;
  return await prisma.tag.create({
    data: {
      name,
    },
  });
};

export const GetTags = async (): Promise<ResponseTagType[]> => {
  const tags = await prisma.tag.findMany();
  return tags;
};

export const GetTag = async (id: number): Promise<ResponseTagType | null> => {
  const tag = await prisma.tag.findUnique({
    where: {
      id,
    },
  });
  return tag;
};

export const UpdateTag = async (
  id: number,
  tag: UpdateTagType
): Promise<ResponseTagType> => {
  const { name } = tag;
  return await prisma.tag.update({
    where: {
      id,
    },
    data: {
      name,
    },
  });
};

export const DeleteTag = async (id: number): Promise<ResponseTagType> => {
  return await prisma.tag.delete({
    where: {
      id,
    },
  });
};
