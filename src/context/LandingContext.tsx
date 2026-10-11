"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { LandingPageData } from "@/types/landing";
import { DEFAULT_LANDING_PAGE_DATA } from "@/constants/defaultLandingData";
import { landingService } from "@/services/landing.service";
import { authService, LoginCredentials } from "@/services/auth.service";
import { toast } from "react-toastify";

interface LandingContextType {
  landingData: LandingPageData;
  isEditMode: boolean;
  isAdmin: boolean;
  isSaving: boolean;
  isLoading: boolean;
  hasUnsavedChanges: boolean;
  activeModal: string | null;
  showLoginModal: boolean;
  setShowLoginModal: (show: boolean) => void;
  setActiveModal: (modal: string | null) => void;
  updateSection: <K extends keyof LandingPageData>(
    section: K,
    data: LandingPageData[K]
  ) => void;
  saveChanges: () => Promise<boolean>;
  discardChanges: () => void;
  loginAdmin: (credentials: LoginCredentials) => Promise<boolean>;
  logoutAdmin: () => void;
  refreshData: () => Promise<void>;
}

export const LandingContext = createContext<LandingContextType | undefined>(undefined);

export const LandingProvider: React.FC<{
  children: React.ReactNode;
  initialEditMode?: boolean;
}> = ({ children, initialEditMode = false }) => {
  const [landingData, setLandingData] = useState<LandingPageData>(DEFAULT_LANDING_PAGE_DATA);
  const [originalData, setOriginalData] = useState<LandingPageData>(DEFAULT_LANDING_PAGE_DATA);
  const [isEditMode] = useState<boolean>(initialEditMode);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState<boolean>(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);

  // Check auth and load data on mount
  useEffect(() => {
    const isAuth = authService.isAdminAuthenticated();
    setIsAdmin(isAuth);

    if (initialEditMode && !isAuth) {
      setShowLoginModal(true);
    }

    loadLandingData();
  }, [initialEditMode]);

  const loadLandingData = async () => {
    setIsLoading(true);
    try {
      const data = await landingService.getLandingPage();
      setLandingData(data);
      setOriginalData(data);
      setHasUnsavedChanges(false);
    } catch (error) {
      console.error("Error loading landing data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateSection = <K extends keyof LandingPageData>(
    section: K,
    data: LandingPageData[K]
  ) => {
    setLandingData((prev) => {
      const updated = { ...prev, [section]: data };
      setHasUnsavedChanges(true);
      return updated;
    });
  };

  const saveChanges = async (): Promise<boolean> => {
    if (!isAdmin || !authService.isAdminAuthenticated()) {
      setIsAdmin(false);
      setShowLoginModal(true);
      toast.warning("Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại để lưu thay đổi.");
      return false;
    }

    setIsSaving(true);
    try {
      const updated = await landingService.updateLandingPage(landingData);
      setLandingData(updated);
      setOriginalData(updated);
      setHasUnsavedChanges(false);
      toast.success("Đã lưu tất cả thay đổi trên Landing Page thành công!");
      return true;
    } catch (error: any) {
      console.error("Error saving landing page:", error);
      if (error.response?.status === 401) {
        setIsAdmin(false);
        setShowLoginModal(true);
        toast.error("Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.");
      } else {
        toast.error(error.response?.data?.message || "Lỗi khi lưu dữ liệu lên máy chủ.");
      }
      return false;
    } finally {
      setIsSaving(false);
    }
  };

  const discardChanges = () => {
    setLandingData(originalData);
    setHasUnsavedChanges(false);
    toast.info("Đã hoàn tác các thay đổi chưa lưu.");
  };

  const loginAdmin = async (credentials: LoginCredentials): Promise<boolean> => {
    try {
      await authService.login(credentials);
      setIsAdmin(true);
      setShowLoginModal(false);
      toast.success("Đăng nhập quyền Admin thành công! Bạn có thể chỉnh sửa trang.");
      return true;
    } catch (error: any) {
      console.error("Login failed:", error);
      toast.error(error.response?.data?.message || "Tài khoản hoặc mật khẩu không chính xác.");
      return false;
    }
  };

  const logoutAdmin = () => {
    authService.logout();
    setIsAdmin(false);
    setShowLoginModal(true);
    toast.info("Đã đăng xuất tài khoản Admin.");
  };

  return (
    <LandingContext.Provider
      value={{
        landingData,
        isEditMode,
        isAdmin,
        isSaving,
        isLoading,
        hasUnsavedChanges,
        activeModal,
        showLoginModal,
        setShowLoginModal,
        setActiveModal,
        updateSection,
        saveChanges,
        discardChanges,
        loginAdmin,
        logoutAdmin,
        refreshData: loadLandingData,
      }}
    >
      {children}
    </LandingContext.Provider>
  );
};

const defaultContextValue: LandingContextType = {
  landingData: DEFAULT_LANDING_PAGE_DATA,
  isEditMode: false,
  isAdmin: false,
  isSaving: false,
  isLoading: false,
  hasUnsavedChanges: false,
  activeModal: null,
  showLoginModal: false,
  setShowLoginModal: () => {},
  setActiveModal: () => {},
  updateSection: () => {},
  saveChanges: async () => false,
  discardChanges: () => {},
  loginAdmin: async () => false,
  logoutAdmin: () => {},
  refreshData: async () => {},
};

export const useOptionalLanding = () => {
  return useContext(LandingContext);
};

export const useLanding = (): LandingContextType => {
  const context = useContext(LandingContext);
  if (!context) {
    return defaultContextValue;
  }
  return context;
};
