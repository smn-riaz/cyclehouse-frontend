import { z } from "zod";

export const createProductSchemaValidation = z.object({
  name: z.string().min(1, "Name is required"),
  brand: z.string().min(1, "Brand is required"),
  price: z.number().min(0, "Price must be at least 0"),
  type: z.enum(["Electric", "Mountain", "Road", "Hybrid"]),
  description: z.string().min(10, "Description must be at least 10 characters"),
  quantity: z.number().min(0, "Quantity cannot be negative"),
  inStock: z.boolean(),
});