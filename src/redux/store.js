import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import filterSlice from 'features/filterSlice';
import { contactsFromApi } from '../features/apiSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { configure } from '@testing-library/react';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactsFromApi.reducer);

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    [contactsFromApi.reducerPath]: persistedReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsFromApi.middleware,
  ],
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
