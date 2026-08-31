import axios from "axios";

const axiosInstence = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

export default axiosInstence;
