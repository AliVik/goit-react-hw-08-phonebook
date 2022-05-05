import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApiSlice = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  tagTypes: ['users'],
  endpoints: builder => ({
    signUpUser: builder.mutation({
      query: user => ({
        url: `/users/signup`,
        method: 'POST',
        body: { name: user.name, email: user.email, password: user.password },
        providesTags: ['users'],
      }),
    }),
    // logInUser: builder.mutation({
    //   query: user => ({
    //     url: `/users/login`,
    //     method: 'POST',
    //     body: { email: user.email, password: user.password },
    //   }),
    //   providesTags: ['users'],
    // }),
    // logOutUser: builder.query({
    //   query: contactId => ({
    //     url: `/contacts/${contactId}`,
    //     method: 'DELETE',
    //   }),
    //   invalidatesTags: ['Contacts'],
    // }),
  }),
});

export const { useSignUpUserMutation, useLogInUserMutation } = userApiSlice;
