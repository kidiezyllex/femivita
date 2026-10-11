import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export interface IJwtPayload {
  sub: string;
  username: string;
  role: string;
}

export const signAccessToken = (payload: IJwtPayload): string =>
  jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });

export const verifyAccessToken = (token: string): IJwtPayload =>
  jwt.verify(token, JWT_SECRET) as IJwtPayload;
