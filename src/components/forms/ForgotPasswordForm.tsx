"use client";

import { Formik } from "formik";
import SubmitButton from "@/components/custom/SubmitButton";
import AfnField from "@/components/custom/AfnField";
import AfnInput from "@/components/custom/AfnInput";
import { Box, CssProperties, Text } from "@chakra-ui/react";
import { ForgotPasswordFormValues } from "@/types/auth.type";
import { forgotPassword } from "@/services/auth.service";
import { handleMessage } from "@/utils/handle-message";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { forgotPasswordSchema } from "@/schemas/auth.schema";

const BOX_TEXT_FIELD = {
  display: "inline-flex",
  justifyContent: "center",
} satisfies CssProperties;

const INITIAL_VALUES = {
  email: "",
};

export default function ForgotPasswordForm() {
  const t = useTranslations();
  const onSubmit = async (values: ForgotPasswordFormValues) => {
    const response = await forgotPassword(values);
    if (!response.success) {
      handleMessage(t(response.message));
      return;
    }
    handleMessage(t(response.message));
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={onSubmit}
      validationSchema={forgotPasswordSchema}
    >
      {({ errors, touched, isSubmitting, handleSubmit, setFieldValue }) => {
        return (
          <form onSubmit={handleSubmit} className="form">
            <AfnField
              label="Email address"
              touched={touched.email}
              error={errors.email}
              helper="Your email will be sent for requesting to reset the password"
            >
              <AfnInput
                name="email"
                disabled={isSubmitting}
                error={!!(errors.email && touched.email)}
                placeholder="Enter your email address"
                onChange={(e) => setFieldValue("email", e.target.value)}
              />
            </AfnField>

            <Box {...BOX_TEXT_FIELD}>
              <Link href="/login" className="menu-links">
                {t("Back to login")}
              </Link>
            </Box>

            <SubmitButton
              isSubmitting={isSubmitting}
              submitText="Reset password"
              submittingText="Resetting password"
            />
          </form>
        );
      }}
    </Formik>
  );
}
