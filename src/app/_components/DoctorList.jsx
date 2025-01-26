import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function DoctorList({
  doctorsList,
  heading = "Popular Doctors",
  alignCenter = "items-center",
  sm = "sm:grid-cols-2",
  md = "md:grid-cols-4",
  pbottom = "pb-16",
  ptop = "pt-10",
  headingsm = "text-3xl",
  listValue = 8,
}) {
  return (
    <Container
      className={`flex flex-col ${alignCenter} justify-center ${ptop} ${pbottom} gap-8`}
    >
      <h2 className={`text-2xl font-semibold text-gray-900 ${headingsm}`}>
        {heading}
      </h2>
      <div className={`grid grid-cols-1 gap-5 ${sm} ${md} w-full`}>
        {doctorsList.length > 0
          ? doctorsList.map(
              (doctor, index) =>
                index < listValue && (
                  <div
                    key={index}
                    className="flex flex-col items-center md:items-start border-[1px] p-3 rounded-lg hover:border-primary transition-all duration-300 ease-in-out hover:shadow-lg cursor-pointer"
                  >
                    <Image
                      src={doctor.Image.url}
                      alt={doctor.Name}
                      width={300}
                      height={300}
                      className="rounded-lg"
                    />
                    <div className="flex flex-col items-center md:items-baseline mt-5 gap-2">
                      <h4 className="text-[12px] px-2 py-1 rounded-sm bg-blue-100 text-primary font-semibold">
                        {doctor.categories[0].name}
                      </h4>
                      <h3 className="text-lg font-medium text-gray-900">
                        {doctor.Name}
                      </h3>
                      <p className="text-sm text-primary font-medium capitalize">
                        {doctor.Year_of_Experience}
                      </p>
                      <p className="text-sm text-gray-500">{doctor.Address}</p>
                      <Link
                        href={`/doctor-details/${doctor.documentId}`}
                        passHref
                        className="w-full"
                      >
                        <button className="text-sm text-primary border-[1px] border-gray-300 rounded-full w-full py-2 hover:bg-primary hover:text-white transition-all duration-300 ease-in-out mt-2">
                          Book Now
                        </button>
                      </Link>
                    </div>
                  </div>
                )
            )
          : Array.from({ length: 8 }).map((_, index) => (
              <div
                className="w-full h-[300px] bg-slate-200 animate-pulse border-[1px] p-3 rounded-lg"
                key={index}
              >
                {" "}
              </div>
            ))}
      </div>
    </Container>
  );
}

export default DoctorList;
