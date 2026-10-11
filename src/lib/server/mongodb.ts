import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("Missing MONGO_URI environment variable");
}

declare global {
  // eslint-disable-next-line no-var
  var __mongooseConn: Promise<typeof mongoose> | undefined;
}

export const connectMongo = async (): Promise<typeof mongoose> => {
  if (!global.__mongooseConn) {
    global.__mongooseConn = mongoose.connect(MONGO_URI as string);
  }
  return global.__mongooseConn;
};
