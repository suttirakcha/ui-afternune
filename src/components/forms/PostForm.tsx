"use client";

import AfnField from "@/components/custom/AfnField";
import AfnInput from "@/components/custom/AfnInput";
import AfnTextarea from "@/components/custom/AfnTextarea";
import SubmitButton from "@/components/custom/SubmitButton";
import { toaster } from "@/components/ui/toaster";
import { revalidatePosts } from "@/lib/revalidate";
import { postSchema } from "@/schemas/posts.schema";
import { uploadImage } from "@/services/cloudinary.service";
import { createPost } from "@/services/posts.service";
import { useUploadImageStore } from "@/stores/useUploadImageStore";
import { Post, PostFieldValues } from "@/types/posts.type";
import { handleMessage } from "@/utils/handle-message";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useRef } from "react";

interface PostFormProps {
  post?: Post;
}

const INITIAL_VALUES = {
  caption: "",
  image_url: "",
};

export default function PostForm({ post }: PostFormProps) {
  const router = useRouter();
  const imageRef = useRef<HTMLInputElement>(null);
  const { previewUrl, imageFile, setPreviewUrl, resetPreview } =
    useUploadImageStore();

  const onSubmit = async (values: PostFieldValues) => {
    const imageResponse = await uploadImage(imageFile!);
    const response = await createPost({
      caption: values.caption,
      image_url: imageResponse.secure_url,
    });
    if (!response.success) {
      handleMessage(response.message);
      return;
    }
    handleMessage(response.message);
    resetPreview();
    revalidatePosts();
    router.push("/posts");
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={onSubmit}
      validationSchema={postSchema}
    >
      {({ isSubmitting, handleSubmit, setFieldValue, errors, touched }) => {
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
              label="Caption"
              error={errors.caption}
              touched={touched.caption}
            >
              <AfnTextarea
                placeholder="Write your post caption"
                disabled={isSubmitting}
                error={!!(errors.caption && touched.caption)}
                onChange={(e) => setFieldValue("caption", e.target.value)}
              />
            </AfnField>
            <AfnField
              label="Post image"
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
                previewUrl={previewUrl}
              />
            </AfnField>

            <SubmitButton
              isSubmitting={isSubmitting}
              submitText="Create"
              submittingText="Creating post..."
            />
          </form>
        );
      }}
    </Formik>
  );
}
