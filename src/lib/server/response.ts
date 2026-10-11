import { NextResponse } from "next/server";

const createMeta = () => ({
  timestamp: new Date().toISOString(),
  apiVersion: "v1.2",
});

export const apiSuccess = <T>(data: T, message = "Success", statusCode = 200) =>
  NextResponse.json(
    { statusCode, message, data, meta: createMeta() },
    { status: statusCode }
  );

export const apiError = (message: string, statusCode = 500) =>
  NextResponse.json(
    { statusCode, message, data: null, meta: createMeta() },
    { status: statusCode }
  );
