import axios from "axios";
import { getCookie } from "cookies-next";

const instance = axios.create({
  baseURL: "https://anorkhulov.uz/api",
});

instance.interceptors.request.use((config) => {
  const token = getCookie("access_token");

  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  return config;
});

export default instance;
