import * as Yup from "yup";

export const postSchema = Yup.object({
  caption: Yup.string().required("Caption is a required field"),
  image_url: Yup.string().required("Post image is a required field"),
});

export const commentSchema = Yup.object({
  detail: Yup.string().required(),
});
