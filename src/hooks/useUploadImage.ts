"use client";

import { useState, useCallback } from "react";
import { toast } from "react-toastify";
import { uploadService } from "@/services/upload.service";
import { IUploadImageData, IUploadImageResponse } from "@/interface/upload";

export interface UseUploadImageOptions {
  showToast?: boolean;
  onSuccess?: (data: IUploadImageData, response: IUploadImageResponse) => void;
  onError?: (error: Error) => void;
}

export const useUploadImage = (options: UseUploadImageOptions = {}) => {
  const { showToast = true, onSuccess, onError } = options;

  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [uploadedData, setUploadedData] = useState<IUploadImageData | null>(null);

  const reset = useCallback(() => {
    setIsUploading(false);
    setProgress(0);
    setError(null);
    setUploadedData(null);
  }, []);

  const uploadImage = useCallback(
    async (file: File): Promise<IUploadImageData | null> => {
      setIsUploading(true);
      setProgress(0);
      setError(null);

      try {
        const response = await uploadService.uploadImage(file, (percent) => {
          setProgress(percent);
        });

        const data = response.data;
        setUploadedData(data);
        setIsUploading(false);
        setProgress(100);

        if (showToast) {
          toast.success(response.message || "Upload hình ảnh thành công");
        }

        if (onSuccess) {
          onSuccess(data, response);
        }

        return data;
      } catch (err: any) {
        const errorMessage =
          err?.response?.data?.message ||
          err?.message ||
          "Có lỗi xảy ra khi upload ảnh. Vui lòng thử lại.";

        setError(errorMessage);
        setIsUploading(false);
        setProgress(0);

        if (showToast) {
          toast.error(errorMessage);
        }

        if (onError) {
          onError(err instanceof Error ? err : new Error(errorMessage));
        }

        return null;
      }
    },
    [showToast, onSuccess, onError]
  );

  return {
    uploadImage,
    isUploading,
    progress,
    error,
    uploadedData,
    reset,
  };
};

export default useUploadImage;
