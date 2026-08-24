import * as Yup from "yup";

export const loginSchema = Yup.object({
  identifier: Yup.string().required("Username or email is a required field"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is a required field"),
});

export const registerSchema = Yup.object({
  username: Yup.string().required("Username is a required field"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is a required field"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[@$!%*#?&]/,
      "Password must contain at least one special character"
    )
    .required("Password is a required field"),
  confirmPassword: Yup.string().required(
    "Confirm password is a required field"
  ),
});

export const forgotPasswordSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is a required field"),
});

export const resetPasswordSchema = Yup.object({
  newPassword: Yup.string().required("New password is a required field"),
});
