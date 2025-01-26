"use client";

import { useState } from "react";
import GlobalApi from "@/app/_utils/GlobalApi";
import { Mail, MessageCircle, Phone, User, User2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function Form() {
  const router = useRouter();
  const [data, setData] = useState({
    FirstName: "",
    LastName: "",
    Phone: "",
    Email: "",
    Message: "",
    Subject: "",
  });

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const validateForm = () => {
    if (
      !data.FirstName ||
      !data.LastName ||
      !data.Phone ||
      !data.Email ||
      !data.Message ||
      !data.Subject
    ) {
      setError("All fields are required.");
      return false;
    }
    setError(""); // Clear error if validation passes
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Wrap `data` in a `data` key
    GlobalApi.createContact({ data })
      .then((res) => {
        toast.success("Form submitted successfully.");
        router.push("/thankyou");
      })
      .catch((err) => {
        console.error("Error submitting form", err);
        setError("There was an error submitting the form.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid sm:grid-cols-2 gap-8">
          {/* First Name Input */}
          <div className="relative flex items-center">
            <input
              type="text"
              name="FirstName"
              value={data.FirstName}
              onChange={handleChange}
              placeholder="First Name"
              className="px-2 py-3 bg-white w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 outline-none"
            />
            <User className="text-gray-500" />
          </div>

          {/* Last Name Input */}
          <div className="relative flex items-center">
            <input
              type="text"
              name="LastName"
              value={data.LastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="px-2 py-3 bg-white w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 outline-none"
            />
            <User2 className="text-gray-500" />
          </div>

          {/* Phone Input */}
          <div className="relative flex items-center">
            <input
              type="number"
              name="Phone"
              value={data.Phone}
              onChange={handleChange}
              placeholder="Phone No."
              className="px-2 py-3 bg-white text-black w-full text-s border-b border-gray-300 focus:border-blue-500 outline-none"
            />
            <Phone className="text-gray-500" />
          </div>

          {/* Email Input */}
          <div className="relative flex items-center">
            <input
              type="email"
              name="Email"
              value={data.Email}
              onChange={handleChange}
              placeholder="Email"
              className="px-2 py-3 bg-white text-black w-full text-sm border-b border-gray-300 focus:border-blue-500 outline-none"
            />
            <Mail className="text-gray-500" />
          </div>

          {/* Message Input */}
          <div className="relative flex items-center sm:col-span-2">
            <textarea
              name="Message"
              value={data.Message}
              onChange={handleChange}
              placeholder="Write Message"
              className="px-2 pt-3 bg-white text-black w-full text-sm border-b border-gray-300 focus:border-blue-500 outline-none"
            ></textarea>
            <MessageCircle className="text-gray-500 absolute right-2" />
          </div>

          {/* Subject Radio Buttons */}
          <div className="col-span-full">
            <h6 className="text-sm text-gray-800">Select Subject</h6>
            <div className="flex max-lg:flex-col gap-6 mt-4">
              {/* General Inquiry */}
              <div className="flex items-center">
                <input
                  id="radio1"
                  type="radio"
                  name="Subject"
                  value="General Inquiry"
                  checked={data.Subject === "General Inquiry"}
                  onChange={handleChange}
                  className="hidden peer"
                />
                <label
                  htmlFor="radio1"
                  className="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer border-2 border-[#011c2b] rounded-full overflow-hidden"
                >
                  <span className="border-[4px] border-[#011c2b] rounded-full w-full h-full"></span>
                </label>
                <p className="text-sm text-gray-500 ml-4">General Inquiry</p>
              </div>

              {/* Technical Support */}
              <div className="flex items-center">
                <input
                  id="radio2"
                  type="radio"
                  name="Subject"
                  value="Technical Support"
                  checked={data.Subject === "Technical Support"}
                  onChange={handleChange}
                  className="hidden peer"
                />
                <label
                  htmlFor="radio2"
                  className="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer border-2 border-[#011c2b] rounded-full overflow-hidden"
                >
                  <span className="border-[4px] border-[#011c2b] rounded-full w-full h-full"></span>
                </label>
                <p className="text-sm text-gray-500 ml-4">Technical Support</p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="col-span-full flex items-center justify-between">
            <button
              type="submit"
              className={`px-8 py-4 rounded-xl border text-xs text-white bg-gradient-to-r from-[#3ec2e7] to-[#044d67] hover:bg-[#3EC2E7] font-medium uppercase transition-all ease-in-out duration-300 ${
                isSubmitting ? "cursor-not-allowed" : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Send Message"}
            </button>
          </div>
        </div>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}

export default Form;
