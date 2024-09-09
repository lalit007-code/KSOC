import { z } from "zod";

export const userDetailsSchema = z.object({
  phone: z.string().min(10).max(10),
  class: z.string().min(1).max(10),
  fatherName: z.string().min(1).max(10),
  aboutUser: z.string().min(1).max(100),
});
