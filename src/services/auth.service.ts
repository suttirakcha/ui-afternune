import { LoginFormValues } from "@/types/auth.type";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8000";

export async function login(values: LoginFormValues) {
  const response = await fetch(`${BACKEND_URL}/auth/login`, {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Login failed");
  }

  const data = await response.json();
  return data;
}
