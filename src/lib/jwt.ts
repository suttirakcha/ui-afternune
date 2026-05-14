export function isTokenExpired(token: string): boolean {
  try {
    const payload = token.split(".")[1];

    const decoded = JSON.parse(
      Buffer.from(payload, "base64url").toString("utf-8")
    );

    if (!decoded.exp) return true;

    const isExpired = decoded.exp * 1000 < Date.now();
    return isExpired;
  } catch {
    return true;
  }
}
