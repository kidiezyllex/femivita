import { NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import { connectMongo } from "@/lib/server/mongodb";
import { User } from "@/lib/server/models/User";
import { signAccessToken } from "@/lib/server/jwt";
import { apiSuccess, apiError } from "@/lib/server/response";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { username, password } = body || {};

    if (!username || typeof username !== "string") {
      return apiError("username should not be empty", 400);
    }
    if (!password || typeof password !== "string" || password.length < 6) {
      return apiError("password must be longer than or equal to 6 characters", 400);
    }

    await connectMongo();
    const user = await User.findOne({ $or: [{ username }, { email: username }] })
      .select("+password")
      .exec();

    if (!user) {
      return apiError("Invalid credentials", 401);
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return apiError("Invalid credentials", 401);
    }

    const payload = {
      sub: user._id.toString(),
      username: user.username,
      role: user.role,
    };

    const data = {
      accessToken: signAccessToken(payload),
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        balance: user.balance,
      },
    };

    return apiSuccess(data);
  } catch (error) {
    console.error("Login error:", error);
    return apiError("Internal server error", 500);
  }
}
