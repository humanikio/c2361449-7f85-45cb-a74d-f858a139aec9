import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, eventDate, guestCount, serviceType, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !eventDate || !guestCount || !serviceType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Format the service type for readability
    const serviceTypeLabels: Record<string, string> = {
      'mobile-bar': 'Premium Mobile Bar Experience',
      'signature-cocktails': 'Signature Cocktail Design',
      'beer-wine': 'Beer and Wine Service',
      'bartender-only': 'Bartender Only Service',
      'custom': 'Custom Package',
    };

    const formattedServiceType = serviceTypeLabels[serviceType] || serviceType;

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'whitneyjames80@gmail.com',
      replyTo: email,
      subject: `New Quote Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #666; padding-bottom: 10px;">
            New Quote Request
          </h2>

          <div style="margin: 20px 0;">
            <h3 style="color: #555; margin-bottom: 15px;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #555; margin-bottom: 15px;">Event Details</h3>
            <p><strong>Event Date:</strong> ${new Date(eventDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p><strong>Guest Count:</strong> ${guestCount} guests</p>
            <p><strong>Service Type:</strong> ${formattedServiceType}</p>
          </div>

          ${message ? `
          <div style="margin: 20px 0;">
            <h3 style="color: #555; margin-bottom: 15px;">Additional Message</h3>
            <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          ` : ''}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #888; font-size: 12px;">
            <p>This message was sent from The Nearest Bar website contact form.</p>
          </div>
        </div>
      `,
      text: `
New Quote Request

Contact Information:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}

Event Details:
- Event Date: ${eventDate}
- Guest Count: ${guestCount} guests
- Service Type: ${formattedServiceType}

${message ? `Additional Message:\n${message}` : ''}

---
This message was sent from The Nearest Bar website contact form.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
