import { ResponseCategoryType } from "./types";

export const ResponseCategoryFormatter = (category: ResponseCategoryType) => {
  return {
    id: category.id,
    name: category.name,
  };
};

export const ResponseCategoryListFormatter = (
  categories: ResponseCategoryType[]
) => {
  return categories.map((category) => ResponseCategoryFormatter(category));
};
