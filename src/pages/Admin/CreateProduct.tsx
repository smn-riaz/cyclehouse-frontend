/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useCreateProductMutation } from "@/redux/api/productApi";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { createProductValidationSchema } from "@/validation/createProduct.validation";



type FormData = z.infer<typeof createProductValidationSchema>;

const CreateProduct = () => {

  const navigate = useNavigate()

  const [createProduct] = useCreateProductMutation();

  const { register, handleSubmit, setValue,formState: { isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(createProductValidationSchema),
  });

  const onSubmit = async (data: FormData) => {
  
    const toastId = toast("Creating..")

    const {name,brand,price,type,description,quantity} = data

    data.inStock = data.quantity > 0;

    const productData = {
      name,
      image: "",
      brand,
      price,
      type,
      description,
      quantity,
      inStock: data.inStock,
    };

    const formData  = new FormData()

    formData.append('data',JSON.stringify(productData))
    if (data.image) {
      formData.append('file', data.image);
    }

   

    try {
      const result = await createProduct(formData)
    
      if(result?.error){
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        toast.error((result?.error as any)?.message || "An error occurred")
      } else {
        toast.success("Product created successfully !",{id:toastId,duration:1500})
        navigate('/admin/all-products')
      }
    } catch (error) {
      toast.error("Something went wrong",{id:toastId,duration:1500})
    }
  };

  return (
    <div className="sm:p-6 py-8 sm:m-6 my-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md space-y-6 border border-gray-200"
      >
        <p className="font-bold text-2xl text-green-600 text-center">
          Create Product
        </p>
        <div className="flex flex-col md:flex-row md:gap-12">
          <div className="flex-1 space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold">Name:</label>
              <input
                type="text"
                {...register("name")}
                className="border p-2 w-full rounded-md focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">
                Brand:
              </label>
              <input
                type="text"
                {...register("brand")}
                className="border p-2 w-full rounded-md focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">
                Price:
              </label>
              <input
                type="number"
                {...register("price", { valueAsNumber: true })}
                className="border p-2 w-full rounded-md focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">
                Image:
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    setValue("image", e.target.files[0]);
                  }
                }}
                className="border p-2 w-full rounded-md focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold">Type:</label>
              <select
                {...register("type")}
                className="border p-2 w-full rounded-md focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select a type</option>
                <option value="Electric">Electric</option>
                <option value="Mountain">Mountain</option>
                <option value="Road">Road</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">
                Quantity:
              </label>
              <input
                type="number"
                {...register("quantity", { valueAsNumber: true })}
                className="border p-2 w-full rounded-md focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">
                Description:
              </label>
              <textarea
                {...register("description")}
                className="border p-2 w-full rounded-md focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
        >
          {isSubmitting ? "Creating..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
