import { NextRequest, NextResponse } from "next/server";

// Set these in Vercel Env Vars AND locally in .env.local
const USER = process.env.BASIC_AUTH_USER || "areculateir";
const PASS = process.env.BASIC_AUTH_PASSWORD || "";

function unauthorized() {
  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      // This triggers the browser username/password prompt
      "WWW-Authenticate": 'Basic realm="Protected Area"',
      "Cache-Control": "no-store",
    },
  });
}

export function middleware(req: NextRequest) {
  // If you forgot to set a password, do NOT brick the site:
  // (Optional) You can change this to `return unauthorized()` if you prefer “fail closed”.
  if (!PASS) return NextResponse.next();

  const auth = req.headers.get("authorization");
  if (!auth?.startsWith("Basic ")) return unauthorized();

  const base64 = auth.slice("Basic ".length).trim();

  // Edge-safe base64 decode
  let decoded = "";
  try {
    decoded = atob(base64);
  } catch {
    return unauthorized();
  }

  const [user, pass] = decoded.split(":");

  if (user === USER && pass === PASS) {
    return NextResponse.next();
  }

  return unauthorized();
}

// IMPORTANT: don’t run auth on Next.js assets/static files
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:png|jpg|jpeg|svg|gif|webp|ico|css|js|map|txt|xml)$).*)",
  ],
};
