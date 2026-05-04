import { User } from "@/types/users.type";

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
};
