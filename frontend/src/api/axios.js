import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // React + Vite
  withCredentials: true, // if using cookies
});

export default api;
