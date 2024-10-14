import dotenv from 'dotenv';
dotenv.config();
import express, { Request, Response } from 'express';
import { sendTestMail } from './endOfDayReport';
import { sendTestMail2 } from './realTimeAlert';
import { EmailParams } from './types';

const app = express();
const port = 3000;

app.use(express.json());

// POST: End-of-Day Report Email
app.post('/send-mail', async (req: Request<{}, {}, EmailParams>, res: Response) => {
  console.log('POST /send-mail hit');
  const { recipient_emails, category, subCategory, data } = req.body;
  console.log('Received email:', recipient_emails);

  if (!Array.isArray(recipient_emails) || recipient_emails.length === 0) {
    return res.status(400).json({ error: 'Invalid email array' });
  }

  if (!data || !Array.isArray(data)) {
    return res.status(400).json({ error: 'Invalid data' });
  }

  try {
    await sendTestMail(recipient_emails, category, subCategory, data);
    res.status(200).json({ message: 'End-of-day Report Email sent successfully' });
  } catch (error) {
    console.error('Error sending mail:', error);
    res.status(500).json({ error: 'Failed to send test mail' });
  }
});

// POST: Real-time Alert Email
app.post('/send-mail-real', async (req: Request<{}, {}, EmailParams>, res: Response) => {
  console.log('POST /send-mail-real hit');
  const { recipient_emails, category, subCategory, data } = req.body;
  console.log('Received email:', recipient_emails);

  if (!Array.isArray(recipient_emails) || recipient_emails.length === 0) {
    return res.status(400).json({ error: 'Invalid email array' });
  }

  if (!data || !Array.isArray(data)) {
    return res.status(400).json({ error: 'Invalid data' });
  }

  try {
    await sendTestMail2(recipient_emails, category, subCategory, data);
    res.status(200).json({ message: 'Real-time Alert Email sent successfully' });
  } catch (error) {
    console.error('Error sending mail:', error);
    res.status(500).json({ error: 'Failed to send test mail' });
  }
});

// Test Route
app.get('/test', (req: Request, res: Response) => {
  console.log('Test endpoint hit');
  res.send('Server is working!');
});

// Start the Server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
