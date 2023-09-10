import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '@/server';
import { NextResponse } from 'next/server';

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => ({})
  })

export async function OPTIONS(request: Request) {
  const allowedOrigin = request.headers.get("origin");
  const response = new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": allowedOrigin || "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers":
        "Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version",
      "Access-Control-Max-Age": "86400",
    },
  });

  return response;
}

export { handler as GET, handler as POST };
