import {
  forgotPasswordSchema,
  loginSchema,
  registerSchema,
} from "@/schemas/auth.schema";
import * as Yup from "yup";

export enum AuthType {
  LOGIN = "Login to Afternune",
  REGISTER = "Register for Afternune",
  RESET_PASSWORD = "Reset password",
}

export type LoginFormValues = Yup.InferType<typeof loginSchema>;
export type RegisterFormValues = Yup.InferType<typeof registerSchema>;
export type ForgotPasswordFormValues = Yup.InferType<
  typeof forgotPasswordSchema
>;
