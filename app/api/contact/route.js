import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();

  // Configure your transporter (example for Gmail)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // replace with your email
      pass: process.env.EMAIL_PASS,    // use an App Password, not your main password
    },
  });


  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER, // your receiving email
      subject: `Portfolio Contact from ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}