"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { StoryPageData } from "@/types/storyPage";
import { DEFAULT_STORY_PAGE_DATA } from "@/constants/defaultStoryPageData";
import { storyPageService } from "@/services/storyPage.service";
import { authService, LoginCredentials } from "@/services/auth.service";
import { toast } from "react-toastify";

interface StoryContextType {
  storyData: StoryPageData;
  isEditMode: boolean;
  isAdmin: boolean;
  isSaving: boolean;
  isLoading: boolean;
  hasUnsavedChanges: boolean;
  activeModal: string | null;
  showLoginModal: boolean;
  setShowLoginModal: (show: boolean) => void;
  setActiveModal: (modal: string | null) => void;
  updateSection: <K extends keyof StoryPageData>(
    section: K,
    data: StoryPageData[K]
  ) => void;
  saveChanges: () => Promise<boolean>;
  discardChanges: () => void;
  loginAdmin: (credentials: LoginCredentials) => Promise<boolean>;
  logoutAdmin: () => void;
  refreshData: () => Promise<void>;
}

export const StoryContext = createContext<StoryContextType | undefined>(undefined);

export const StoryProvider: React.FC<{
  children: React.ReactNode;
  initialEditMode?: boolean;
}> = ({ children, initialEditMode = false }) => {
  const [storyData, setStoryData] = useState<StoryPageData>(DEFAULT_STORY_PAGE_DATA);
  const [originalData, setOriginalData] = useState<StoryPageData>(DEFAULT_STORY_PAGE_DATA);
  const [isEditMode] = useState<boolean>(initialEditMode);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState<boolean>(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);

  useEffect(() => {
    const isAuth = authService.isAdminAuthenticated();
    setIsAdmin(isAuth);

    if (initialEditMode && !isAuth) {
      setShowLoginModal(true);
    }

    loadStoryData();
  }, [initialEditMode]);

  const loadStoryData = async () => {
    setIsLoading(true);
    try {
      const data = await storyPageService.getStoryPage();
      setStoryData(data);
      setOriginalData(data);
      setHasUnsavedChanges(false);
    } catch (error) {
      console.error("Error loading story data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateSection = <K extends keyof StoryPageData>(
    section: K,
    data: StoryPageData[K]
  ) => {
    setStoryData((prev) => {
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
      const updated = await storyPageService.updateStoryPage(storyData);
      setStoryData(updated);
      setOriginalData(updated);
      setHasUnsavedChanges(false);
      toast.success("Đã lưu tất cả thay đổi trên trang Về Musase thành công!");
      return true;
    } catch (error: any) {
      console.error("Error saving story page:", error);
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
    setStoryData(originalData);
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
    <StoryContext.Provider
      value={{
        storyData,
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
        refreshData: loadStoryData,
      }}
    >
      {children}
    </StoryContext.Provider>
  );
};

const defaultContextValue: StoryContextType = {
  storyData: DEFAULT_STORY_PAGE_DATA,
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

export const useOptionalStory = () => {
  return useContext(StoryContext);
};

export const useStory = (): StoryContextType => {
  const context = useContext(StoryContext);
  if (!context) {
    return defaultContextValue;
  }
  return context;
};
