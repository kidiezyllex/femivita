import { api } from "./api";
import cookies from "js-cookie";

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface AuthResponse {
  accessToken?: string;
  access_token?: string;
  user?: {
    id?: string;
    _id?: string;
    username: string;
    email?: string;
    role?: string;
  };
  message?: string;
}

const isTokenExpired = (token: string): boolean => {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    if (!payload.exp) return false;
    return Date.now() >= payload.exp * 1000;
  } catch {
    return true;
  }
};

export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await api.post<any>("/auth/login", credentials);
    const raw = response.data;
    // Unwrap from NestJS TransformInterceptor { statusCode, message, data, meta }
    const data = raw?.data || raw;
    const token =
      data?.accessToken ||
      data?.access_token ||
      data?.token ||
      raw?.accessToken ||
      (typeof data === "string" ? data : "");

    if (token) {
      cookies.set("accessToken", token, { expires: 7, path: "/" });
      if (typeof window !== "undefined") {
        localStorage.setItem("accessToken", token);
        if (data.user) {
          localStorage.setItem("userProfile", JSON.stringify(data.user));
        }
      }
    }

    return data;
  },

  async getProfile() {
    const response = await api.get("/auth/me");
    const raw = response.data;
    return raw?.data || raw;
  },

  logout() {
    cookies.remove("accessToken");
    if (typeof window !== "undefined") {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("token");
      localStorage.removeItem("userProfile");
    }
  },

  getToken(): string | undefined {
    let token = cookies.get("accessToken");
    if (!token && typeof window !== "undefined") {
      token = localStorage.getItem("accessToken") || undefined;
    }
    return token;
  },

  isAdminAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) return false;
    if (isTokenExpired(token)) {
      this.logout();
      return false;
    }
    return true;
  },
};
