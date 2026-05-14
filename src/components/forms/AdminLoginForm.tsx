"use client";

import AfnField from "@/components/custom/AfnField";
import AfnInput from "@/components/custom/AfnInput";
import SubmitButton from "@/components/custom/SubmitButton";
import { loginSchema } from "@/schemas/auth.schema";
import { login } from "@/services/auth.service";
import { LoginFormValues } from "@/types/auth.type";
import { handleMessage } from "@/utils/handle-message";
import { Formik } from "formik";
import { useTranslations } from "next-intl";

const INITIAL_VALUES = {
  identifier: "",
  password: "",
};

export default function AdminLoginForm() {
  const t = useTranslations();
  const onSubmit = async (values: LoginFormValues) => {
    const response = await login(values);
    if (!response.success) {
      return handleMessage(t(response.message));
    }
    handleMessage(t(response.message));
  };
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={loginSchema}
      onSubmit={onSubmit}
    >
      {({
        handleSubmit,
        errors,
        isSubmitting,
        touched,
        setFieldValue,
        values,
      }) => (
        <form onSubmit={handleSubmit} className="form">
          <AfnField
            label="Username"
            error={errors.identifier}
            touched={touched.identifier}
          >
            <AfnInput
              type="text"
              name="identifier"
              placeholder="Enter your username"
              disabled={isSubmitting}
              value={values.identifier}
              onChange={(e) => setFieldValue("identifier", e.target.value)}
              error={!!(errors.identifier && touched.identifier)}
            />
          </AfnField>
          <AfnField
            label="Password"
            error={errors.password}
            touched={touched.password}
          >
            <AfnInput
              type="password"
              name="password"
              placeholder="Enter your password"
              disabled={isSubmitting}
              value={values.password}
              onChange={(e) => setFieldValue("password", e.target.value)}
              error={!!(errors.password && touched.password)}
            />
          </AfnField>

          <SubmitButton
            isSubmitting={isSubmitting}
            submitText="Login"
            submittingText="Logging in"
          />
        </form>
      )}
    </Formik>
  );
}
