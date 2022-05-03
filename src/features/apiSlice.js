import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsFromApi = createApi({
  reducerPath: 'contactsFromApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://626e97fc034ec185d33e23b7.mockapi.io/contacts/v1',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContactsFromApi: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contacts'],
    }),
    addContactToApi: builder.mutation({
      query: contact => ({
        url: `/contacts`,
        method: 'POST',
        body: { name: contact.name, number: contact.number },
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContactFromApi: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsFromApiQuery,
  useDeleteContactFromApiMutation,
  useAddContactToApiMutation,
} = contactsFromApi;
