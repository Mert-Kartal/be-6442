import { PostType } from "./types";

export const ResponsePostFormatter = (post: PostType) => {
  return {
    id: post.id,
    title: post.title,
    content: post.content,
    category_id: post.categoryId,
    published_at: post.published_at,
  };
};

export const ResponsePostListFormatter = (posts: PostType[]) => {
  return posts.map((post) => ResponsePostFormatter(post));
};
