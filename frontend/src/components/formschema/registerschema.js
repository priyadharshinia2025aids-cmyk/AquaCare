import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(3, "Name must contain at least 3 letters"),
  email: z.string().email("Enter a valid email"),
  mobile: z.string().regex(/^[0-9]{10}$/, "Mobile number must contain 10 digits"),
  password: z.string().min(8, "Password should contain at least 8 characters"),
  confirmPassword: z.string(),
  role: z.enum(["customer", "admin", "manager", "technician"], { message: "Please select a valid role" })
}).refine((data) => data.password === data.confirmPassword, { message: "Passwords do not match", path: ["confirmPassword"] });