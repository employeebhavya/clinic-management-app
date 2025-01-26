import Container from "@/components/Container";
import React from "react";
import ContactForm from "./_Components/ContactForm";

function ContactUs() {
  return (
    <>
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              For More About Clinic
              <span className="sm:block"> Get in Touch with Us</span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl sm:text-xl/relaxed">
              Have questions or need assistance? We're here to help! Reach out
              to us for support, inquiries, or to learn more about how our
              Clinic Management System can improve your clinic's operations.
            </p>
          </div>
        </div>
      </section>
      <ContactForm />
    </>
  );
}

export default ContactUs;
