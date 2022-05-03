import { configureStore } from '@reduxjs/toolkit';
import filterSlice from 'features/filterSlice';
import { contactsFromApi } from '../features/apiSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    [contactsFromApi.reducerPath]: contactsFromApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsFromApi.middleware,
  ],
});

setupListeners(store.dispatch);
