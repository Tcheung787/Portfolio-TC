// app/api/sendMessage/route.js

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
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_PASS, // Your Gmail password
      },
    });

    // Send the email
    await transporter.sendMail({
      from: process.env.email, // The email address that will appear as the sender
      to: 'cheungtiffany02@gmail.com',
      replyTo: email, // Replies will go to the user's email address
      subject: `Message from ${name}`,
      text: message,
    });

    // Return success status
    return new Response(JSON.stringify({ status: 200 }));
  } catch (error) {
    console.error('Error sending message:', error);
    // Return error status
    return new Response(JSON.stringify({ status: 500 }));
  }
}
