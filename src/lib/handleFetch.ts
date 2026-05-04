const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8000";

export async function handleFetch(url: string, options: RequestInit) {
  const response = await fetch(`${BACKEND_URL}/${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  return response;
}
