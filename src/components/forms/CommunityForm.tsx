"use client";

import AfnField from "@/components/custom/AfnField";
import AfnInput from "@/components/custom/AfnInput";
import AfnTextarea from "@/components/custom/AfnTextarea";
import SubmitButton from "@/components/custom/SubmitButton";
import ManageInterestsCheckbox from "@/components/users/ManageInterestsCheckbox";
import { revalidateCommunity, revalidatePosts } from "@/lib/revalidate";
import { communitySchema } from "@/schemas/communities.schema";
import { postSchema } from "@/schemas/posts.schema";
import { uploadImage } from "@/services/cloudinary.service";
import {
  createCommunity,
  updateCommunity,
} from "@/services/communities.service";
import { useUploadImageStore } from "@/stores/useUploadImageStore";
import { Community, CommunityFieldValues } from "@/types/communities.type";
import { handleMessage } from "@/utils/handle-message";
import { Formik } from "formik";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useRef } from "react";

interface CommunityFormProps {
  community?: Community;
}

export default function CommunityForm({ community }: CommunityFormProps) {
  const t = useTranslations();
  const router = useRouter();
  const imageRef = useRef<HTMLInputElement>(null);
  const { previewUrl, imageFile, setPreviewUrl, resetPreview } =
    useUploadImageStore();

  const onSubmit = async (values: CommunityFieldValues) => {
    let image_url = values.image_url;

    if (imageFile) {
      const imageResponse = await uploadImage(imageFile);
      if (!imageResponse?.secure_url) {
        return handleMessage("Failed to upload image");
      }

      image_url = imageResponse.secure_url;
    }

    const requestPayload = {
      title: values.title,
      detail: values.detail,
      categories: values.categories,
      image_url,
    };

    const response = community
      ? await updateCommunity(community._id, requestPayload)
      : await createCommunity(requestPayload);
    if (!response.success) {
      return handleMessage(t(response.message));
    }
    handleMessage(t(response.message));
    resetPreview();
    revalidateCommunity();
    router.push("/communities");
  };

  const INITIAL_VALUES = {
    title: community?.title ?? "",
    detail: community?.detail ?? "",
    image_url: community?.image_url ?? "",
    categories: community?.categories ?? [],
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={onSubmit}
      validationSchema={communitySchema}
    >
      {({
        isSubmitting,
        handleSubmit,
        setFieldValue,
        errors,
        touched,
        values,
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
            <AfnField
              label="Community title"
              error={errors.title}
              touched={touched.title}
            >
              <AfnInput
                placeholder="Write the community title"
                defaultValue={values.title}
                disabled={isSubmitting}
                error={!!(errors.title && touched.title)}
                onChange={(e) => setFieldValue("title", e.target.value)}
              />
            </AfnField>
            <AfnField
              label="Community detail"
              error={errors.detail}
              touched={touched.detail}
            >
              <AfnTextarea
                placeholder="Write the community detail"
                defaultValue={values.detail}
                disabled={isSubmitting}
                error={!!(errors.detail && touched.detail)}
                onChange={(e) => setFieldValue("detail", e.target.value)}
              />
            </AfnField>
            <AfnField
              label="Community image"
              error={errors.image_url}
              touched={touched.image_url}
            >
              <AfnInput
                ref={imageRef}
                type="file"
                disabled={isSubmitting}
                error={!!(errors.image_url && touched.image_url)}
                onChange={handleSetPreviewUrl}
                onReset={handleReset}
                previewUrl={previewUrl ?? (values.image_url || undefined)}
              />
            </AfnField>
            <ManageInterestsCheckbox
              label="Categories label"
              defaultValues={values.categories}
              onValueChange={(values) => setFieldValue("categories", values)}
            />

            <SubmitButton
              isSubmitting={isSubmitting}
              submitText={community ? "Update community" : "Create community"}
              submittingText={
                community ? "Updating community" : "Creating community"
              }
            />
          </form>
        );
      }}
    </Formik>
  );
}
