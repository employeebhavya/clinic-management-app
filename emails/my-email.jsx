import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const EmialTemplate = ({ UserName, DoctorName, Date, Time, Note }) => (
  <Html>
    <Head />
    <Preview>Appointment Booking Confirmation</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${baseUrl}/logo.svg`}
          width="170"
          height="50"
          alt="Clinic Management System"
          style={logo}
        />
        <Text style={paragraph}>Hi {UserName},</Text>
        <Text style={paragraph}>
          Your appointment has been successfully booked. Here are the details:
        </Text>
        <Text style={paragraph}>
          <strong>Doctor:</strong> {DoctorName} <br />
          <strong>Date:</strong> {Date} <br />
          <strong>Time:</strong> {Time} <br />
          {Note && (
            <>
              <strong>Note:</strong> {Note}
            </>
          )}
        </Text>
        <Section style={btnContainer}>
          <Button
            style={button}
            href={`${baseUrl}/appointment-details`} // Replace with the actual link
          >
            View Appointment Details
          </Button>
        </Section>
        <Text style={paragraph}>
          Best regards, <br />
          The Clinic Management Team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          470 Noor Ave STE B #1148, South San Francisco, CA 94080
        </Text>
      </Container>
    </Body>
  </Html>
);

export default EmialTemplate;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center",
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
