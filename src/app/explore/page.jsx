"use client";

import { useEffect, useState } from "react";
import DoctorList from "../_components/DoctorList";
import GlobalApi from "../_utils/GlobalApi";

export default function Explore() {
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
    <div>
      <DoctorList
        doctorsList={doctorsList}
        heading="Doctors List"
        listValue="100"
      />
    </div>
  );
}
