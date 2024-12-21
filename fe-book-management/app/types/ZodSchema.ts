import { z } from "zod";

export const addFormSchema = z.object({
  title: z
    .string()
    .min(1, { message: "title cannot be empty" })
    .max(255, { message: "title must be at least 255 characters" }),
  author: z
    .string()
    .min(1, { message: "author cannot be empty" })
    .max(255, { message: "author must be at least 255 characters" }),
  year: z
    .string()
    .min(1, { message: "year cannot be empty" })
});
