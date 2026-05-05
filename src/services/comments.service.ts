"use server";

import { handleFetch, handleFetchWithAuth } from "@/lib/handleFetch";
import { CommentFieldValues } from "@/types/posts.type";

export async function getCommentsByPostId(postId: string) {
  const response = await handleFetch(`posts/${postId}/comments`);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message ?? "Failed to fetch comments");
  }

  const data = await response.json();
  return data;
}

export async function addComment(postId: string, values: CommentFieldValues) {
  const response = await handleFetchWithAuth(`posts/${postId}/comment`, {
    method: "POST",
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message ?? "Failed to comment");
  }

  // const data = await response.json();
  // return data;
}
