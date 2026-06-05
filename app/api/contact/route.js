// app/api/contact/route.js
// Proxies contact form submissions to Spring Boot
// Replaces the old nodemailer approach

export async function POST(req) {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080";

  try {
    const body = await req.json();

    const res = await fetch(`${backendUrl}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const json = await res.json();

    if (!res.ok) {
      // Spring Boot returned validation errors or bad request
      return Response.json(
        {
          success: false,
          error: json.message || "Failed to send message",
          errors: json.errors,
        },
        { status: res.status }
      );
    }

    return Response.json({ success: true, message: json.message });
  } catch (error) {
    console.error("Contact form error:", error.message);
    return Response.json(
      { success: false, error: "An error occurred. Please try again." },
      { status: 500 }
    );
  }
}