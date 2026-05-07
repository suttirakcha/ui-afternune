"use client";

import { Formik } from "formik";
import AfnField from "@/components/custom/AfnField";
import AfnInput from "@/components/custom/AfnInput";
import { Box, CssProperties, HStack, Text } from "@chakra-ui/react";
import { registerSchema } from "@/schemas/auth.schema";
import { register } from "@/services/auth.service";
import { RegisterFormValues } from "@/types/auth.type";
import { toaster } from "@/components/ui/toaster";
import { handleError } from "@/utils/handle-error";
import SubmitButton from "@/components/custom/SubmitButton";
import Link from "next/link";
import { useRouter } from "next/navigation";

const BOX_TEXT_FIELD = {
  display: "inline-flex",
  justifyContent: "center",
} satisfies CssProperties;

const INITIAL_VALUES = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function RegisterForm() {
  const router = useRouter();
  const onSubmit = async (values: RegisterFormValues) => {
    try {
      const response = await register(values);
      toaster.create({
        description: response.message,
      });
      router.push("/login");
    } catch (error: unknown) {
      handleError(error);
    }
  };
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={registerSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, isSubmitting, setFieldValue, handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit} className="form">
            <AfnField
              label="Username"
              error={errors.username}
              touched={touched.username}
            >
              <AfnInput
                type="text"
                name="username"
                placeholder="Enter your username"
                onChange={(e) => setFieldValue("username", e.target.value)}
                disabled={isSubmitting}
                error={!!(errors.username && touched.username)}
              />
            </AfnField>

            <AfnField
              label="Email"
              error={errors.email}
              touched={touched.email}
            >
              <AfnInput
                type="text"
                name="email"
                placeholder="Enter your email"
                onChange={(e) => setFieldValue("email", e.target.value)}
                disabled={isSubmitting}
                error={!!(errors.email && touched.email)}
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

            <AfnField
              label="Confirm password"
              error={errors.confirmPassword}
              touched={touched.confirmPassword}
            >
              <AfnInput
                type="password"
                name="confirmPassword"
                placeholder="Enter your confirm password"
                onChange={(e) =>
                  setFieldValue("confirmPassword", e.target.value)
                }
                disabled={isSubmitting}
                error={!!(errors.confirmPassword && touched.confirmPassword)}
              />
            </AfnField>

            <Box {...BOX_TEXT_FIELD}>
              <HStack textAlign={"center"}>
                <Text color={"var(--secondary)"} fontWeight={600}>
                  Already have an account?{" "}
                </Text>
                <Link href="/login" className="menu-links">
                  Login
                </Link>
              </HStack>
            </Box>

            <SubmitButton
              isSubmitting={isSubmitting}
              submitText="Register"
              submittingText="Registering..."
            />
          </form>
        );
      }}
    </Formik>
  );
}
