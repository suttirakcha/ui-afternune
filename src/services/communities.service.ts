"use server";

import { handleFetch } from "@/lib/handleFetch";

export async function getCommunities() {
  const response = await handleFetch("communities");
  if (!response.ok) {
    const errorData = await response.json();
    return {
      success: false,
      message: errorData.message ?? "Failed to fetch communities",
    };
  }

  const data = await response.json();
  return data;
}

export async function getCommunityById(id: string) {
  const response = await handleFetch(`communities/${id}`);
  if (!response.ok) {
    const errorData = await response.json();
    return {
      success: false,
      message: errorData.message ?? "Failed to fetch community",
    };
  }

  const data = await response.json();
  return data;
}
