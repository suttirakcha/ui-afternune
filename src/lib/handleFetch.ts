import { cookies } from "next/headers";

const NEXT_PUBLIC_API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export async function handleFetch(url: string, options?: RequestInit) {
  const isFormData = options?.body instanceof FormData;
  const response = await fetch(`${NEXT_PUBLIC_API_URL}/${url}`, {
    ...options,
    headers: {
      ...(!isFormData && { "Content-Type": "application/json" }),
      ...options?.headers,
    },
    cache: "no-store",
    credentials: "include",
  });

  return response;
}

export async function handleFetchWithAuth(url: string, options?: RequestInit) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  const response = await handleFetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      ...options?.headers,
    },
  });

  return response;
}
