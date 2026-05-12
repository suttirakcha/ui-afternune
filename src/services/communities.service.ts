"use server";

import { handleFetch, handleFetchWithAuth } from "@/lib/handleFetch";
import { CommunityFieldValues } from "@/types/communities.type";

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

export async function getCommunityById(communityId: string) {
  const response = await handleFetch(`communities/${communityId}`);
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

export async function getCommunityMembers(communityId: string) {
  const response = await handleFetchWithAuth(
    `communities/${communityId}/members`,
    {
      next: { tags: ["community"], revalidate: 0 },
    }
  );
  if (!response.ok) {
    const errorData = await response.json();
    return {
      success: false,
      message: errorData.message ?? "Failed to fetch community members",
    };
  }

  const text = await response.text();
  const data = text ? JSON.parse(text) : null;
  return data;
}

export async function joinCommunity(communityId: string) {
  const response = await handleFetchWithAuth(
    `communities/${communityId}/join`,
    {
      method: "POST",
    }
  );
  if (!response.ok) {
    const errorData = await response.json();
    return {
      success: false,
      message: errorData.message ?? "Failed to join community",
    };
  }

  return { success: true };
}

export async function leaveCommunity(communityId: string) {
  const response = await handleFetchWithAuth(
    `communities/${communityId}/leave`,
    {
      method: "DELETE",
    }
  );
  if (!response.ok) {
    const errorData = await response.json();
    return {
      success: false,
      message: errorData.message ?? "Failed to leave community",
    };
  }

  const data = await response.json();
  return { success: true, message: data.message };
}

export async function createCommunity(values: CommunityFieldValues) {
  const response = await handleFetchWithAuth("communities", {
    method: "POST",
    body: JSON.stringify(values),
  });
  if (!response.ok) {
    const errorData = await response.json();
    return {
      success: false,
      message: errorData.message ?? "Failed to create community",
    };
  }

  const data = await response.json();
  return { success: true, message: data.message };
}

export async function updateCommunity(
  communityId: string,
  values: CommunityFieldValues
) {
  const response = await handleFetchWithAuth(`communities/${communityId}`, {
    method: "PATCH",
    body: JSON.stringify(values),
  });
  if (!response.ok) {
    const errorData = await response.json();
    return {
      success: false,
      message: errorData.message ?? "Failed to update community",
    };
  }

  const data = await response.json();
  return { success: true, message: data.message };
}
