import "./globals.css";
import Header from "@/app/_components/Header";
import { Ubuntu } from "next/font/google";
import Footer from "./_components/Footer";
import { Toaster } from "@/components/ui/sonner";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Clinic Appointment Booking System",
  description: "A simple booking system for a clinic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable} antialiased`}>
        <Header />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
