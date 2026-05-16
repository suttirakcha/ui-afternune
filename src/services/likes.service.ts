"use server";

import { handleFetchWithAuth } from "@/lib/handleFetch";

export async function likePost(postId: string) {
  const response = await handleFetchWithAuth(`posts/${postId}/like`, {
    method: "POST",
  });

  if (!response.ok) {
    const errorData = await response.json();
    return {
      success: false,
      message: errorData.message ?? "Failed to like post",
    };
  }

  return { success: true };
}

export async function unlikePost(postId: string) {
  const response = await handleFetchWithAuth(`posts/${postId}/unlike`, {
    method: "DELETE",
  });

  if (!response.ok) {
    const errorData = await response.json();
    return {
      success: false,
      message: errorData.message ?? "Failed to unlike post",
    };
  }

  return { success: true };
}
