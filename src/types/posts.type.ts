import { User } from "@/types/users.type";

export type Post = {
  readonly _id: string;
  caption: string;
  image_url: string;
  user: User;
  createdAt: string;
};
