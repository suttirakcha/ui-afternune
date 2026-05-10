"use server";

import { handleFetchWithAuth } from "@/lib/handleFetch";
import { ChatMessageValues } from "@/types/messages.type";

export async function getAllChatRooms() {
  const response = await handleFetchWithAuth("messages/all", {
    method: "GET",
    next: { tags: ["rooms"], revalidate: 0 },
  });

  if (!response.ok) {
    const errorData = await response.json();
    return {
      success: false,
      message: errorData.message ?? "Failed to fetch rooms",
    };
  }

  const text = await response.text();
  const data = text ? JSON.parse(text) : null;
  return { success: true, data };
}

export async function getChatRoomByReceiverId(receiver_id: string) {
  const response = await handleFetchWithAuth(
    `messages/receiver/${receiver_id}`,
    {
      method: "GET",
      next: { tags: ["messages"], revalidate: 0 },
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    return {
      success: false,
      message: errorData.message ?? "Failed to fetch messages",
    };
  }

  const text = await response.text();
  const data = text ? JSON.parse(text) : null;
  return data;
}

export async function sendMessageToReceiverId(
  receiver_id: string,
  values: ChatMessageValues
) {
  const response = await handleFetchWithAuth(
    `messages/receiver/${receiver_id}/send`,
    {
      method: "POST",
      body: JSON.stringify(values),
      next: { tags: ["messages"], revalidate: 0 },
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    return {
      success: false,
      message: errorData.message ?? "Failed to send message",
    };
  }

  const data = await response.json();
  return { success: true };
}
