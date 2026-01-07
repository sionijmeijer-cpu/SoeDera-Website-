"use node";

import { action } from "./_generated/server";
import { v } from "convex/values";

export const sendContactEmail = action({
  args: {
    name: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("RESEND_API_KEY not configured");
    }

    const { name, email, company, message } = args;

    const htmlContent = `
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
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Sødera Contact Form <onboarding@resend.dev>",
        to: ["info@soedera.eu"],
        reply_to: email,
        subject: `New Contact: ${name}${company ? ` from ${company}` : ''}`,
        html: htmlContent,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Resend API error:", errorText);
      throw new Error(`Failed to send email: ${errorText}`);
    }

    const result = await response.json();
    return { success: true, messageId: result.id };
  },
});
