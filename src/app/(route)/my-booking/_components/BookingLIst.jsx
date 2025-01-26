import { Calendar, Clock, MapPin } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import React from "react";
import CancelAppointment from "./CancelAppointment";
import GlobalApi from "@/app/_utils/GlobalApi";
import { toast } from "sonner";

function BookingList({ expired, bookingList = [], updtaeRecord }) {
  const deleteAppointment = (item) => {
    GlobalApi.deleteAppointment(item?.documentId).then((res) => {
      if (res) {
        toast.success("Appointment deleted successfully.");
        updtaeRecord();
      }
    });
  };

  if (!expired && bookingList.length === 0) {
    return (
      <div className="text-center text-gray-500 py-10">
        <p className="text-lg font-medium">
          Please book an appointment to see your bookings.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`${expired ? "grid grid-cols-1 md:grid-cols-2 gap-4" : ""}`}
    >
      {bookingList.length === 0
        ? Array(4)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="flex gap-4 items-center mt-5 w-full border border-gray-200 p-4 rounded-md"
              >
                <div className="w-[100px] h-[100px] rounded-full bg-gray-300 animate-pulse"></div>
                <div className="flex flex-col gap-2 w-full">
                  <div className="h-6 bg-gray-300 rounded-md animate-pulse w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded-md animate-pulse w-1/2"></div>
                  <div className="h-4 bg-gray-300 rounded-md animate-pulse w-2/3"></div>
                  <div className="h-4 bg-gray-300 rounded-md animate-pulse w-1/4"></div>
                </div>
              </div>
            ))
        : bookingList.map((item, index) => (
            <div
              key={index}
              className={`flex gap-4 items-center mt-5 w-full border border-gray-200 p-4 rounded-md hover:shadow-md transition-all hover:border-primary`}
            >
              <Image
                src={item?.doctor?.Image?.url || "/16.png"}
                alt={item?.doctor?.Name || "Unknown Doctor"}
                width={300}
                height={300}
                className="w-[100px] h-[100px] object-cover rounded-full border border-gray-300"
              />
              <div className="flex flex-col gap-2 w-full">
                <h3 className="text-lg font-semibold text-gray-900 w-full flex flex-col md:flex-row items-baseline md:items-center justify-between gap-2 mb-2 md:mb-0">
                  {item?.doctor?.Name}
                  {!expired && (
                    <CancelAppointment
                      onContinueClick={() => deleteAppointment(item)}
                    />
                  )}
                </h3>
                <p className="text-sm font-medium capitalize flex items-center gap-1">
                  <MapPin size={16} className="text-primary" />
                  {item?.doctor?.Address}
                </p>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  <Calendar size={16} className="inline-block text-primary" />
                  <span className="font-semibold">Appointment on:</span>
                  {moment(item?.Date).format("Do MMMM, YYYY")}
                </p>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  <Clock size={16} className="inline-block text-primary" />
                  <span className="font-semibold">At Time:</span>
                  {item?.Time}
                </p>
              </div>
            </div>
          ))}
    </div>
  );
}

export default BookingList;
