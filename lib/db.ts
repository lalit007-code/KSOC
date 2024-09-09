import mongoose, { Document, Model, Schema } from "mongoose";

// Define the interface for the User document
export interface IUser extends Document {
  name: string;
  email: string;

  password: string;
  verifiyCode: string;
  verifyCodeExpiry: Date;

  createdAt?: Date;
  updatedAt?: Date;
}

export interface IUserDetails extends Document {
  phone: string;
  class: string;
  fatherName: string;
  aboutUser?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Define the Mongoose schema
const userDetails: Schema<IUserDetails> = new Schema(
  {
    phone: { type: String, required: true },
    class: { type: String, required: [true, "class is required"] },
    fatherName: {
      type: String,
      required: [true, "fatherName is required"],
      trim: true,
    },
    aboutUser: { type: String },
  },
  { timestamps: true }
);

const userSchema: Schema<IUser> = new Schema(
  {
    name: { type: String, required: [true, "name is required"], trim: true },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      match: [/.+\@.+\..+/, "email is invalid"],
    },
    password: { type: String, required: true },
    verifiyCode: { type: String, required: true },
    verifyCodeExpiry: { type: Date, required: true },
  },
  { timestamps: true }
);

// Create the Mongoose model
const UserModel: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);

const UserDetailsModel: Model<IUserDetails> =
  mongoose.models.UserDetails ||
  mongoose.model<IUserDetails>("UserDetails", userDetails);

export default {
  UserModel,
  UserDetailsModel,
};
