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
  data: Yup.mixed(),
});
