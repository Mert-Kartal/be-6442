import { ResponseCommentType } from "./types";

export const ResponseCommentFormatter = (comment: ResponseCommentType) => {
  return {
    id: comment.id,
    content: comment.content,
    commenter_name: comment.commenter_name,
  };
};

export const ResponseCommentListFormatter = (
  comments: ResponseCommentType[]
) => {
  return comments.map((comment) => ResponseCommentFormatter(comment));
};
