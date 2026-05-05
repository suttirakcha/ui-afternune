"use client";

import AfnField from "@/components/custom/AfnField";
import AfnInput from "@/components/custom/AfnInput";
import AfnTextarea from "@/components/custom/AfnTextarea";
import SubmitButton from "@/components/custom/SubmitButton";
import { Post } from "@/types/posts.type";
import { Formik } from "formik";
import React from "react";

interface PostFormProps {
  post?: Post;
}

const INITIAL_VALUES = {
  caption: "",
  image_url: "",
};

export default function PostForm({ post }: PostFormProps) {
  const onSubmit = (values: unknown) => {};
  return (
    <Formik initialValues={INITIAL_VALUES} onSubmit={onSubmit}>
      {({ isSubmitting, handleSubmit, setFieldValue, errors, touched }) => {
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
            <AfnField label="Post image">
              <AfnInput type="file" disabled={isSubmitting} />
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
