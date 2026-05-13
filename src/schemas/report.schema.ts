import { ListType } from "@/types/menus.type";
import { ReportType } from "@/types/report.type";
import * as Yup from "yup";

export const reportReasons = [
  "Showing the violence, death, or injury",
  "Presenting the terrorism",
  "Sexual activities, exploitation, and/or pornography",
  "Scamming or fraud",
  "Selling, promoting, or using illegal products such as drugs, weapons, and/or animals",
  "Political incitement",
  "Other",
];

export const reportReasonList: ListType[] = reportReasons.map((reason) => ({
  label: reason,
  value: reason,
}));

export const reportSchema = Yup.object().shape({
  type: Yup.string().oneOf([
    ReportType.POST,
    ReportType.USER,
    ReportType.COMMENT,
    ReportType.COMMUNITY,
  ]),
  reason: Yup.string(),
  post_id: Yup.string().when("type", {
    is: ReportType.POST,
    then: (schema) => schema.required(),
  }),
  community_id: Yup.string().when("type", {
    is: ReportType.COMMUNITY,
    then: (schema) => schema.required(),
  }),
  user_id: Yup.string().when("type", {
    is: ReportType.USER,
    then: (schema) => schema.required(),
  }),
});
