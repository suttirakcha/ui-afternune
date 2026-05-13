import * as Yup from "yup";
import { Interests, User } from "@/types/users.type";
import {
  communityEventSchema,
  communitySchema,
} from "@/schemas/communities.schema";

export type Community = {
  readonly _id: string;
  title: string;
  detail: string;
  creator: User;
  image_url?: string;
  members: User[];
  categories: Interests[];
  events: CommunityEvent[];
};

export type CommunityEvent = {
  readonly _id: string;
  event_name: string;
  event_detail: string;
  image_url?: string;
  start_date: string;
  end_date: string;
};

export type CommunityFieldValues = Yup.InferType<typeof communitySchema>;
export type CommunityEventFieldValues = Yup.InferType<
  typeof communityEventSchema
>;
