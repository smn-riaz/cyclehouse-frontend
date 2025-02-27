import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  brand: z.string().min(1, "Brand is required"),
  price: z.number().min(0, "Price must be at least 0"),
  type: z.enum(["Electric", "Mountain", "Road", "Hybrid"]),
  description: z.string().min(10, "Description must be at least 10 characters"),
  quantity: z.number().min(0, "Quantity cannot be negative"),
  inStock: z.boolean(),
});

type FormData = z.infer<typeof schema>;

 const  UpdateProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema)
    ,
    defaultValues: {
      name: "Roadster 5000",
      brand: "SpeedX",
      price: 300,
      type: "Road",
      description: "A premium road bike designed for speed and performance.",
      quantity: 0,
      inStock: false,
    },
  });

  const onSubmit = (data: FormData) => {
    data.inStock = data.quantity ? true : false
    console.log("Form submitted:", data);
  };

  return (
    <div className="p-6 m-6">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md space-y-6 border border-gray-200">
      <p className="font-bold text-2xl text-green-600 text-center">Update Product</p>
      <div className="flex flex-col md:flex-row md:gap-12">
        <div className="flex-1 space-y-10">
          <div>
            <label className="block text-gray-700 font-semibold">Name:</label>
            <input {...register("name")} className="border p-2 w-full rounded-md  " />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Brand:</label>
            <input {...register("brand")} className="border p-2 w-full rounded-md  " />
            {errors.brand && <p className="text-red-500 text-sm">{errors.brand.message}</p>}
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Price:</label>
            <input type="number" {...register("price", { valueAsNumber: true })} className="border p-2 w-full rounded-md  " />
            {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
          </div>
        </div>
        <div className="flex-1 space-y-10">
          <div>
            <label className="block text-gray-700 font-semibold">Type:</label>
            <select {...register("type")} className="border p-2 w-full rounded-md  ">
              <option value="Electric">Electric</option>
              <option value="Mountain">Mountain</option>
              <option value="Road">Road</option>
              <option value="Hybrid">Hybrid</option>
            </select>
            {errors.type && <p className="text-red-500 text-sm">{errors.type.message}</p>}
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Quantity:</label>
            <input type="number" {...register("quantity", { valueAsNumber: true })} className="border p-2 w-full rounded-md  " />
            {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity.message}</p>}
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Description:</label>
            <textarea {...register("description")} className="border p-2 w-full rounded-md  " />
            {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
          </div>
          
        </div>
      </div>
      <button type="submit" className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">Submit</button>
    </form>
    </div>
  );
}


export default UpdateProduct