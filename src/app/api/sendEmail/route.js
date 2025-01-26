import { Resend } from "resend";
import { NextResponse } from "next/server";
import EmialTemplate from "../../../../emails/my-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const response = await req.json();

    // Extract fields
    const {
      Email,
      UserName,
      Date: appointmentDate,
      Time,
      Note,
      DoctorName,
    } = response.data;

    // Validate email
    if (!Email || typeof Email !== "string" || !Email.includes("@")) {
      throw new Error("Invalid email address provided.");
    }

    // Validate and format date
    if (!appointmentDate || isNaN(new Date(appointmentDate).getTime())) {
      throw new Error("Invalid appointment date provided.");
    }
    const formattedDate = new Date(appointmentDate).toLocaleDateString(
      "en-US",
      {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    );

    // Prepare email data
    const emailData = {
      UserName,
      DoctorName,
      Date: formattedDate,
      Time,
      Note,
    };

    // Send email
    const data = await resend.emails.send({
      from: "Clinic Management System <no-reply@tectrademo.com>",
      to: Email,
      subject: `Appointment Booking Confirmation with Dr. ${DoctorName}`,
      react: EmialTemplate({ ...emailData }),
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error sending email:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
