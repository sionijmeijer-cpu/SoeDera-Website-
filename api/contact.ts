// Serverless function for Azure Static Web Apps
// This keeps your Resend API key secure on the server side

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, company, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY not configured');
    return res.status(500).json({ message: 'Email service not configured' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Sødera Contact <onboarding@resend.dev>',
        to: ['info@soedera.eu'],
        reply_to: email,
        subject: `New Contact: ${name}${company ? ` from ${company}` : ''}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #f97316 0%, #3b82f6 100%); padding: 20px; border-radius: 8px 8px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            </div>
            <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
              <h2 style="color: #1f2937; margin-top: 0;">Contact Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #4b5563; width: 120px;">Name:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #4b5563;">Email:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">
                    <a href="mailto:${email}" style="color: #3b82f6;">${email}</a>
                  </td>
                </tr>
                ${company ? `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #4b5563;">Company:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">${company}</td>
                </tr>
                ` : ''}
              </table>
              
              <h3 style="color: #1f2937; margin-top: 25px;">Message</h3>
              <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
                <p style="color: #374151; margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                <p style="color: #6b7280; font-size: 14px; margin: 0;">
                  This email was sent from the Sødera website contact form.
                </p>
              </div>
            </div>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Resend API error:', errorData);
      return res.status(500).json({ message: 'Failed to send email' });
    }

    const result = await response.json();
    return res.status(200).json({ success: true, messageId: result.id });
  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({ message: 'Failed to send email' });
  }
}
