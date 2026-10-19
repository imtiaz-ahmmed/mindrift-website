import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Server-side Zod validation
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed. Please review your input fields.",
          errors: validationResult.error.format(),
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;
    const referenceId = `MDR-${Date.now().toString(36).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;

    // Check if external mail service (e.g., Resend or SMTP) is configured
    const hasResend = Boolean(process.env.RESEND_API_KEY);
    const destinationEmail = process.env.CONTACT_DESTINATION_EMAIL || "contact@mindriftagency.com";

    if (hasResend) {
      // If RESEND_API_KEY is supplied, dispatch via Resend REST API
      try {
        const emailRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "Mindrift Inquiries <inquiries@mindriftagency.com>",
            to: destinationEmail,
            subject: `[New Inquiry ${referenceId}] ${data.projectType} — ${data.companyName}`,
            text: `
New project inquiry received.

Reference ID: ${referenceId}
Full Name: ${data.fullName}
Work Email: ${data.workEmail}
Company: ${data.companyName}
Practice Area: ${data.projectType}
Budget: ${data.estimatedBudget || "Not specified"}
Timeline: ${data.projectTimeline || "Not specified"}

Project Description:
${data.projectDescription}
            `,
          }),
        });

        if (!emailRes.ok) {
          console.error("Resend delivery failed:", await emailRes.text());
        }
      } catch (emailErr) {
        console.error("Failed to connect to email provider:", emailErr);
      }
    } else {
      // Honest development-mode log
      console.log(
        `[Mindrift Contact API - Development Mode] Inquiry validated: Ref ${referenceId} from ${data.workEmail} (${data.companyName}). Configure RESEND_API_KEY in .env.local to enable real email dispatch.`
      );
    }

    return NextResponse.json(
      {
        success: true,
        referenceId,
        message: "Inquiry processed successfully.",
        deliveryStatus: hasResend ? "dispatched" : "development_verified",
        destination: destinationEmail,
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("Contact API internal error:", err);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error while processing your inquiry.",
      },
      { status: 500 }
    );
  }
}
