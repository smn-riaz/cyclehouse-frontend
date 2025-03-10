import { baseApi } from "./baseApi";

const orderApi = baseApi.injectEndpoints({
    endpoints:(builder) => ({

        getAllOrders:builder.query({
          query:() => ({
              url:'/orders',
              method:'GET',
          }),
          providesTags:['orders']
        }),

        createOrder:builder.mutation({
          query:(data) => (
            {
              url:'/orders/create-order',
              method:'POST',
              body:data
          }),
          invalidatesTags:['orders']
        }),

        getUserOrders:builder.query({
          query:(id:string) => ({
              url:`/orders/user-order/${id}`,
              method:'GET',
          }),
          providesTags:['orders']
        }),
        
        updateOrderStatus:builder.mutation({
          query:({ id, payload }: { id: string; payload: { status: string } }) => ({
              url:`/orders/update-status/${id}`,
              method:'PATCH',
              body:payload
          }),
          invalidatesTags:["orders"]
        }),
      })
})


export const {useGetAllOrdersQuery, useCreateOrderMutation,useGetUserOrdersQuery, useUpdateOrderStatusMutation} = orderApi