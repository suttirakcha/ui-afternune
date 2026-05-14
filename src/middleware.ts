import { isTokenExpired } from "@/lib/jwt";
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = [
  "/create-post",
  "/create-community",
  "/messages",
  "/update-post",
  "/update-community",
  "/settings",
];
const authRoutes = ["/login", "/register", "/forgot-password"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.includes(route)
  );
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

  let isAuthenticated = !!accessToken && !isTokenExpired(accessToken);

  if (!isAuthenticated && refreshToken) {
    try {
      const refreshResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${refreshToken}`,
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      if (refreshResponse.ok) {
        const data = await refreshResponse.json();
        isAuthenticated = true;

        const response = buildRouteResponse(
          request,
          pathname,
          isAuthRoute,
          isProtectedRoute,
          true
        );

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
      } else {
        const response = buildRouteResponse(
          request,
          pathname,
          isAuthRoute,
          isProtectedRoute,
          false
        );
        response.cookies.delete("accessToken");
        response.cookies.delete("refreshToken");
        return response;
      }
    } catch {
      const response = buildRouteResponse(
        request,
        pathname,
        isAuthRoute,
        isProtectedRoute,
        false
      );
      response.cookies.delete("accessToken");
      response.cookies.delete("refreshToken");
      return response;
    }
  }

  return buildRouteResponse(
    request,
    pathname,
    isAuthRoute,
    isProtectedRoute,
    isAuthenticated
  );
}

function buildRouteResponse(
  request: NextRequest,
  pathname: string,
  isAuthRoute: boolean,
  isProtectedRoute: boolean,
  isAuthenticated: boolean
) {
  if (isAuthenticated && isAuthRoute) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!isAuthenticated && isProtectedRoute) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
