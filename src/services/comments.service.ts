"use server";

import { handleFetch } from "@/lib/handleFetch";

export async function getCommentsByPostId(postId: string) {
  const response = await handleFetch(`posts/${postId}/comments`);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message ?? "Failed to fetch comments");
  }

  const data = await response.json();
  return data;
}
