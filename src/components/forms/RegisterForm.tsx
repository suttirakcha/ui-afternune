import { Formik } from "formik";
import AfnField from "@/components/custom/AfnField";
import AfnInput from "@/components/custom/AfnInput";
import AfnButton from "@/components/custom/AfnButton";
import { Box, HStack, Spinner, Text } from "@chakra-ui/react";
import { registerSchema } from "@/schemas/auth.schema";

interface RegisterFormProps {
  onClickLogin: () => void;
}

const BOX_TEXT_FIELD = {
  display: "inline-flex",
  justifyContent: "center",
} satisfies React.CSSProperties;

export default function RegisterForm({ onClickLogin }: RegisterFormProps) {
  const onSubmit = (data: unknown) => {
    console.log(data);
  };
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
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
                placeholder="Enter your confirmPassword"
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
                <Text onClick={onClickLogin} className="menu-links">
                  Login
                </Text>
              </HStack>
            </Box>

            <AfnButton type="submit" disabled={isSubmitting} display={"flex"}>
              {isSubmitting ? <Spinner /> : null}
              {isSubmitting ? "Registering..." : "Register"}
            </AfnButton>
          </form>
        );
      }}
    </Formik>
  );
}
