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

    // ==========================================
    // VALIDATION
    // ==========================================

    if (!name || !email) {
      return Response.json(
        {
          success: false,
          message: "Name and email are required.",
        },
        { status: 400 }
      );
    }

    // ==========================================
    // SMTP CONFIG CHECK
    // ==========================================

    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASSWORD ||
      !process.env.CONTACT_EMAIL
    ) {
      console.error("Missing SMTP environment variables.");

      return Response.json(
        {
          success: false,
          message: "Email service is not configured correctly.",
        },
        { status: 500 }
      );
    }

    // ==========================================
    // SMTP TRANSPORTER
    // ==========================================

    const smtpPort = Number(process.env.SMTP_PORT || 587);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // ==========================================
    // VERIFY SMTP
    // ==========================================

    await transporter.verify();

    // ==========================================
    // SAFE CONTENT
    // ==========================================

    const safeName = String(name).trim();
    const safeEmail = String(email).trim();
    const safePhone = phone
      ? String(phone).trim()
      : "Not provided";

    const safeService = service
      ? String(service).trim()
      : "Not provided";

    const safeMessage = message
      ? String(message).trim()
      : "No message provided";

    // ==========================================
    // EMAIL HTML
    // ==========================================

    const emailHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />

  <title>New MarkitMe Inquiry</title>
</head>

<body
  style="
    margin:0;
    padding:0;
    background:#f1f3ed;
    font-family:Arial,Helvetica,sans-serif;
    color:#0c3b2e;
  "
