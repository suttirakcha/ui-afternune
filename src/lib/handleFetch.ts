const PUBLIC_API_DOMAIN =
  process.env.PUBLIC_API_DOMAIN || "http://localhost:8000";

export async function handleFetch(url: string, options?: RequestInit) {
  const response = await fetch(`${PUBLIC_API_DOMAIN}/${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  return response;
}
