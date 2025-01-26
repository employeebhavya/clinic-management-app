"use client";

import GlobalApi from "@/app/_utils/GlobalApi";
import { GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function SuggestedDoctor() {
  const [doctorsList, setDoctorsList] = useState([]);

  useEffect(() => {
    getDoctorsList();
  }, []);

  const getDoctorsList = () => {
    GlobalApi.getDoctors().then((res) => {
      setDoctorsList(res.data.data);
    });
  };
  return (
    <div className={`flex flex-col items-baseline gap-4`}>
      <h2 className={`text-xl font-semibold text-gray-900`}>Suggestions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 w-full">
        {doctorsList.length > 0
          ? doctorsList.map(
              (doctor, index) =>
                index < 6 && (
                  <Link
                    key={index}
                    href={`/doctor-details/${doctor.documentId}`}
                    className="relative hover:bg-gray-100 p-2 rounded-lg"
                  >
                    <div className="flex items-center gap-5">
                      <div>
                        <Image
                          src={doctor.Image.url}
                          alt="doctor"
                          width={100}
                          height={100}
                          className="w-[80px] h-[80px] object-cover rounded-full border-[1px] border-gray-300"
                        />
                      </div>
                      <div className="flex flex-col gap-1 items-baseline">
                        <h4 className="text-[12px] px-2 py-1 rounded-sm bg-blue-100 text-primary font-semibold">
                          {doctor.categories[0].name}
                        </h4>
                        <h3 className="text-sm font-semibold text-gray-900">
                          {doctor.Name}
                        </h3>
                        <p className="text-sm text-primary font-medium capitalize flex items-center gap-2">
                          <GraduationCap /> {doctor.Year_of_Experience}
                        </p>
                      </div>
                    </div>
                  </Link>
                )
            )
          : Array.from({ length: 6 }).map((_, index) => (
              <div
                className="w-full h-[100px] bg-slate-200 animate-pulse border-[1px] p-3 rounded-lg"
                key={index}
              >
                {" "}
              </div>
            ))}
      </div>
    </div>
  );
}

export default SuggestedDoctor;
