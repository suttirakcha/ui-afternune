"use server";

import { handleFetch, handleFetchWithAuth } from "@/lib/handleFetch";
import {
  ForgotPasswordFormValues,
  LoginFormValues,
  RegisterFormValues,
} from "@/types/auth.type";
import { clearCookieTokens, setCookieTokens } from "@/lib/setCookieTokens";
import { revalidateUserOnSidebar } from "@/lib/revalidate";
import { User } from "@/types/users.type";

export async function login(values: LoginFormValues) {
  const response = await handleFetch("auth/login", {
    method: "POST",
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    const errorData = await response.json();
    return { success: false, message: errorData.message ?? "Login failed" };
  }

  const data = await response.json();
  await setCookieTokens(response);
  await revalidateUserOnSidebar();

  return { success: true, message: data.message };
}

export async function register(values: RegisterFormValues) {
  const response = await handleFetch("auth/register", {
    method: "POST",
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    const errorData = await response.json();
    return { success: false, message: errorData.message ?? "Register failed" };
  }

  const data = await response.json();
  return { success: true, message: data.message };
}

export async function getProfile(): Promise<User | null> {
  const response = await handleFetchWithAuth("auth/me", {
    next: { tags: ["user"] },
  });

  if (!response.ok) {
    return null;
  }

  const data = await response.json();
  return data;
}

export async function forgotPassword(values: ForgotPasswordFormValues) {
  const response = await handleFetch("auth/forgot-password", {
    method: "POST",
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    const errorData = await response.json();
    return {
      success: false,
      message: errorData.message ?? "Forgot password failed",
    };
  }

  const data = await response.json();
  return { success: true, message: data.message };
}

export async function logout() {
  const response = await handleFetchWithAuth("auth/logout", {
    method: "POST",
  });

  if (!response.ok) {
    const errorData = await response.json();
    return { success: false, message: errorData.message ?? "Logout failed" };
  }

  const data = await response.json();

  await clearCookieTokens(response);
  return { success: true, message: data.message };
}

export async function refresh() {
  await handleFetchWithAuth("auth/refresh", {
    method: "POST",
  });
}
