import { put, get } from "@vercel/blob";

export async function POST(request) {
  const { key, value } = await request.json();
  await put(key, value);
  return new Response(JSON.stringify({ success: true }), { status: 200 });
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get("key");
  const value = await get(key);
  return new Response(JSON.stringify({ value }), { status: 200 });
}