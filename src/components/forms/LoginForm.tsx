"use client";

import { Formik } from "formik";
import AfnInput from "@/components/custom/AfnInput";
import AfnField from "@/components/custom/AfnField";
import { Box, CssProperties, HStack, Text } from "@chakra-ui/react";
import { LoginFormValues } from "@/types/auth.type";
import { login } from "@/services/auth.service";
import { loginSchema } from "@/schemas/auth.schema";
import { handleMessage } from "@/utils/handle-message";
import SubmitButton from "@/components/custom/SubmitButton";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";

const BOX_TEXT_FIELD = {
  display: "inline-flex",
  justifyContent: "center",
} satisfies CssProperties;

const INITIAL_VALUES = {
  identifier: "",
  password: "",
};

export default function LoginForm() {
  const t = useTranslations();
  const router = useRouter();
  const onSubmit = async (values: LoginFormValues) => {
    const response = await login(values);
    if (!response.success) {
      handleMessage(t(response.message));
      return;
    }
    handleMessage(t(response.message));
    router.push("/");
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={loginSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, isSubmitting, setFieldValue, handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit} className="form">
            <AfnField
              label="Username or email"
              error={errors.identifier}
              touched={touched.identifier}
            >
              <AfnInput
                type="text"
                name="identifier"
                placeholder="Enter your username or email"
                onChange={(e) => setFieldValue("identifier", e.target.value)}
                disabled={isSubmitting}
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
                onChange={(e) => setFieldValue("password", e.target.value)}
                disabled={isSubmitting}
                error={!!(errors.password && touched.password)}
              />
            </AfnField>

            <Box {...BOX_TEXT_FIELD}>
              <Link href="/forgot-password" className="menu-links">
                {t("Forgot password?")}
              </Link>
            </Box>

            <Box {...BOX_TEXT_FIELD}>
              <HStack textAlign={"center"}>
                <Text color={"var(--secondary)"} fontWeight={600}>
                  {t("Don't have an account")}
                </Text>
                <Link href="/register" className="menu-links">
                  {t("Register")}
                </Link>
              </HStack>
            </Box>

            <SubmitButton
              isSubmitting={isSubmitting}
              submitText="Login"
              submittingText="Logging in"
            />
          </form>
        );
      }}
    </Formik>
  );
}
