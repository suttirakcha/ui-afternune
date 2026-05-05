import { isTokenExpired } from "@/lib/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;

  const response = NextResponse.next();

  if (!accessToken || isTokenExpired(accessToken!)) {
    try {
      const refreshResponse = await fetch(
        `${process.env.PUBLIC_API_DOMAIN}/auth/refresh`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${refreshToken}`,
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      if (!refreshResponse.ok) {
        response.cookies.delete("accessToken");
        response.cookies.delete("refreshToken");
        return response;
      }

      const data = await refreshResponse.json();

      response.cookies.set("accessToken", data.access_token, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/",
      });
      response.cookies.set("refreshToken", data.refresh_token, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/",
        maxAge: 7 * 30 * 24 * 60 * 60,
      });
      return response;
    } catch (error) {
      console.log("error", error);
      response.cookies.delete("accessToken");
      response.cookies.delete("refreshToken");
      return response;
    }
  }
}
