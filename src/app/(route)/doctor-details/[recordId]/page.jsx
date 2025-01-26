"use client";

import GlobalApi from "@/app/_utils/GlobalApi";
import Container from "@/components/Container";
import { CalendarClock, GraduationCap, MapPin } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import SocialLinks from "../_components/SocialLinks";
import SuggestedDoctor from "../_components/SuggestedDoctor";
import BookAppointments from "../_components/BookAppointments";

function DoctorDetails() {
  const [doctors, setDoctors] = useState(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const currentId = decodeURIComponent(pathname.split("/").pop() || "");

  const getCategoryDoctors = useCallback(async () => {
    try {
      setLoading(true);
      const response = await GlobalApi.getDoctorById(currentId);
      setDoctors(response.data.data);
    } catch (error) {
      console.error("Failed to fetch doctors:", error);
    } finally {
      setLoading(false);
    }
  }, [currentId]);

  useEffect(() => {
    if (currentId) {
      getCategoryDoctors();
    }
  }, [currentId, getCategoryDoctors]);

  return (
    <Container className="py-10 flex flex-col gap-4">
      <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
        Doctor Details
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 w-full">
        {loading ? (
          <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-10 border-[1px] border-gray-300 rounded-lg p-5 h-fit animate-pulse">
            {/* Image skeleton */}
            <div className="w-full h-[280px] bg-slate-200 rounded-lg md:h-[280px]"></div>

            {/* Text and details skeleton */}
            <div className="col-span-2 flex flex-col gap-3">
              <div className="w-3/4 h-6 bg-slate-200 rounded-md"></div>
              <div className="w-1/2 h-6 bg-slate-200 rounded-md"></div>
              <div className="w-3/4 h-6 bg-slate-200 rounded-md"></div>
              <div className="w-1/3 h-6 bg-slate-200 rounded-md"></div>
              <div className="w-56 h-10 bg-slate-200 rounded-full mt-2"></div>
            </div>

            {/* About section skeleton */}
            <div className="col-span-3 flex flex-col gap-2">
              <div className="w-1/3 h-6 bg-slate-200 rounded-md"></div>
              <div className="w-full h-16 bg-slate-200 rounded-md"></div>
            </div>
          </div>
        ) : (
          <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-10 border-[1px] border-gray-300 rounded-lg p-5 h-fit">
            <div>
              <Image
                src={doctors?.Image?.url || "/16.png"}
                alt="doctor"
                width={500}
                height={500}
                className="w-full h-[280px] object-cover rounded-lg border-[1px] border-gray-300"
              />
            </div>
            <div className="col-span-3 md:col-span-2 flex flex-col gap-3 items-baseline">
              <h3 className="text-xl font-semibold text-gray-900">
                {doctors?.Name}
              </h3>
              <p className="text-lg text-primary font-medium capitalize flex gap-2 items-center">
                <GraduationCap /> {doctors?.Year_of_Experience} of Experience
              </p>
              <p className="text-lg text-gray-500 flex gap-2 items-center">
                <MapPin /> {doctors?.Address}
              </p>
              <h4 className="text-lg px-2 py-1 rounded-sm bg-blue-100 text-primary font-semibold">
                {doctors?.categories?.[0]?.name}
              </h4>
              <SocialLinks />
              <BookAppointments doctors={doctors} />
            </div>
            <div className="col-span-3 flex flex-col gap-2">
              <h3 className="text-lg font-semibold">About Me</h3>
              <p className="text-gray-700 tracking-wide">
                {doctors?.About?.[0]?.children?.[0]?.text}
              </p>
            </div>
          </div>
        )}
        <div className="border-[1px] border-gray-300 rounded-lg p-4">
          {loading ? (
            <div className="w-full h-[300px] bg-slate-200 animate-pulse rounded-lg"></div>
          ) : (
            <SuggestedDoctor />
          )}
        </div>
      </div>
    </Container>
  );
}

export default DoctorDetails;
