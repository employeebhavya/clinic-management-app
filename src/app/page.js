"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation"; // Use useRouter for redirection
import GlobalApi from "./_utils/GlobalApi"; // Import global axios client
import CategorySearch from "./_components/CategorySearch";
import DoctorList from "./_components/DoctorList";
import HeroSection from "./_components/HeroSection";
import CallToAction from "./_components/CallToAction";
import AboutHome from "./_components/AboutHome";

export default function Home() {
  const [doctorsList, setDoctorsList] = useState([]);
  const router = useRouter(); // Initialize useRouter

  // Use useCallback to memoize the function so it doesn't get recreated on each render
  const getDoctorsList = useCallback(async () => {
    try {
      const response = await GlobalApi.getDoctors();
      setDoctorsList(response.data.data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
      router.push("/error"); // Redirect to the error page
    }
  }, [router]); // Memoize the function based on `router`

  useEffect(() => {
    getDoctorsList();
  }, [getDoctorsList]); // Include `getDoctorsList` as a dependency

  return (
    <div>
      <HeroSection />
      <AboutHome />
      <CategorySearch />
      <DoctorList doctorsList={doctorsList} />
      <CallToAction />
    </div>
  );
}
