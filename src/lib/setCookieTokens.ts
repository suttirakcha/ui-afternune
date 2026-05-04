import "server-only";
import { cookies } from "next/headers";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";

export async function setCookieTokens(response: Response) {
  const cookieStore = await cookies();
  const setCookieHeaders = response.headers.getSetCookie();

  if (setCookieHeaders.length === 0) return;

  setCookieHeaders.forEach((cookieString) => {
    const parts = cookieString.split(";").map((p) => p.trim());

    const [nameValue, ...attrStrings] = parts;
    const [name, value] = nameValue.split("=");

    const options: Partial<ResponseCookie> = {
      path: "/",
      httpOnly: true,
      secure: true,
      sameSite: "lax",
    };

    attrStrings.forEach((attr) => {
      const [key, val] = attr.split("=");
      const lowerKey = key.toLowerCase();

      if (lowerKey === "max-age") options.maxAge = parseInt(val);
      if (lowerKey === "expires") options.expires = new Date(val);
      if (lowerKey === "path") options.path = val;
    });

    cookieStore.set(name, value, options);
  });
}

export async function clearCookieTokens(response: Response) {
  const cookieStore = await cookies();
  const setCookieHeaders = response.headers.getSetCookie();

  if (setCookieHeaders.length === 0) return;

  setCookieHeaders.forEach((cookieString) => {
    const parts = cookieString.split(";").map((p) => p.trim());

    const [nameValue, ...attrStrings] = parts;
    const [name, value] = nameValue.split("=");

    cookieStore.delete(name);
  });
}
