"use client";

import AfnButton from "@/components/custom/AfnButton";
import AfnInput from "@/components/custom/AfnInput";
import { commentSchema } from "@/schemas/posts.schema";
import { addComment } from "@/services/comments.service";
import { CommentFieldValues, Post } from "@/types/posts.type";
import { handleError } from "@/utils/handle-error";
import { Box, Spinner } from "@chakra-ui/react";
import { Formik, FormikHelpers } from "formik";
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
  const onSubmit = async (
    values: CommentFieldValues,
    actions: FormikHelpers<CommentFieldValues>
  ) => {
    try {
      await addComment(post._id, values);
      actions.setFieldValue("detail", "");
    } catch (error) {
      handleError(error);
    }
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
                placeholder={"Write your comment"}
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
                Send
              </AfnButton>
            </Box>
          </form>
        );
      }}
    </Formik>
  );
}
