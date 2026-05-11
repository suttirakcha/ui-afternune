import { User } from "@/types/users.type";

export type Community = {
  readonly _id: string;
  title: string;
  detail: string;
  category?: string;
  creator: User;
  image_url?: string;
  members: User[];
  categories: string[];
  events: CommunityEvent[];
};

export type CommunityEvent = {
  readonly _id: string;
  title: string;
  detail: string;
  image_url?: string;
  start_date: string;
  end_date: string;
};
