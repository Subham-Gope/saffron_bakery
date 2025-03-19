import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(3, "Name must be longer than 3 characters"),
  email: z.string().email("Please enter a valid Email"),
  message: z.string().min(10, "Message must be longer than 10 characters"),
});
