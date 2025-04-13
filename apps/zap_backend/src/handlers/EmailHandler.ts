// EmailHandler.ts
import nodemailer from "nodemailer";

export async function sendEmailHandler(data: any): Promise<any> {
  try {
    // Configure the transporter (using Gmail as an example)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER|| "yarramallaajay@gmail.com",
        pass: process.env.EMAIL_PASS || "niqd hbqt pbyd ktbe",

      },
    });

    // Setup email options
    const mailOptions = {
      from: data.from,
      to: data.to,     
      subject: data.subject,
      text: data.body, 
      cc: data.cc,
      bcc: data.bcc,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("[EmailHandler] Email sent:", info.response);

    return { message: "Email sent successfully", info };
  } catch (error) {
    console.error("[EmailHandler] Error sending email:", error);
    throw error;
  }
}
