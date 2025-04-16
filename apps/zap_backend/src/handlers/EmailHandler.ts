// EmailHandler.ts
import nodemailer from "nodemailer";
import { Apiresponse } from "@/utils/Response";
import { Request, Response } from "express";

export class EmailHandler {
  static async sendEmail(req: Request, res: Response) {
    try {
      const { to, subject, text } = req.body;

      // Create a transporter
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // Send the email
      const info = await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to,
        subject,
        text,
      });

      Apiresponse.success(res, info, "Email sent successfully");
    } catch (error) {
      Apiresponse.error(res, "Failed to send email", 500, error);
    }
  }
}
