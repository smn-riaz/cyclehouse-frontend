import { z } from "zod";

export const createProductValidationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  image: z
    .instanceof(File)
    .or(z.null())
    .refine((file) => file instanceof File && file.size > 0, {
      message: "Image file is required",
    }),
  brand: z.string().min(1, "Brand is required"),
  price: z.number(),
  type: z.enum(["Electric", "Mountain", "Road", "Hybrid"]),
  description: z.string().min(4, "Description must."),
  quantity: z.number(),
  inStock: z.boolean().optional(),
});


export const updateProductValidationSchema = z.object({
  name: z.string().min(1, "Name is required").optional(),
  brand: z.string().min(1, "Brand is required").optional(),
  price: z.number().optional(),
  type: z.enum(["Electric", "Mountain", "Road", "Hybrid"]).optional(),
  description: z.string().min(4, "Description must.").optional(),
  quantity: z.number().optional(),
  inStock: z.boolean().optional().optional(),
});