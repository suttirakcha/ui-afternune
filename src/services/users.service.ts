"use server";

import { handleFetch, handleFetchWithAuth } from "@/lib/handleFetch";
import { UpdateProfileFormValues } from "@/types/users.type";

export async function getUsers(search?: string) {
  const userUrl = `users${search ? `?search=${search}` : ""}`;
  const response = await handleFetch(userUrl);

  if (!response.ok) {
    const errorData = await response.json();
    return errorData.message ?? "Failed to fetch users";
  }

  const data = await response.json();
  return data;
}

export async function getUserById(userId: string) {
  const response = await handleFetch(`users/${userId}`);

  if (!response.ok) {
    const errorData = await response.json();
    return errorData.message ?? "Failed to fetch user";
  }

  const data = await response.json();
  return data;
}

export async function getFollowedUser(userId: string) {
  const response = await handleFetchWithAuth(`users/${userId}/followed`, {
    next: { tags: ["followed"], revalidate: 0 },
  });

  if (!response.ok) {
    const errorData = await response.json();
    return {
      success: false,
      message: errorData.message ?? "Failed to fetch the follow",
    };
  }

  const text = await response.text();
  const data = text ? JSON.parse(text) : null;
  return data;
}

export async function followUser(userId: string) {
  const response = await handleFetchWithAuth(`users/${userId}/follow`, {
    method: "POST",
  });

  if (!response.ok) {
    const errorData = await response.json();
    return {
      success: false,
      message: errorData.message ?? "Failed to follow",
    };
  }
}

export async function unfollowUser(userId: string) {
  const response = await handleFetchWithAuth(`users/${userId}/unfollow`, {
    method: "DELETE",
  });

  if (!response.ok) {
    const errorData = await response.json();
    return {
      success: false,
      message: errorData.message ?? "Failed to unfollow",
    };
  }

  const data = await response.json();
  return {
    success: true,
    message: data.message,
  };
}

export async function updateUser(values: UpdateProfileFormValues) {
  const response = await handleFetchWithAuth("users", {
    method: "PATCH",
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    const errorData = await response.json();
    return {
      success: false,
      message: errorData.message ?? "Failed to update user",
    };
  }

  const data = await response.json();
  return { success: true, message: data.message };
}

export async function createUserProfile(values: UpdateProfileFormValues) {
  const response = await handleFetchWithAuth("/users", {
    method: "PATCH",
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    const errorData = await response.json();
    return {
      success: false,
      message: errorData.message ?? "Failed to update user",
    };
  }

  return { success: true };
}