>

  <!-- OUTER WRAPPER -->

  <table
    width="100%"
    cellpadding="0"
    cellspacing="0"
    border="0"
    style="
      width:100%;
      background:#f1f3ed;
      padding:35px 15px;
    "
  >

    <tr>
      <td align="center">

        <!-- EMAIL CONTAINER -->

        <table
          width="620"
          cellpadding="0"
          cellspacing="0"
          border="0"
          style="
            width:100%;
            max-width:620px;
            background:#ffffff;
            border-radius:22px;
            overflow:hidden;
            border:1px solid #e5ebe3;
          "
        >

          <!-- =====================================
               TOP ACCENT
          ====================================== -->

          <tr>
            <td
              style="
                height:6px;
                background:#ffba00;
                font-size:0;
                line-height:0;
              "
            >
              &nbsp;
            </td>
          </tr>


          <!-- =====================================
               HEADER
          ====================================== -->

          <tr>
            <td
              style="
                padding:30px 35px;
                background:#0c3b2e;
              "
            >

              <table
                width="100%"
                cellpadding="0"
                cellspacing="0"
                border="0"
              >

                <tr>

                  <!-- LOGO -->

                  <td
                    valign="middle"
                    style="
                      width:55%;
                    "
                  >

                    <a
                      href="https://markitme.ca"
                      target="_blank"
                      style="
                        text-decoration:none;
                      "
                    >

                      <img
                        src="https://web-markitme.vercel.app/_next/image?url=%2Fimages%2Flogo-light.png&w=384&q=75"
                        alt="MarkitMe"
                        width="165"
                        style="
                          display:block;
                          width:165px;
                          max-width:100%;
                          height:auto;
                          border:0;
                        "
                      />

                    </a>

                  </td>


                  <!-- LABEL -->

                  <td
                    align="right"
                    valign="middle"
                    style="
                      width:45%;
                    "
                  >

                    <span
                      style="
                        display:inline-block;
                        padding:7px 12px;
                        border-radius:30px;
                        background:#ffba00;
                        color:#0c3b2e;
                        font-size:10px;
                        font-weight:bold;
                        letter-spacing:1px;
                        text-transform:uppercase;
                      "
                    >
                      New Inquiry
                    </span>

                  </td>

                </tr>

              </table>

            </td>
          </tr>


          <!-- =====================================
               INTRO
          ====================================== -->

          <tr>
            <td
              style="
                padding:38px 35px 20px;
              "
            >

              <p
                style="
                  margin:0 0 10px;
                  color:#ffba00;
                  font-size:11px;
                  font-weight:bold;
                  letter-spacing:2px;
                  text-transform:uppercase;
                "
              >
                Website Contact Form
              </p>

              <h1
                style="
                  margin:0;
                  color:#0c3b2e;
                  font-size:30px;
                  line-height:1.15;
                  letter-spacing:-0.5px;
                "
              >
                You have a new project inquiry.
              </h1>

              <p
                style="
                  margin:14px 0 0;
                  color:#587064;
                  font-size:15px;
                  line-height:1.7;
                "
              >
                Someone has reached out through the
                MarkitMe website. Here are the details
                of their inquiry.
              </p>

            </td>
          </tr>


          <!-- =====================================
               CONTACT DETAILS CARD
          ====================================== -->

          <tr>
            <td
              style="
                padding:15px 35px 10px;
              "
            >

              <table
                width="100%"
                cellpadding="0"
                cellspacing="0"
                border="0"
                style="
                  background:#f1f3ed;
                  border:1px solid #e5ebe3;
                  border-radius:16px;
                "
              >

                <!-- NAME -->

                <tr>

                  <td
                    style="
                      padding:17px 18px;
                      border-bottom:1px solid #dfe5dc;
                    "
                  >

                    <span
                      style="
                        display:block;
                        color:#587064;
                        font-size:11px;
                        font-weight:bold;
                        text-transform:uppercase;
                        letter-spacing:1px;
                        margin-bottom:5px;
                      "
                    >
                      Name
                    </span>

                    <span
                      style="
                        color:#0c3b2e;
                        font-size:15px;
                        font-weight:bold;
                      "
                    >
                      ${safeName}
                    </span>

                  </td>

                </tr>


                <!-- EMAIL -->

                <tr>

                  <td
                    style="
                      padding:17px 18px;
                      border-bottom:1px solid #dfe5dc;
                    "
                  >

                    <span
                      style="
                        display:block;
                        color:#587064;
                        font-size:11px;
                        font-weight:bold;
                        text-transform:uppercase;
                        letter-spacing:1px;
                        margin-bottom:5px;
                      "
                    >
                      Email
                    </span>

                    <a
                      href="mailto:${safeEmail}"
                      style="
                        color:#0c3b2e;
                        font-size:15px;
                        font-weight:bold;
                        text-decoration:none;
                      "
                    >
                      ${safeEmail}
                    </a>

                  </td>

                </tr>


                <!-- PHONE -->

                <tr>

                  <td
                    style="
                      padding:17px 18px;
                      border-bottom:1px solid #dfe5dc;
                    "
                  >

                    <span
                      style="
                        display:block;
                        color:#587064;
                        font-size:11px;
                        font-weight:bold;
                        text-transform:uppercase;
                        letter-spacing:1px;
                        margin-bottom:5px;
                      "
                    >
                      Phone
                    </span>

                    <span
                      style="
                        color:#0c3b2e;
                        font-size:15px;
                        font-weight:bold;
                      "
                    >
                      ${safePhone}
                    </span>

                  </td>

                </tr>


                <!-- SERVICE -->

                <tr>

                  <td
                    style="
                      padding:17px 18px;
                    "
                  >

                    <span
                      style="
                        display:block;
                        color:#587064;
                        font-size:11px;
                        font-weight:bold;
                        text-transform:uppercase;
                        letter-spacing:1px;
                        margin-bottom:5px;
                      "
                    >
                      Service
                    </span>

                    <span
                      style="
                        display:inline-block;
                        padding:7px 11px;
                        border-radius:20px;
                        background:#ffba00;
                        color:#0c3b2e;
                        font-size:12px;
                        font-weight:bold;
                      "
                    >
                      ${safeService}
                    </span>

                  </td>

                </tr>

              </table>

            </td>
          </tr>


          <!-- =====================================
               MESSAGE
          ====================================== -->

          <tr>
            <td
              style="
                padding:25px 35px 10px;
              "
            >

              <p
                style="
                  margin:0 0 10px;
                  color:#0c3b2e;
                  font-size:15px;
                  font-weight:bold;
                "
              >
                Message
              </p>

              <table
                width="100%"
                cellpadding="0"
                cellspacing="0"
                border="0"
                style="
                  background:#ffffff;
                  border-left:4px solid #ffba00;
                  border-top:1px solid #e5ebe3;
                  border-right:1px solid #e5ebe3;
                  border-bottom:1px solid #e5ebe3;
                  border-radius:12px;
                "
              >

                <tr>

                  <td
                    style="
                      padding:18px;
                      color:#587064;
                      font-size:14px;
                      line-height:1.8;
                    "
                  >
                    ${safeMessage}
                  </td>

                </tr>

              </table>

            </td>
          </tr>


          <!-- =====================================
               CTA
          ====================================== -->

          <tr>
            <td
              align="center"
              style="
                padding:30px 35px 35px;
              "
            >

              <a
                href="mailto:${safeEmail}"
                style="
                  display:inline-block;
                  padding:14px 25px;
                  background:#ffba00;
                  color:#0c3b2e;
                  border-radius:30px;
                  font-size:13px;
                  font-weight:bold;
                  text-decoration:none;
                "
              >
                Reply to ${safeName}
              </a>

            </td>
          </tr>


          <!-- =====================================
               FOOTER
          ====================================== -->

          <tr>
            <td
              style="
                padding:25px 35px;
                background:#0c3b2e;
              "
            >

              <table
                width="100%"
                cellpadding="0"
                cellspacing="0"
                border="0"
              >

                <tr>

                  <td
                    style="
                      color:#f1f3ed;
                      font-size:13px;
                      line-height:1.6;
                    "
                  >

                    <strong
                      style="
                        color:#ffba00;
                      "
                    >
                      MarkitMe
                    </strong>

                    <br />

                    Strategy. Creativity.
                    Measurable Growth.

                  </td>

                  <td
                    align="right"
                    valign="top"
                  >

                    <a
                      href="https://markitme.ca"
                      target="_blank"
                      style="
                        color:#f1f3ed;
                        font-size:12px;
                        text-decoration:none;
                      "
                    >
                      markitme.ca
                    </a>

                  </td>

                </tr>

              </table>

            </td>
          </tr>


        </table>


        <!-- DISCLAIMER -->

        <p
          style="
            max-width:620px;
            margin:18px auto 0;
            text-align:center;
            color:#587064;
            font-size:10px;
            line-height:1.6;
          "
        >
          This email was generated from the MarkitMe
          website contact form.
        </p>

      </td>
    </tr>

  </table>

</body>
</html>
`;

    // ==========================================
    // SEND EMAIL
    // ==========================================

    await transporter.sendMail({
      from: `"MarkitMe Website" <${process.env.SMTP_USER}>`,

      to: process.env.CONTACT_EMAIL,

      replyTo: safeEmail,

      subject: `New Project Inquiry — ${safeName}`,

      html: emailHtml,

      text: `
New MarkitMe Website Inquiry

Name: ${safeName}
Email: ${safeEmail}
Phone: ${safePhone}
Service: ${safeService}

Message:
${safeMessage}

--
MarkitMe
https://markitme.ca
      `.trim(),
    });

    console.log(
      `Contact email sent successfully from ${safeEmail}`
    );

    return Response.json({
      success: true,
      message: "Your message has been sent successfully.",
    });

  } catch (error) {
    console.error(
      "CONTACT FORM ERROR:",
      error
    );

    return Response.json(
      {
        success: false,
        message:
          error?.message ||
          "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}