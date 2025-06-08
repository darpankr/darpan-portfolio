
export async function GET() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DARPAN_API_URL}`, {
    headers: {
      "Content-Type": "application/json",}});
  if (!res.ok) return Response.json({ error: "Failed to fetch config darpan" }, { status: 500 });
  const data = await res.json();
  return Response.json(data);
}