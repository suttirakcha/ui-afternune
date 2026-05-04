import { cookies } from "next/headers";

const PUBLIC_API_DOMAIN =
  process.env.PUBLIC_API_DOMAIN || "http://localhost:8000";

export async function handleFetch(url: string, options?: RequestInit) {
  const response = await fetch(`${PUBLIC_API_DOMAIN}/${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    cache: "no-store",
  });

  return response;
}

export async function handleFetchWithAuth(url: string, options?: RequestInit) {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const response = await handleFetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      ...options?.headers,
    },
  });

  return response;
}
