import { api } from "./api";
import { IUploadImageResponse } from "@/interface/upload";

export const MAX_IMAGE_SIZE = 20 * 1024 * 1024; // 20MB
export const ALLOWED_IMAGE_MIMETYPES = /\/(jpg|jpeg|png|gif|webp)$/i;

export interface IValidateImageResult {
  valid: boolean;
  error?: string;
}

interface IUploadSignatureData {
  signature: string;
  timestamp: number;
  apiKey: string;
  cloudName: string;
  folder: string;
  transformation: string;
}

// Cloudinary's free plan rejects source files larger than 10MB.
const CLOUDINARY_MAX_BYTES = 10 * 1024 * 1024;

const loadImage = (file: File): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Không thể đọc file ảnh để nén"));
    };
    img.src = url;
  });

const canvasToBlob = (canvas: HTMLCanvasElement, quality: number): Promise<Blob> =>
  new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => (blob ? resolve(blob) : reject(new Error("Không thể nén ảnh"))),
      "image/jpeg",
      quality / 100
    );
  });

/**
 * Downscale + re-encode an oversized image as JPEG in the browser using
 * Canvas, mirroring the resize/quality backoff the backend used to do with
 * sharp before uploads moved to go straight from the browser to Cloudinary.
 * Only runs when the file exceeds Cloudinary's free-plan 10MB source limit.
 */
const compressImageIfNeeded = async (file: File): Promise<File> => {
  if (file.size <= CLOUDINARY_MAX_BYTES) {
    return file;
  }

  const img = await loadImage(file);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return file;
  }

  let quality = 80;
  let width = img.naturalWidth;
  let height = img.naturalHeight;

  for (let attempt = 0; attempt < 6; attempt++) {
    canvas.width = width;
    canvas.height = height;
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, 0, 0, width, height);

    const blob = await canvasToBlob(canvas, quality);
    if (blob.size <= CLOUDINARY_MAX_BYTES) {
      return new File([blob], file.name.replace(/\.\w+$/, ".jpg"), {
        type: "image/jpeg",
      });
    }

    quality = Math.max(quality - 15, 35);
    width = Math.round(width * 0.85);
    height = Math.round(height * 0.85);
  }

  // Best effort after all attempts — still smaller than the original.
  const finalBlob = await canvasToBlob(canvas, quality);
  return new File([finalBlob], file.name.replace(/\.\w+$/, ".jpg"), {
    type: "image/jpeg",
  });
};

/**
 * Validate image file constraints before sending to server:
 * - File existence
 * - Mimetype /\/(jpg|jpeg|png|gif|webp)$/
 * - Max size 20MB
 */
export const validateImageFile = (file?: File | null): IValidateImageResult => {
  if (!file) {
    return {
      valid: false,
      error: "Vui lòng chọn file để upload",
    };
  }

  const isTypeValid =
    ALLOWED_IMAGE_MIMETYPES.test(file.type) ||
    /\.(jpg|jpeg|png|gif|webp)$/i.test(file.name);

  if (!isTypeValid) {
    return {
      valid: false,
      error: "Định dạng file không hợp lệ. Chỉ chấp nhận các file ảnh: jpg, jpeg, png, gif, webp.",
    };
  }

  if (file.size > MAX_IMAGE_SIZE) {
    return {
      valid: false,
      error: "Dung lượng ảnh vượt quá giới hạn 20MB.",
    };
  }

  return { valid: true };
};

/**
 * Upload single image directly from the browser to Cloudinary.
 *
 * The file never passes through our own server — only a small signed
 * payload (~200 bytes) is requested from /upload/signature first. This
 * avoids the 413 Payload Too Large errors that hit serverless Route
 * Handlers (Vercel caps request bodies at 4.5MB) when large images were
 * being proxied through our own API before.
 */
export const uploadImageService = async (
  file: File,
  onProgress?: (progressPercent: number) => void
): Promise<IUploadImageResponse> => {
  const validation = validateImageFile(file);
  if (!validation.valid) {
    throw new Error(validation.error);
  }

  const signatureResponse = await api.post<any>("/upload/signature");
  const signatureData: IUploadSignatureData =
    signatureResponse.data?.data || signatureResponse.data;

  const uploadFile = await compressImageIfNeeded(file);

  const formData = new FormData();
  formData.append("file", uploadFile);
  formData.append("api_key", signatureData.apiKey);
  formData.append("timestamp", String(signatureData.timestamp));
  formData.append("signature", signatureData.signature);
  formData.append("folder", signatureData.folder);
  formData.append("transformation", signatureData.transformation);

  const data = await new Promise<any>((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      `https://api.cloudinary.com/v1_1/${signatureData.cloudName}/image/upload`
    );

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable && onProgress) {
        onProgress(Math.round((event.loaded * 100) / event.total));
      }
    };

    xhr.onload = () => {
      try {
        const parsed = JSON.parse(xhr.responseText);
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(parsed);
        } else {
          reject(new Error(parsed?.error?.message || "Upload ảnh lên Cloudinary thất bại"));
        }
      } catch {
        reject(new Error("Không thể đọc phản hồi từ Cloudinary"));
      }
    };

    xhr.onerror = () => reject(new Error("Có lỗi xảy ra khi upload ảnh. Vui lòng thử lại."));
    xhr.send(formData);
  });

  return {
    statusCode: 201,
    message: "Upload hình ảnh thành công",
    data: {
      public_id: data.public_id,
      url: data.secure_url,
      format: data.format,
      bytes: data.bytes,
    },
  };
};

export const uploadService = {
  uploadImage: uploadImageService,
  validateImageFile,
};

export default uploadService;
