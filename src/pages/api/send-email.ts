import { NextApiResponse, NextApiRequest } from 'next';
import sendEmail from '../../utils/sendEmail';

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const emailOptions = {
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.body,
    name: req.body.name,
  };

  try {
    console.log(req.body, "----")
    await sendEmail(emailOptions);

    res.status(200).json({ status: 'OK', message: 'Email sent successfully' });
  } catch (error) {
    res.status(400).json({ status: 'ERROR', error });
  }
}