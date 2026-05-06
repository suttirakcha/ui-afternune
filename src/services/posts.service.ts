"use server";

import { handleFetch, handleFetchWithAuth } from "@/lib/handleFetch";
import { PostFieldValues } from "@/types/posts.type";

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

export async function createPost(values: PostFieldValues) {
  const response = await handleFetchWithAuth("posts", {
    method: "POST",
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message ?? "Failed to create post");
  }

  const data = await response.json();
  return data;
}
