import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

        await resend.emails.send({
            from: "onboarding@resend.dev", // you can change later to your domain email
            to: "maheshchaube333@gmail.com",
            subject: `New Contact Form: ${subject}`,
            html: `
        <h2>📩 New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Resend error:", error);
        return NextResponse.json({ success: false, error }, { status: 500 });
    }
}
