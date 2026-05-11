import * as Yup from "yup";
import { Post } from "@/types/posts.type";
import { updateProfileSchema } from "@/schemas/users.schema";

export type User = {
  readonly _id: string;
  username: string;
  bio?: string;
  image_url?: string;
  interests: string[];
  gender: Gender;
  posts: Post[];
  followers: User[];
  following: User[];
  is_first_time: boolean;
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

export enum Interests {
  FOOD = "Food",
  TRAVEL = "Travel",
  MUSIC = "Music",
  SPORTS = "Sports",
  ENTERTAINMENT = "Entertainment",
  SCIENCE_TECHNOLOGY = "Science & Technology",
  GAMES = "Games",
  COMEDY = "Comedy",
  FILMS = "Films",
  LIFESTYLE = "Lifestyle",
  WORK = "Work",
  ART = "Art",
  EDUCATION = "Education",
  LANGUAGE_LITERATURE = "Language & Literature",
  DESIGN = "Design",
  ANIMATION_CARTOON = "Animation & Cartoon",
  ARCHITECTURE = "Architecture",
  ENGINEERING = "Engineering",
  MARKETING = "Marketing",
}

export type UpdateProfileFormValues = Yup.InferType<typeof updateProfileSchema>;
