"use client";

import AfnField from "@/components/custom/AfnField";
import AfnInput from "@/components/custom/AfnInput";
import AfnTextarea from "@/components/custom/AfnTextarea";
import SubmitButton from "@/components/custom/SubmitButton";
import { revalidatePosts } from "@/lib/revalidate";
import { postSchema } from "@/schemas/posts.schema";
import { uploadImage } from "@/services/cloudinary.service";
import { createPost, updatePost } from "@/services/posts.service";
import { useUploadImageStore } from "@/stores/useUploadImageStore";
import { Post, PostFieldValues } from "@/types/posts.type";
import { handleMessage } from "@/utils/handle-message";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useRef } from "react";

interface PostFormProps {
  post?: Post;
}

export default function PostForm({ post }: PostFormProps) {
  const router = useRouter();
  const imageRef = useRef<HTMLInputElement>(null);
  const { previewUrl, imageFile, setPreviewUrl, resetPreview } =
    useUploadImageStore();

  const onSubmit = async (values: PostFieldValues) => {
    let image_url = values.image_url;

    if (imageFile) {
      const imageResponse = await uploadImage(imageFile);
      if (!imageResponse?.secure_url) {
        return handleMessage("Failed to upload image");
      }

      image_url = imageResponse.secure_url;
    }

    const requestPayload = {
      caption: values.caption,
      image_url,
    };

    const response = post
      ? await updatePost(post._id, requestPayload)
      : await createPost(requestPayload);
    if (!response.success) {
      return handleMessage(response.message);
    }
    handleMessage(response.message);
    resetPreview();
    revalidatePosts();
    router.push("/posts");
  };

  const INITIAL_VALUES = {
    caption: post?.caption ?? "",
    image_url: post?.image_url ?? "",
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={onSubmit}
      validationSchema={postSchema}
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
              label="Caption"
              error={errors.caption}
              touched={touched.caption}
            >
              <AfnTextarea
                placeholder="Write your post caption"
                defaultValue={values.caption}
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
                previewUrl={previewUrl ?? (values.image_url || undefined)}
              />
            </AfnField>

            <SubmitButton
              isSubmitting={isSubmitting}
              submitText={post ? "Update" : "Create"}
              submittingText={post ? "Updating post..." : "Creating post..."}
            />
          </form>
        );
      }}
    </Formik>
  );
}
