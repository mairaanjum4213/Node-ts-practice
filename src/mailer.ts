import nodemailer from 'nodemailer';


//creating transporter object
const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS, 
  },
  secure: true, 
    tls: {
        rejectUnauthorized: false 
    }
});

export const sendTestMail = async (email: string) => {
    //mail data
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Test Mail',
    text: 'This is a test email sent from Node.js/Express app!',
  };

  await transporter.sendMail(mailOptions);
};
