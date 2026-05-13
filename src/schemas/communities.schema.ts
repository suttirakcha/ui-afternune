import * as Yup from "yup";

export const communitySchema = Yup.object().shape({
  title: Yup.string().required("Community title is a required field"),
  detail: Yup.string().required("Comunity detail is a required field"),
  image_url: Yup.string().optional(),
  categories: Yup.array(Yup.string()).optional(),
});

export const communityEventSchema = Yup.object().shape({
  event_name: Yup.string().required("Event name is a required field"),
  event_detail: Yup.string().required("Event detail is a required field"),
  image_url: Yup.string().nullable().optional(),
  start_date: Yup.string().required("Start date is a required field"),
  end_date: Yup.string().required("End date is a required field"),
});
