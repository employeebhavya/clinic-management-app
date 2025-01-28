import Link from "next/link";
import React from "react";
import About1 from "./_components/About1";
import About2 from "./_components/About2";

function AboutUs() {
  return (
    <div>
      <section className="relative bg-[url(/about.png)] md:bg-[url(https://img.freepik.com/free-photo/confident-smiling-doctor-woman-physician-showing-thumbs-up-holding-clipboard-appointment-hospital_1258-124596.jpg?t=st=1737808220~exp=1737811820~hmac=c2030ad10f1ceb9b3307a43d40905c80454d3d289e9671c835d1b190fa6b8c36&w=1380)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gray-900/55 md:bg-gray-900/10 sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 flex h-screen items-end lg:items-center lg:px-8 pb-4 md:pb-0">
          <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
              Manage Your
              <strong className="block font-extrabold text-gray-200">
                Clinic Effortlessly.
              </strong>
            </h1>

            <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
              Streamline your clinic operations with ease. From appointment
              scheduling to patient management, our app simplifies every step
              for a seamless experience!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Link
                href="/contact-us"
                className="block w-auto  rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-white hover:text-primary transition-all sm:w-auto"
              >
                Get Started
              </Link>

              <Link
                href="/explore"
                className="block w-auto  rounded bg-white px-12 py-3 text-sm font-medium text-primary shadow hover:bg-primary hover:text-white transition-all sm:w-auto"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      <About1 />
      <About2 />
    </div>
  );
}

export default AboutUs;
