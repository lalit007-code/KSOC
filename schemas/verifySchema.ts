import { z } from "zod";

export const verifySchema = z.object({
  verifiyCode: z.string().length(6, "verifiyCode must be 6 characters long"),
});
