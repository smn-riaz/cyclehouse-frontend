/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "./baseApi";

const productApi = baseApi.injectEndpoints({
    endpoints:(builder) => ({

        getAllProducts:builder.query({
          query:() => ({
              url:'/products',
              method:'GET',
          }),
          providesTags:['products']
        }),

        getSpecificProduct:builder.query({
          query:(id:string) => ({
              url:`/products/${id}`,
              method:'GET',
          }),
        }),

        createProduct:builder.mutation({
          query:(data) => ({
              url:'/products/create-product',
              method:'POST',
              body:data
          }),
          invalidatesTags:['products']
        }),

        updateProduct: builder.mutation({
          query: ({ _id, ...updateData }) => ({
            url: `/products/${_id}`,
            method: 'PATCH',
            body: updateData,
          }),
          invalidatesTags:['products']
        }),

        deleteProduct: builder.mutation({
          query: (id) => ({
            url: `/products/${id}`,
            method: 'DELETE',
          }),
          invalidatesTags:['products']
        }),
        
      })
})


export const {useGetAllProductsQuery,useCreateProductMutation,useGetSpecificProductQuery,useUpdateProductMutation, useDeleteProductMutation} = productApi