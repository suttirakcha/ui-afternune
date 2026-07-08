"use server";

import { handleFetchWithAuth } from "@/lib/handleFetch";

export async function getNotifications() {
  const response = await handleFetchWithAuth("notifications");

  if (!response.ok) {
    const errorData = await response.json();
    return {
      success: false,
      message: errorData.message ?? "Failed to fetch notifications",
    };
  }

  const data = await response.json();
  return { success: true, data };
}

export async function notifyUser(userId: string, values: { message: string }) {
  const response = await handleFetchWithAuth(`notifications/${userId}`, {
    method: "POST",
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    const errorData = await response.json();
    return {
      success: false,
      message: errorData.message ?? "Failed to notify user",
    };
  }

  const data = await response.json();
  return { success: true, message: data.message };
}
