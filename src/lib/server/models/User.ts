import mongoose, { Schema, models, model } from "mongoose";

export interface IUser {
  _id: mongoose.Types.ObjectId;
  username: string;
  email: string;
  password: string;
  balance: number;
  role: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    balance: { type: Number, default: 0 },
    role: { type: String, default: "USER" },
    status: { type: String, default: "ACTIVE" },
  },
  { timestamps: true, collection: "users" }
);

export const User = models.User || model<IUser>("User", UserSchema);
