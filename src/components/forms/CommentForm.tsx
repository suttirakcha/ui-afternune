"use client";

import AfnButton from "@/components/custom/AfnButton";
import AfnInput from "@/components/custom/AfnInput";
import { commentSchema } from "@/schemas/posts.schema";
import { addComment } from "@/services/comments.service";
import { CommentFieldValues, Post } from "@/types/posts.type";
import { handleMessage } from "@/utils/handle-message";
import { Box, Spinner } from "@chakra-ui/react";
import { Formik, FormikHelpers } from "formik";
import { useTranslations } from "next-intl";
import { LuSend } from "react-icons/lu";

interface CommentFormProps {
  post: Post;
}

const INITIAL_VALUES = {
  detail: "",
};

const SEND_BTN_STYLES = {
  bgColor: "transparent!",
  color: "var(--primary)",
  p: 0,
  position: "absolute",
  top: 0,
  right: 0,
};

export default function CommentForm({ post }: CommentFormProps) {
  const t = useTranslations();
  const onSubmit = async (
    values: CommentFieldValues,
    actions: FormikHelpers<CommentFieldValues>
  ) => {
    const response = await addComment(post._id, values);
    if (!response?.success) {
      handleMessage(response?.message);
      return;
    }
    actions.setFieldValue("detail", "");
  };
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={onSubmit}
      validationSchema={commentSchema}
    >
      {({ setFieldValue, isSubmitting, handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Box position="relative">
              <AfnInput
                placeholder={t("Write your comment")}
                onChange={(e) => setFieldValue("detail", e.target.value)}
              />
              <AfnButton
                {...SEND_BTN_STYLES}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Spinner />
                ) : (
                  <LuSend className="submit-icon" />
                )}
                {t("Send")}
              </AfnButton>
            </Box>
          </form>
        );
      }}
    </Formik>
  );
}
