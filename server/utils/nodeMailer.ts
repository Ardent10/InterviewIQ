import * as dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

import nodemailer, { TransportOptions } from "nodemailer";

const { MAIL_ID, MAIL_HOST, MAIL_PORT,MAIL_PASSWORD } = process.env;


  const transporter = nodemailer.createTransport({
    host: MAIL_HOST,
    port: MAIL_PORT,
    secure: true,
    requireTLS: true,
    auth: {
      type: "PLAIN",
      user: MAIL_ID,
      pass: MAIL_PASSWORD,
    },
  } as TransportOptions);



interface MailOptions {
  from: string;
  to: string;
  subject: string;
  text: string;
  html: string;
}

const mailOptions = (
  email: string,
  subject: string,
  text: string,
  html: string
): MailOptions => {
  return {
    from: "InterviewIQ developer@interviewiq.noreply.com",
    to: email,
    subject: subject,
    text: text,
    html: html,
  };
};

export { transporter, mailOptions };
