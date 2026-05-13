"use server";

import { handleFetch, handleFetchWithAuth } from "@/lib/handleFetch";
import { PostFieldValues } from "@/types/posts.type";

export async function getPosts(limit?: number) {
  const postUrl = limit ? `posts?limit=${limit}` : "posts";
  const response = await handleFetch(postUrl, {
    method: "GET",
    next: { tags: ["posts"], revalidate: 0 },
  });

  if (!response.ok) {
    const errorData = await response.json();
    return {
      success: false,
      message: errorData.message ?? "Failed to fetch posts",
    };
  }

  const data = await response.json();
  return data;
}

export async function getPostById(id: string) {
  const response = await handleFetch(`posts/${id}`, {
    method: "GET",
    next: { tags: ["posts"], revalidate: 0 },
  });

  if (!response.ok) {
    const errorData = await response.json();
    return {
      success: false,
      message: errorData.message ?? "Failed to fetch post",
    };
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

export async function updatePost(id: string, values: PostFieldValues) {
  const response = await handleFetchWithAuth(`posts/${id}`, {
    method: "PATCH",
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message ?? "Failed to update post");
  }

  const data = await response.json();
  return data;
}

export async function deletePost(id: string) {
  const response = await handleFetchWithAuth(`posts/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message ?? "Failed to delete post");
  }

  const data = await response.json();
  return data;
}
