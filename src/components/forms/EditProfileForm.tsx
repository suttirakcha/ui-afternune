"use client";

import AfnField from "@/components/custom/AfnField";
import AfnInput from "@/components/custom/AfnInput";
import AfnTextarea from "@/components/custom/AfnTextarea";
import SubmitButton from "@/components/custom/SubmitButton";
import { uploadImage } from "@/services/cloudinary.service";
import { updateUser } from "@/services/users.service";
import { useUploadImageStore } from "@/stores/useUploadImageStore";
import { UpdateProfileSettingsFormValues, User } from "@/types/users.type";
import { handleMessage } from "@/utils/handle-message";
import { Formik } from "formik";
import { ChangeEvent, useRef } from "react";

interface EditProfileFormProps {
  profile: User;
}

export default function EditProfileForm({ profile }: EditProfileFormProps) {
  const INITIAL_VALUES = {
    username: profile?.username ?? "",
    bio: profile?.bio ?? "",
    image_url: profile?.image_url ?? "",
  };

  const imageRef = useRef<HTMLInputElement>(null);
  const { previewUrl, imageFile, setPreviewUrl, resetPreview } =
    useUploadImageStore();

  const onSubmit = async (values: UpdateProfileSettingsFormValues) => {
    let image_url = values.image_url;

    if (imageFile) {
      const imageResponse = await uploadImage(imageFile);
      if (!imageResponse?.secure_url) {
        return handleMessage("Failed to upload image");
      }

      image_url = imageResponse.secure_url;
    }

    const requestPayload = {
      username: values.username,
      bio: values.bio,
      image_url,
    };
    const response = await updateUser(requestPayload);
    if (!response.success) {
      return handleMessage(response.message);
    }
    handleMessage(response.message);
  };

  return (
    <Formik initialValues={INITIAL_VALUES} onSubmit={onSubmit}>
      {({
        handleSubmit,
        values,
        errors,
        touched,
        setFieldValue,
        isSubmitting,
      }) => {
        const handleSetPreviewUrl = (e: ChangeEvent<HTMLInputElement>) => {
          const file = e.target.files?.[0];
          if (!file) return;

          setPreviewUrl(file);
          setFieldValue("image_url", e.target.value);
        };

        const handleReset = () => {
          resetPreview();
          setFieldValue("image_url", null);
          if (imageRef.current) imageRef.current.value = "";
        };
        return (
          <form onSubmit={handleSubmit} className="form">
            <AfnField label="Profile image">
              <AfnInput
                width={"300px"}
                height={"300px"}
                marginX={"auto"}
                ref={imageRef}
                type="file"
                disabled={isSubmitting}
                onChange={handleSetPreviewUrl}
                onReset={handleReset}
                previewUrl={previewUrl ?? (values.image_url || undefined)}
              />
            </AfnField>
            <AfnField
              label="Username"
              error={errors.username}
              touched={touched.username}
            >
              <AfnInput
                placeholder="Enter your username"
                disabled={isSubmitting}
                value={values.username}
                onChange={(e) => setFieldValue("username", e.target.value)}
              />
            </AfnField>
            <AfnField label="Bio" error={errors.bio} touched={touched.bio}>
              <AfnTextarea
                resize="none"
                fieldSizing="content"
                placeholder="Enter your bio"
                disabled={isSubmitting}
                value={values.bio}
                onChange={(e) => setFieldValue("bio", e.target.value)}
              />
            </AfnField>
            <SubmitButton
              isSubmitting={isSubmitting}
              submitText="Save"
              submittingText="Saving"
            />
          </form>
        );
      }}
    </Formik>
  );
}
