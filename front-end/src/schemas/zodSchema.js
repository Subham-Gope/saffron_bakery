import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string("Please Enter a valid name")
    .min(3, "Name must be longer than 3 characters"),
  email: z.email("Please enter a valid email"),
  message: z
    .string()
    .min(10, "please enter a message longer than 10 characters"),
});
