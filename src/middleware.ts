import { NextRequest, NextResponse } from "next/server";
import { getLocale, pathnameHasLocale } from "./lib/locale";

export function middleware(request: NextRequest) {
    // Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl;

    if (pathname.match(/^\/favicon\.ico$/)) return;

    // If begin with /public/, then remove /public from the pathname
    // e.g. incoming request is /public/docs/get-started
    // The new URL is now /docs/get-started
    const publicMatch = pathname.match(/^\/public\/(.+)$/);
    if (publicMatch) {
        const url = request.nextUrl.clone();
        url.pathname = `/${publicMatch[1]}`;
        return NextResponse.rewrite(url);
    }

    const hasLocale = pathnameHasLocale(pathname);
    if (hasLocale) return;

    // Redirect if there is no locale
    const locale = getLocale(pathname);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    // e.g. incoming request is /docs/get-started
    // The new URL is now /en/docs/get-started
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        "/((?!_next).*)",
    ],
};
