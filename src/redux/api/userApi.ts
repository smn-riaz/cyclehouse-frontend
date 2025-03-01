import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints:(builder) => ({

        getAllUsers:builder.query({
          query:() => ({
              url:'/users',
              method:'GET',
          }),
          providesTags:['users']
        }),

        getSpecificUser:builder.query({
          query:(id) => ({
              url:`/users/${id}`,
              method:'GET',
          })
        }),

        registerUser:builder.mutation({
          query:(data) => ({
              url:'/users/create-user',
              method:'POST',
              body:data
          }),
          
        }),

        deactiveUser:builder.mutation({
          query:(id:string) => ({
              url:`/users/deactivate-user/${id}`,
              method:'DELETE'
          }),
          invalidatesTags:['users']
        })
        
      })
})


export const {useGetAllUsersQuery,useRegisterUserMutation,useDeactiveUserMutation, useGetSpecificUserQuery} = userApi