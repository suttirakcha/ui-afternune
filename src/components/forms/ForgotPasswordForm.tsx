import { Formik } from "formik";
import SubmitButton from "@/components/custom/SubmitButton";
import AfnField from "@/components/custom/AfnField";
import AfnInput from "@/components/custom/AfnInput";
import { Box, CssProperties, Text } from "@chakra-ui/react";
import { ForgotPasswordFormValues } from "@/types/auth.type";
import { forgotPassword } from "@/services/auth.service";
import { handleError } from "@/utils/handle-error";
import { toaster } from "@/components/ui/toaster";

interface ForgotPasswordFormProps {
  onClickLogin: () => void;
}

const BOX_TEXT_FIELD = {
  display: "inline-flex",
  justifyContent: "center",
} satisfies CssProperties;

const INITIAL_VALUES = {
  email: "",
};

export default function ForgotPasswordForm({
  onClickLogin,
}: ForgotPasswordFormProps) {
  const onSubmit = async (values: ForgotPasswordFormValues) => {
    try {
      const response = await forgotPassword(values);
      toaster.create({
        description: response.message,
      });
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <Formik initialValues={INITIAL_VALUES} onSubmit={onSubmit}>
      {({ errors, touched, isSubmitting, handleSubmit, setFieldValue }) => {
        return (
          <form onSubmit={handleSubmit} className="form">
            <AfnField
              label="Email address"
              touched={touched.email}
              error={errors.email}
              helper="Your email will be sent for requesting to reset the password."
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
              <Text onClick={onClickLogin} className="menu-links">
                Back to Login
              </Text>
            </Box>

            <SubmitButton
              isSubmitting={isSubmitting}
              submitText="Reset password"
              submittingText="Resetting..."
            />
          </form>
        );
      }}
    </Formik>
  );
}
