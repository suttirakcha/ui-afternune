import { commentSchema, postSchema } from "@/schemas/posts.schema";
import { User } from "@/types/users.type";
import * as Yup from "yup";

export type Post = {
  readonly _id: string;
  caption: string;
  image_url: string;
  user: User;
  createdAt: string;
  comments: Comment[];
};

export type Comment = {
  readonly _id: string;
  detail: string;
  createdAt: string;
  user: User;
};

export type PostFieldValues = Yup.InferType<typeof postSchema>;
export type CommentFieldValues = Yup.InferType<typeof commentSchema>;
