import { NextResponse } from "next/server";

const allowedOrigin = process.env.ALLOWED_ORIGIN ?? process.env.NEXT_PUBLIC_APP_URL ?? "*";

function corsHeaders() {
  return {
    "access-control-allow-origin": allowedOrigin,
    "access-control-allow-methods": "GET,POST,OPTIONS",
    "access-control-allow-headers": "content-type,bypass-tunnel-reminder"
  };
}

export function json(data: unknown, init?: ResponseInit) {
  return NextResponse.json(data, {
    ...init,
    headers: {
      ...corsHeaders(),
      ...init?.headers
    }
  });
}

export function options() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders()
  });
}
