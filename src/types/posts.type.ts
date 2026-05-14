import { commentSchema, postSchema } from "@/schemas/posts.schema";
import { User } from "@/types/users.type";
import * as Yup from "yup";

export type Post = {
  readonly _id: string;
  caption: string;
  image_url: string;
  user_id: string;
  user: User;
  createdAt: string;
  comments: Comment[];
  likes: Like[];
};

export type Comment = {
  readonly _id: string;
  detail: string;
  createdAt: string;
  user: User;
};

export type Like = {
  user_id: string;
  post_id: string;
};

export type PostFieldValues = Yup.InferType<typeof postSchema>;
export type CommentFieldValues = Yup.InferType<typeof commentSchema>;
