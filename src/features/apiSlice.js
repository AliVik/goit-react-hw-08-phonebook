import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { store } from 'redux/store';

export const userApiSlice = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',

    prepareHeaders: headers => {
      const token = store.getState().auth.token;
      console.log(token);

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
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
    logInUser: builder.mutation({
      query: user => ({
        url: `/users/login`,
        method: 'POST',
        body: { email: user.email, password: user.password },
      }),
      providesTags: ['users'],
    }),
    logOutUser: builder.mutation({
      query: token => ({
        url: `/users/logout`,
        method: 'POST',
      }),
      providesTags: ['users'],
    }),
  }),
});

export const {
  useSignUpUserMutation,
  useLogInUserMutation,
  useLogOutUserMutation,
} = userApiSlice;
