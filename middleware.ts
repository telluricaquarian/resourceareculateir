import { NextRequest, NextResponse } from "next/server";

const USER = process.env.RESOURCE_GATE_USER;
const PASS = process.env.RESOURCE_GATE_PASS;
const ENABLED = (process.env.RESOURCE_GATE_ENABLED ?? "true").toLowerCase() === "true";

function unauthorized() {
  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Areculateir Resources"',
    },
  });
}

export function middleware(req: NextRequest) {
  if (!ENABLED) return NextResponse.next();

  // Fail closed (so you don't accidentally expose the site)
  if (!USER || !PASS) {
    return new NextResponse(
      "Password gate misconfigured: set RESOURCE_GATE_USER and RESOURCE_GATE_PASS in Vercel Environment Variables.",
      { status: 500 }
    );
  }

  const auth = req.headers.get("authorization");
  if (!auth?.startsWith("Basic ")) return unauthorized();

  try {
    const base64 = auth.split(" ")[1] ?? "";
    const decoded = atob(base64);
    const idx = decoded.indexOf(":");
    const u = idx >= 0 ? decoded.slice(0, idx) : "";
    const p = idx >= 0 ? decoded.slice(idx + 1) : "";

    if (u === USER && p === PASS) return NextResponse.next();
  } catch {
    // fall through to unauthorized
  }

  return unauthorized();
}

// Run on all pages, exclude Next internals/static assets
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
};
