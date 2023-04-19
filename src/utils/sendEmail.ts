import nodemailer from 'nodemailer';

interface EmailOptions {
  email: string;
  subject: string;
  message: string;
  name: string;
}

async function sendEmail({ email, subject, message, name }: EmailOptions): Promise<void> {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "popescufv1021@gmail.com",
      pass: "vkynrxcwfuqhqjfw",
    },
  });

  await transporter.sendMail({
    from: email,
    to: "popescufv1021@gmail.com",
    subject,
    html: `
      <!DOCTYPE html>
      <html>

      </html>
      <body>
      From : <span>${name}</span>
      Message : <div>${message}</div>
      </body>
    `,
  });
}

export default sendEmail;