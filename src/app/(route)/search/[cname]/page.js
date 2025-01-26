"use client";

import DoctorList from "@/app/_components/DoctorList";
import GlobalApi from "@/app/_utils/GlobalApi";
import { usePathname } from "next/navigation";
import { useEffect, useCallback, useState } from "react";

function Search() {
  const [doctors, setDoctors] = useState([]);
  const pathname = usePathname();
  const currentCategory = decodeURIComponent(pathname.split("/").pop() || "");

  const getCategoryDoctors = useCallback(async () => {
    try {
      const response = await GlobalApi.getDoctorsByCategory(currentCategory);
      setDoctors(response.data.data);
    } catch (error) {
      console.error("Failed to fetch doctors:", error);
    }
  }, [currentCategory]); // Memoized to avoid re-creation

  useEffect(() => {
    if (currentCategory) {
      getCategoryDoctors();
    }
  }, [currentCategory, getCategoryDoctors]); // Dependencies added

  return (
    <div>
      <DoctorList
        alignCenter="items-baseline"
        heading={currentCategory}
        doctorsList={doctors}
      />
    </div>
  );
}

export default Search;
