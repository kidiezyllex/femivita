import axios from "axios";
import cookies from "js-cookie";

// Same-origin Next.js API Routes — no external backend base URL needed.
export const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

// Request interceptor to attach JWT token
api.interceptors.request.use(
  (config) => {
    let token = cookies.get("accessToken");
    if (!token && typeof window !== "undefined") {
      token = localStorage.getItem("accessToken") || undefined;
    }

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 && typeof window !== "undefined") {
      // Clear token if expired
      cookies.remove("accessToken");
      localStorage.removeItem("accessToken");
    }
    return Promise.reject(error);
  }
);
