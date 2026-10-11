import { NextRequest } from "next/server";
import { connectMongo } from "./mongodb";
import { User } from "./models/User";
import { verifyAccessToken } from "./jwt";

export class UnauthorizedError extends Error {}

export const requireAuth = async (req: NextRequest) => {
  const authHeader = req.headers.get("authorization") || "";
  const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : "";

  if (!token) {
    throw new UnauthorizedError("Unauthorized");
  }

  let payload;
  try {
    payload = verifyAccessToken(token);
  } catch {
    throw new UnauthorizedError("Unauthorized");
  }

  await connectMongo();
  const user = await User.findById(payload.sub).exec();

  if (!user) {
    throw new UnauthorizedError("Phiên đăng nhập không hợp lệ");
  }
  if (user.status === "BANNED") {
    throw new UnauthorizedError("Tài khoản của bạn đã bị khóa");
  }

  return user;
};
