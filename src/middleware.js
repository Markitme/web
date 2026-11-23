import { NextResponse } from "next/server";

export function middleware(request) {
  const accept = request.headers.get("accept") || "";
  const requestsMarkdown =
    accept.includes("text/markdown") ||
    accept.includes("text/x-markdown");

  if (!requestsMarkdown) {
    return NextResponse.next();
  }

  const response = NextResponse.rewrite(
    new URL("/llms.md", request.url),
  );

  response.headers.set("Content-Type", "text/markdown; charset=utf-8");
  response.headers.set("Vary", "Accept");
  response.headers.set(
    "Link",
    '</llms.md>; rel="alternate"; type="text/markdown"; title="Markdown", </llms.txt>; rel="alternate"; type="text/plain"; title="LLMs.txt"',
  );

  return response;
}

export const config = {
  matcher: "/",
};
