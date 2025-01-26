import { CalendarClock, Clock, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import GlobalApi from "@/app/_utils/GlobalApi";
import { toast } from "sonner";

function BookAppointments({ doctors }) {
  const [date, setDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);
  const [note, setNote] = useState(""); // Track the note input
  const { user } = useKindeBrowserClient();

  // Toggle modal open/close
  const toggleModal = () => {
    setIsOpen(!isOpen);
    setSelectedTime(null); // Reset selected time on modal close
    setNote(""); // Reset note on modal close
  };

  // Generate time slots
  useEffect(() => {
    if (isOpen) {
      const slots = [];
      for (let hour = 10; hour <= 18; hour++) {
        const amPm = hour >= 12 ? "PM" : "AM";
        const formattedHour = hour > 12 ? hour - 12 : hour;
        slots.push(
          `${formattedHour}:00 ${amPm}`,
          `${formattedHour}:30 ${amPm}`
        );
      }
      setTimeSlots(slots);
    }
  }, [isOpen]);

  // Handle time slot selection
  const handleTimeSlotSelect = (time) => {
    setSelectedTime(time);
  };

  const isPastDay = (day) => {
    return day < new Date();
  };

  const saveBookingDta = () => {
    const data = {
      data: {
        UserName: `${user.given_name} ${user.family_name}`,
        Email: user.email,
        Date: date,
        Time: selectedTime,
        doctor: doctors?.documentId,
        Note: note,
        DoctorName: doctors?.Name,
      },
    };
    GlobalApi.bookAppointments(data)
      .then((res) => {
        if (res) {
          // Appointment successfully booked
          toast.success("Appointment successfully booked.", {
            style: { fontSize: "18px", backgroundColor: "#f0f8ff" },
          });

          // Proceed to send email confirmation
          GlobalApi.sendMail(data)
            .then((emailRes) => {
              if (emailRes) {
                toast.success(
                  "You will receive an email confirmation shortly.",
                  {
                    style: { fontSize: "18px", backgroundColor: "#f0f8ff" },
                  }
                );
              } else {
                // Handle email sending failure
                toast.error(
                  "Email confirmation failed. Please contact support.",
                  {
                    style: { fontSize: "18px", backgroundColor: "#ffcccb" },
                  }
                );
              }
            })
            .catch((error) => {
              console.error("Error sending email:", error);
              toast.error(
                "Email confirmation failed. Please try again later.",
                {
                  style: { fontSize: "18px", backgroundColor: "#ffcccb" },
                }
              );
            });
        } else {
          // Appointment booking failed
          toast.error("Failed to book appointment. Please try again.", {
            style: { fontSize: "18px", backgroundColor: "#ffcccb" },
          });
        }
      })
      .catch((error) => {
        console.error("Error booking appointment:", error);
        toast.error("An error occurred while booking the appointment.", {
          style: { fontSize: "18px", backgroundColor: "#ffcccb" },
        });
      });
  };

  return (
    <div>
      {/* Book Appointment Button */}
      <button
        onClick={toggleModal}
        className="text-lg bg-primary text-white border-primary hover:text-primary border-[1px] rounded-full w-fit py-2 px-7 hover:bg-transparent transition-all duration-300 ease-in-out mt-2 flex items-center gap-2"
      >
        <CalendarClock /> Book Appointment
      </button>

      {/* Modal (Popup) */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg w-full md:w-[707px] p-6">
            {/* Modal Header */}
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Book Appointment</h2>
              <button
                onClick={toggleModal}
                className="text-gray-500 hover:text-gray-700 p-1"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col items-start justify-start">
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <CalendarClock className="text-primary" /> Select Date
                  </h3>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={isPastDay}
                    className="rounded-md border p-2"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <Clock className="text-primary" /> Select a Time Slot
                  </h3>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => handleTimeSlotSelect(time)}
                        className={`block w-full text-left py-2 px-4 rounded-lg border transition-all duration-200 ease-in-out ${
                          selectedTime === time
                            ? "bg-primary text-white border-primary"
                            : "bg-gray-100 hover:bg-primary hover:text-white"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Note Input */}
              <div className="mt-2">
                <label
                  htmlFor="note"
                  className="block text-lg font-medium mb-2"
                >
                  Add a Note (Optional)
                </label>
                <textarea
                  id="note"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-primary"
                  placeholder="Write a note..."
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-2 flex justify-end gap-4">
              {/* Cancel Button */}
              <button
                onClick={toggleModal}
                className="bg-transparent hover:bg-red-600 text-red-600 border-[1px] border-red-500 hover:text-white rounded-lg px-4 py-2 transition-all duration-200 ease-in-out"
              >
                Cancel
              </button>

              {/* Submit Button */}
              <button
                onClick={() => {
                  saveBookingDta();
                  toggleModal();
                }}
                disabled={!selectedTime || !date} // Disable button if no time or date is selected
                className={`px-4 py-2 rounded-lg transition-all duration-200 ease-in-out ${
                  !selectedTime || !date
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-primary text-white hover:bg-primary-dark"
                }`}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookAppointments;
