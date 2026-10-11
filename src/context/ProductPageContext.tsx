"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { ProductPageData } from "@/types/productPage";
import {
  DEFAULT_COMBO_PRODUCT_PAGE_DATA,
  DEFAULT_CREAM_PRODUCT_PAGE_DATA,
  DEFAULT_SERUM_PRODUCT_PAGE_DATA,
} from "@/constants/defaultProductPageData";

const DEFAULT_DATA_BY_SLUG: Record<string, ProductPageData> = {
  combo: DEFAULT_COMBO_PRODUCT_PAGE_DATA,
  serum: DEFAULT_SERUM_PRODUCT_PAGE_DATA,
  cream: DEFAULT_CREAM_PRODUCT_PAGE_DATA,
};
import { productPageService } from "@/services/productPage.service";
import { authService, LoginCredentials } from "@/services/auth.service";
import { toast } from "react-toastify";

interface ProductPageContextType {
  productPageData: ProductPageData;
  isEditMode: boolean;
  isAdmin: boolean;
  isSaving: boolean;
  isLoading: boolean;
  hasUnsavedChanges: boolean;
  activeModal: string | null;
  showLoginModal: boolean;
  setShowLoginModal: (show: boolean) => void;
  setActiveModal: (modal: string | null) => void;
  updateSection: <K extends keyof ProductPageData>(
    section: K,
    data: ProductPageData[K]
  ) => void;
  saveChanges: () => Promise<boolean>;
  discardChanges: () => void;
  loginAdmin: (credentials: LoginCredentials) => Promise<boolean>;
  logoutAdmin: () => void;
  refreshData: () => Promise<void>;
}

export const ProductPageContext = createContext<ProductPageContextType | undefined>(undefined);

export const ProductPageProvider: React.FC<{
  children: React.ReactNode;
  slug: string;
  initialEditMode?: boolean;
}> = ({ children, slug, initialEditMode = false }) => {
  const defaultData = DEFAULT_DATA_BY_SLUG[slug] || { ...DEFAULT_COMBO_PRODUCT_PAGE_DATA, slug };
  const [productPageData, setProductPageData] = useState<ProductPageData>(defaultData);
  const [originalData, setOriginalData] = useState<ProductPageData>(defaultData);
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

    loadProductPageData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialEditMode, slug]);

  const loadProductPageData = async () => {
    setIsLoading(true);
    try {
      const data = await productPageService.getProductPage(slug);
      setProductPageData(data);
      setOriginalData(data);
      setHasUnsavedChanges(false);
    } catch (error) {
      console.error("Error loading product page data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateSection = <K extends keyof ProductPageData>(
    section: K,
    data: ProductPageData[K]
  ) => {
    setProductPageData((prev) => {
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
      const updated = await productPageService.updateProductPage(slug, productPageData);
      setProductPageData(updated);
      setOriginalData(updated);
      setHasUnsavedChanges(false);
      toast.success("Đã lưu tất cả thay đổi trên trang sản phẩm thành công!");
      return true;
    } catch (error: any) {
      console.error("Error saving product page:", error);
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
    setProductPageData(originalData);
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
    <ProductPageContext.Provider
      value={{
        productPageData,
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
        refreshData: loadProductPageData,
      }}
    >
      {children}
    </ProductPageContext.Provider>
  );
};

const defaultContextValue: ProductPageContextType = {
  productPageData: DEFAULT_COMBO_PRODUCT_PAGE_DATA,
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

export const useOptionalProductPage = () => {
  return useContext(ProductPageContext);
};

export const useProductPage = (): ProductPageContextType => {
  const context = useContext(ProductPageContext);
  if (!context) {
    return defaultContextValue;
  }
  return context;
};
