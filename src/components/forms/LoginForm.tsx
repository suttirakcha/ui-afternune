import { Formik } from "formik";
import AfnInput from "@/components/custom/AfnInput";
import AfnField from "@/components/custom/AfnField";
import AfnButton from "@/components/custom/AfnButton";
import { Box, HStack, Spinner, Text } from "@chakra-ui/react";
import React from "react";

interface LoginFormProps {
  onClickResetPassword: () => void;
  onClickRegister: () => void;
}

const BOX_TEXT_FIELD = {
  display: "inline-flex",
  justifyContent: "center",
} satisfies React.CSSProperties;

export default function LoginForm({
  onClickRegister,
  onClickResetPassword,
}: LoginFormProps) {
  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  return (
    <Formik
      initialValues={{
        identifier: "",
        password: "",
      }}
      onSubmit={onSubmit}
    >
      {({
        errors,
        touched,
        values,
        isSubmitting,
        setFieldValue,
        handleSubmit,
      }) => {
        const fieldProps = (key: keyof typeof values) => {};
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
