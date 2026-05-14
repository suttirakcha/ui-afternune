import { reportSchema } from "@/schemas/report.schema";
import { Community } from "@/types/communities.type";
import { Post } from "@/types/posts.type";
import { User } from "@/types/users.type";
import * as Yup from "yup";

export enum ReportType {
  POST = "Post",
  COMMENT = "Comment",
  USER = "User",
  COMMUNITY = "Community",
}

export type Report = ReportFormValues & {
  readonly _id: string;
  post?: Post;
  user?: User;
  community?: Community;
};

export type ReportFormValues = Yup.InferType<typeof reportSchema>;
