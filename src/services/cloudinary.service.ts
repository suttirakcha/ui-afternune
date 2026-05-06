"use server";

import { handleFetch } from "@/lib/handleFetch";

export async function uploadImage(formData: FormData) {
  const response = await handleFetch("image/upload", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message ?? "Failed to upload image");
  }

  const data = await response.json();
  return data;
}
