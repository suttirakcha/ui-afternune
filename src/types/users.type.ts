import { Post } from "@/types/posts.type";

export type User = {
  readonly _id: string;
  username: string;
  bio?: string;
  image_url?: string;
  interests: string[];
  gender: Gender;
  posts: Post[];
};

export enum Role {
  USER = "User",
  ADMIN = "Admin",
  COMMUNITY_CREATOR = "Community creator",
}

export enum Gender {
  MALE = "Male",
  FEMALE = "Female",
  NOT_SPECIFIED = "Not specified",
}
