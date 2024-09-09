import { z } from "zod";

export const userNamevalidator = z
  .string()
  .min(3, "Username must be atleast 2 characters long")
  .max(100, "Username must be no more than 20 characters long");
export const emailvalidator = z.string().email({ message: "Invalid email" });
export const passwordvalidator = z
  .string()
  .min(6, { message: "Password must be atleast 6 characters long" });
// export const phonevalidator = z.string().min(10).max(10);
// export const classvalidator = z.string().min(1).max(10);
// export const fatherNamevalidator = z.string().min(1).max(10);

export const signUpSchema = z.object({
  name: userNamevalidator,
  email: emailvalidator,
  password: passwordvalidator,
  // phone: phonevalidator,
  // class: classvalidator,
  // fatherName: fatherNamevalidator,
});
