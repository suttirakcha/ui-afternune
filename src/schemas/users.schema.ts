import * as Yup from "yup";

export const updateProfileSchema = Yup.object({
  date_of_birth: Yup.string().nullable(),
  interests: Yup.array(Yup.string()),
  is_first_time: Yup.boolean(),
  gender: Yup.string().nullable(),
});

export const updateProfileSettingsSchema = Yup.object({
  username: Yup.string().required("Username is a required field"),
  bio: Yup.string(),
  image_url: Yup.string(),
});
