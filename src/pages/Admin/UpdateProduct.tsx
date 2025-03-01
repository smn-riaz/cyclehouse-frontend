/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  useGetSpecificProductQuery, 
  useUpdateProductMutation 
} from "@/redux/api/productApi";
import { toast } from "sonner";
import {  useLocation, useNavigate } from "react-router-dom";
import { updateProductValidationSchema } from "@/validation/createProduct.validation";


type FormData = z.infer<typeof updateProductValidationSchema>;

const UpdateProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();


  const cycleId = location.pathname.split("/").pop() || "";


  const { data, isFetching, error } = useGetSpecificProductQuery(cycleId);
  const bicycle = data?.data;


  const [updateProduct] = useUpdateProductMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(updateProductValidationSchema),
  });


  useEffect(() => {
    if (bicycle) {
      reset(bicycle);
    }
  }, [bicycle, reset]);

  const onSubmit = async (formData: FormData) => {


    const toastId = toast.loading("Updating...");

    const productData = {
      _id: cycleId,
      ...formData,
      price: Number(formData.price),
      quantity: Number(formData.quantity),
      inStock: Number(formData.quantity) > 0,
    };


    try {
     await updateProduct(productData);
      toast.success("Product updated successfully!", { id: toastId,duration:1500 });
      navigate("/admin/all-products");
    } catch (error: any) {
      toast.error(error?.message || "An error occurred", { id: toastId,duration:1500 });
    }
  };

  return (
    <div className="sm:p-6 p-3 m-3 sm:m-6 md:flex justify-between space-x-10">
      <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md space-y-6 border border-gray-200"
      >
        <p className="font-bold text-2xl text-green-600 text-center">Update Product</p>

        {isFetching ? (
          <p className="text-center text-gray-500">Loading product data...</p>
        ) : error ? (
          <p className="text-center text-red-500">Failed to load product data.</p>
        ) : (
          <>
            <div className="flex flex-col md:flex-row md:gap-12">
              <div className="flex-1 space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold">Name:</label>
                  <input
                    type="text"
                    {...register("name")}
                    className="border p-2 w-full rounded-md focus:ring-2 focus:ring-green-500"
                  />
                  {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold">Brand:</label>
                  <input
                    type="text"
                    {...register("brand")}
                    className="border p-2 w-full rounded-md focus:ring-2 focus:ring-green-500"
                  />
                  {errors.brand && <p className="text-red-500">{errors.brand.message}</p>}
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold">Price:</label>
                  <input
                    type="number"
                    {...register("price", { valueAsNumber: true })}
                    className="border p-2 w-full rounded-md focus:ring-2 focus:ring-green-500"
                  />
                  {errors.price && <p className="text-red-500">{errors.price.message}</p>}
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
                  {errors.type && <p className="text-red-500">{errors.type.message}</p>}
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold">Quantity:</label>
                  <input
                    type="number"
                    {...register("quantity", { valueAsNumber: true })}
                    className="border p-2 w-full rounded-md focus:ring-2 focus:ring-green-500"
                  />
                  {errors.quantity && <p className="text-red-500">{errors.quantity.message}</p>}
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold">Description:</label>
                  <textarea
                    {...register("description")}
                    className="border p-2 w-full rounded-md focus:ring-2 focus:ring-green-500"
                  />
                  {errors.description && <p className="text-red-500">{errors.description.message}</p>}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
            >
              {isSubmitting ? "Updating..." : "Update"}
            </button>
          </>
        )}
      </form>
      </div>

      <div className="flex justify-start items-start  my-4">
      {
        bicycle && <div
        key={bicycle._id}
        className="bg-white shadow-lg rounded-2xl p-4 transition transform hover:shadow-xl"
      >
     
        <img
          src={bicycle.image}
          alt={bicycle.name}
          className="w-full h-48 object-cover rounded-lg"
        />
  
        <div className="mt-4">
          <h2 className="text-xl font-bold">{bicycle.name}</h2>
          <p className="text-gray-500">{bicycle.type}</p>
          <p className="text-sm text-gray-700 mt-2">{bicycle.description}</p>
  
        
          <div className="mt-4 flex justify-between items-center">
            <span className="text-lg font-semibold text-green-600">
              ${bicycle.price}
            </span>
            <span className="text-lg font-semibold bg-green-600 w-6 flex justify-center items-center text-white rounded-full">
              {bicycle.quantity}
            </span>
          </div>
        </div>
      </div>
      }
</div>

    </div>
  );
};

export default UpdateProduct;
