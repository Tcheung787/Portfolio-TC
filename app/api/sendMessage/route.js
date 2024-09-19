
import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'All fields are required' }), { status: 400 });
  }

  try {
    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.GMAIL_USER, 
        pass: process.env.GMAIL_PASS, 
      },
    });

    // Send the email
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'cheungtiffany02@gmail.com',
      replyTo: email, 
      subject: `Message from ${name}`,
      text: message,
    });

    return new Response(JSON.stringify({ status: 200 }));
  } catch (error) {
    console.error('Error sending message:', error);
    return new Response(JSON.stringify({ status: 500 }));
  }
}

