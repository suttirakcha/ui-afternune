"use client";

import AfnField from "@/components/custom/AfnField";
import AfnInput from "@/components/custom/AfnInput";
import SubmitButton from "@/components/custom/SubmitButton";
import { Formik } from "formik";

interface ResetPasswordFormProps {
  token: string;
}

const INITIAL_VALUES = {
  newPassword: "",
};

export default function ResetPasswordForm({ token }: ResetPasswordFormProps) {
  const onSubmit = (values: unknown) => {
    console.log(values);
  };
  return (
    <Formik initialValues={INITIAL_VALUES} onSubmit={onSubmit}>
      {({ handleSubmit, isSubmitting, errors, touched, setFieldValue }) => {
        return (
          <form onSubmit={handleSubmit} className="form">
            <AfnField
              label="New password"
              error={errors.newPassword}
              touched={touched.newPassword}
            >
              <AfnInput
                type="password"
                name="newPassword"
                placeholder="Enter your new password"
                disabled={isSubmitting}
                onChange={(e) => setFieldValue("newPassword", e.target.value)}
                error={!!(errors.newPassword && touched.newPassword)}
              />
            </AfnField>

            <SubmitButton
              isSubmitting={isSubmitting}
              submitText="Change password"
              submittingText="Changing password"
            />
          </form>
        );
      }}
    </Formik>
  );
}
