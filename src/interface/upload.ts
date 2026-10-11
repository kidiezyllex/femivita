export interface IUploadImageData {
  public_id: string;
  url: string;
  format: string;
  bytes: number;
}

export interface IUploadImageMeta {
  timestamp: string;
  apiVersion: string;
}

export interface IUploadImageResponse {
  statusCode: number;
  message: string;
  data: IUploadImageData;
  meta?: IUploadImageMeta;
}

// Backward compatibility alias
export interface IUploadResponse extends IUploadImageData {}

export interface IDeleteFileResponse {
  statusCode: number;
  message: string;
  data: any;
}

export interface IDeleteFileParams {
  fileId: string;
  type?: "image" | "raw";
}
