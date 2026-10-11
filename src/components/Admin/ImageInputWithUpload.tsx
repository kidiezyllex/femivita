"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icon } from "@/components/ui/mdi-icon";
import { useUploadImage } from "@/hooks/useUploadImage";
import { mdiCloudUploadOutline, mdiImageOutline, mdiLoading, mdiOpenInNew } from "@mdi/js";
import React, { useRef, useState } from "react";

interface ImageInputWithUploadProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

export const ImageInputWithUpload: React.FC<ImageInputWithUploadProps> = ({
  value,
  onChange,
  placeholder = "/images/...",
  required = false,
  disabled = false,
  className = "",
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imgError, setImgError] = useState<boolean>(false);

  const { uploadImage, isUploading, progress } = useUploadImage({
    showToast: true,
    onSuccess: (data) => {
      onChange(data.url);
      setImgError(false);
    },
  });

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    await uploadImage(file);

    // Reset input value so user can re-upload same file if desired
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Input
            type="text"
            required={required}
            disabled={disabled || isUploading}
            value={value}
            onChange={(e) => {
              onChange(e.target.value);
              setImgError(false);
            }}
            placeholder={placeholder}
            className="w-full pr-10"
          />
          {value && !imgError && (
            <a
              href={value}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-primaryV1/50 transition-colors hover:text-primaryV1"
              title="Mở ảnh trong tab mới"
            >
              <Icon path={mdiOpenInNew} size={0.65} />
            </a>
          )}
        </div>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileSelect}
          accept="image/png,image/jpeg,image/jpg,image/gif,image/webp"
          className="hidden"
        />

        <Button
          type="button"
          size="icon"
          variant="primaryV1"
          disabled={disabled || isUploading}
          onClick={() => fileInputRef.current?.click()}
          title="Tải ảnh lên"
        >
          {isUploading ? (
            <Icon path={mdiLoading} size={0.8} className="animate-spin text-accentV1" />
          ) : (
            <Icon path={mdiCloudUploadOutline} size={0.8} />
          )}
        </Button>
      </div>

      {/* Progress bar while uploading */}
      {isUploading && (
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-primaryV1/10">
          <div
            className="h-1.5 rounded-full bg-accentV1 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* Image Preview */}
      {value && (
        <div className="flex items-center gap-3 rounded-lg border border-primaryV1/20 bg-white/70 p-2">
          <div className="relative flex h-20 w-20 flex-shrink-0 items-center justify-center overflow-hidden rounded-md border border-primaryV1/10 bg-primaryV1/5">
            {!imgError ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={value}
                alt="Image Preview"
                className="h-full w-full object-cover"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="flex flex-col items-center justify-center p-1 text-center text-primaryV1/40">
                <Icon path={mdiImageOutline} size={0.8} />
              </div>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-semibold text-primaryV1">{value}</p>
            <p className="text-sm text-secondaryV1">
              {!imgError ? "Xem trước ảnh hợp lệ" : "Không tải được ảnh xem trước"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageInputWithUpload;
