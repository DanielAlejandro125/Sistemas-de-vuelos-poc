import axios from "axios";

const API = {
  FLIGHTS: import.meta.env.VITE_API_FLIGHTS || "http://localhost:8002", // apuntamos a booking-service que devuelve /flights
  BOOKINGS: import.meta.env.VITE_API_BOOKINGS || "http://localhost:8002",
  PAYMENTS: import.meta.env.VITE_API_PAYMENTS || "http://localhost:8004",
};

export async function getFlights() {
  const res = await axios.get(`${API.FLIGHTS}/flights`);
  return res.data;
}

export async function createBooking(payload) {
  const res = await axios.post(`${API.BOOKINGS}/book`, payload);
  return res.data;
}

export async function myBookings(user_id) {
  const res = await axios.get(`${API.BOOKINGS}/mybookings/${user_id}`);
  return res.data;
}

export async function pay(payload) {
  const res = await axios.post(`${API.PAYMENTS}/pay`, payload);
  return res.data;
}

