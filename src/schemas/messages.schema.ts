import * as Yup from "yup";

export const chatMessageSchema = Yup.object({
  message: Yup.string().required(),
});
