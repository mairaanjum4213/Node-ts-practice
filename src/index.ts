import dotenv from 'dotenv';
dotenv.config();
import express, { Request, Response } from 'express';
import { sendTestMail } from './mailer';
import { sendTestMail2 } from './mailer2';



const app = express();
const port = 3000;

app.use(express.json());

app.post('/send-mail', async (req: Request, res: Response) => {
  console.log('POST /send-mail hit');
  const { recipient_emails,category,subCategory,data } = req.body;
  console.log('Received email:', recipient_emails);

  if (!Array.isArray(recipient_emails) || recipient_emails.length === 0 || !recipient_emails.every(email => typeof email === 'string')) {
    return res.status(400).json({ error: 'Invalid email array' });
  }

  if (!data || !Array.isArray(data)) {
    return res.status(400).json({ error: 'Invalid data' });
  }

  try {
    await sendTestMail(recipient_emails,category,subCategory,data);
    res.status(200).json({ message: 'End-of-day Report Email sent successfully' });
  } catch (error) {
    console.error('Error sending mail:', error);
    res.status(500).json({ error: 'Failed to send test mail' });
  }
});


app.post('/send-mail-real', async (req: Request, res: Response) => {
  console.log('POST /send-mail hit');
  const { recipient_emails, category, subCategory,data} = req.body;
  console.log('Received email:', recipient_emails);

  if (!Array.isArray(recipient_emails) || recipient_emails.length === 0 || !recipient_emails.every(email => typeof email === 'string')) {
    return res.status(400).json({ error: 'Invalid email array' });
  }

  if (!data || !Array.isArray(data)) {
    return res.status(400).json({ error: 'Invalid data' });
  }

  try {
    await sendTestMail2(recipient_emails,category,subCategory,data);
    res.status(200).json({ message: 'Real-time Alert Email  sent successfully' });
  } catch (error) {
    console.error('Error sending mail:', error);
    res.status(500).json({ error: 'Failed to send test mail' });
  }
});


app.get('/test', async (req: Request, res: Response) => {console.log("test")})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
