"use server";

import { handleFetch } from "@/lib/handleFetch";

export async function getUsers() {
  const response = await handleFetch("users");

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message ?? "Failed to fetch users");
  }

  const data = await response.json();
  return data;
}

export async function getUserById(userId: string) {
  const response = await handleFetch(`users/${userId}`);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message ?? "Failed to fetch user");
  }

  const data = await response.json();
  return data;
}
