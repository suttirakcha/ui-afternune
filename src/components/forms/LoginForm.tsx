import { Formik } from "formik";
import AfnInput from "@/components/custom/AfnInput";
import AfnField from "@/components/custom/AfnField";
import AfnButton from "@/components/custom/AfnButton";
import { Box, HStack, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import { toaster } from "@/components/ui/toaster";
import { LoginFormValues } from "@/types/auth.type";
import { login } from "@/services/auth.service";
import { loginSchema } from "@/schemas/auth.schema";
import { handleError } from "@/utils/handle-error";

interface LoginFormProps {
  onClickResetPassword: () => void;
  onClickRegister: () => void;
}

const BOX_TEXT_FIELD = {
  display: "inline-flex",
  justifyContent: "center",
} satisfies React.CSSProperties;

const INITIAL_VALUES = {
  identifier: "",
  password: "",
};

export default function LoginForm({
  onClickRegister,
  onClickResetPassword,
}: LoginFormProps) {
  const onSubmit = async (values: LoginFormValues) => {
    try {
      const response = await login(values);
      toaster.create({
        description: response.message,
      });
    } catch (error: unknown) {
      handleError(error);
    }
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
              <Text onClick={onClickResetPassword} className="menu-links">
                Forgot password?
              </Text>
            </Box>

            <Box {...BOX_TEXT_FIELD}>
              <HStack textAlign={"center"}>
                <Text color={"var(--secondary)"} fontWeight={600}>
                  Don&apos;t have an account?{" "}
                </Text>
                <Text onClick={onClickRegister} className="menu-links">
                  Register
                </Text>
              </HStack>
            </Box>

            <AfnButton type="submit" disabled={isSubmitting} display={"flex"}>
              {isSubmitting ? <Spinner /> : null}
              {isSubmitting ? "Logging in..." : "Login"}
            </AfnButton>
          </form>
        );
      }}
    </Formik>
  );
}
