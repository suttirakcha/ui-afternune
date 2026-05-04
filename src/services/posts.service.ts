"use server";

import { handleFetch } from "@/lib/handleFetch";

export async function getPosts() {
  const response = await handleFetch("posts");

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message ?? "Failed to fetch posts");
  }

  const data = await response.json();
  return data;
}

export async function getPostById(id: string) {
  const response = await handleFetch(`posts/${id}`, {
    method: "GET",
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message ?? "Failed to fetch post");
  }

  const data = await response.json();
  return data;
}
