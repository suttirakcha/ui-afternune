import { handleFetch } from "@/lib/handleFetch";
import { LoginFormValues, RegisterFormValues } from "@/types/auth.type";

export async function login(values: LoginFormValues) {
  const response = await handleFetch("auth/login", {
    method: "POST",
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Login failed");
  }

  const data = await response.json();
  return data;
}

export async function register(values: RegisterFormValues) {
  const response = await handleFetch("auth/register", {
    method: "POST",
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Register failed");
  }

  const data = await response.json();
  return data;
}
