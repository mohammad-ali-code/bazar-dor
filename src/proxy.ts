import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const isProtectedProduct =
        pathname.startsWith("/product/") &&
        pathname.split("/").filter(Boolean).length >= 4;

    const isProtectedProfile = pathname.startsWith("/profile");

    if (isProtectedProduct || isProtectedProfile) {
        const sessionCookie = getSessionCookie(request);

        if (!sessionCookie) {
            return NextResponse.redirect(new URL("/sign-in", request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/product/:path*", "/profile/:path*"],
};
