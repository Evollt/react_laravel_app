import axios from "axios";

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_APP_BASE_URL}/api`,
});

axiosClient.interceptors.request.use((config) => {
  return config;
});

export default axiosClient;
