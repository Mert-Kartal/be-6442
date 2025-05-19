import { ResponseTagType } from "./types";

export const ResponseTagFormatter = (tag: ResponseTagType) => {
  return {
    Tag: tag.name,
  };
};

export const ResponseTagListFormatter = (tags: ResponseTagType[]) => {
  return tags.map((tag) => ResponseTagFormatter(tag));
};
