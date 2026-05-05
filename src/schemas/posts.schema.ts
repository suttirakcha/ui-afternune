import * as Yup from "yup";

export const commentSchema = Yup.object({
  detail: Yup.string().required(),
});
