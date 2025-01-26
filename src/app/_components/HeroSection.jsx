import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://videos.pexels.com/video-files/7580475/7580475-uhd_4096_2160_25fps.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Find the best Doctors
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-lg">
          Discover top-rated doctors in your city from the comfort of your home.
        </p>
        <Link href="/explore">
          <Button className="mt-5 hover:bg-white hover:text-primary transition-all">
            Get Started Now
          </Button>
        </Link>
      </div>
    </div>
  );
}
