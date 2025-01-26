const { default: axios } = require("axios");

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosCLient = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  },
});

const getCategories = () => axiosCLient.get("categories?populate=*");

const getDoctors = () => axiosCLient.get("doctors?populate=*");

const getDoctorsByCategory = (category) =>
  axiosCLient.get(
    `/doctors?filters[categories] [name] [$in]=${category}&populate=*`
  );

const getDoctorById = (id) => axiosCLient.get(`/doctors/${id}?populate=*`);

const bookAppointments = (data) => axiosCLient.post(`/appointments`, data);

const sendMail = (data) => axios.post(`/api/sendEmail`, data);

const getUserBooking = (userEmail) =>
  axiosCLient.get(
    `/appointments?[filters][Email][$eq]=${userEmail}&populate[doctor][populate]=Image`
  );

const deleteAppointment = (id) => axiosCLient.delete(`/appointments/${id}`);

const createContact = (data) => axiosCLient.post(`/contacts`, data);

export default {
  getCategories,
  getDoctors,
  getDoctorsByCategory,
  getDoctorById,
  bookAppointments,
  sendMail,
  getUserBooking,
  deleteAppointment,
  createContact,
};
