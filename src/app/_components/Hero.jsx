import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="bg-gray-200 ">
      <Container className="pt-8 pb-14 md:py-14">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
          <div>
            <div className="max-w-lg md:max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                Find the <span className="text-primary">best Doctors</span> in
                your city with ease and comfort of your home with us.
              </h2>

              <p className="mt-4 text-gray-700">
                Discover top-rated doctors in your city from the comfort of your
                home. We connect you with trusted healthcare professionals,
                ensuring your health and well-being are just a few clicks away.
                Book appointments, access personalized care, and experience
                convenience like never before.
              </p>
              <Link href="/explore">
                <Button className="mt-5">Get Started Now</Button>
              </Link>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded"
              alt=""
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
