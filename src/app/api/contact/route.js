import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      service,
      message,
    } = body;

    if (!name || !email) {
      return Response.json(
        {
          success: false,
          message: "Name and email are required.",
        },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"MarkitMe Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,

      subject: `New Website Inquiry from ${name}`,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Website Inquiry</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>

          <p><strong>Service:</strong> ${service || "Not provided"}</p>

          <p><strong>Message:</strong></p>

          <p>
            ${message || "No message provided"}
          </p>
        </div>
      `,
    });

    return Response.json({
      success: true,
      message: "Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("CONTACT FORM ERROR:", error);

    return Response.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}