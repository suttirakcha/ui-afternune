import { reportSchema } from "@/schemas/report.schema";
import * as Yup from "yup";

export enum ReportType {
  POST = "Post",
  COMMENT = "Comment",
  USER = "User",
  COMMUNITY = "Community",
}

export type Report = ReportFormValues & {
  readonly _id: string;
};

export type ReportFormValues = Yup.InferType<typeof reportSchema>;
