// packages/database/src/models/User.ts
import mongoose, { Schema, Document, Model } from "mongoose";

export type AuthProvider = "credentials" | "google" | "github";

export interface IUser extends Document {
  id?: string;
  email: string;
  password?: string;
  salt?: string;
  name?: string;
  provider: AuthProvider;
  providerId?: string; // the provider's user ID (e.g. Google "sub"), absent for "credentials"
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: function (this: IUser) {
        return this.provider === "credentials";
      },
    },
    salt: {
      type: String,
      required: function (this: IUser) {
        return this.provider === "credentials";
      },
    },
    name: {
      type: String,
      trim: true,
    },
    provider: {
      type: String,
      enum: ["credentials", "google", "github"],
      required: true,
      default: "credentials",
    },
    providerId: {
      type: String,
    },
  },
  { timestamps: true }
);

// Prevent duplicate OAuth accounts for the same provider identity
userSchema.index(
  { provider: 1, providerId: 1 },
  { unique: true, partialFilterExpression: { providerId: { $exists: true } } }
);

export const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);