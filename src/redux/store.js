import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import filterSlice from 'redux/filter/filterSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import authReducer from 'redux/auth/authSlice';
import { userApiSlice, contactsApiSlice } from './api';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    auth: persistedReducer,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    [contactsApiSlice.reducerPath]: contactsApiSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
    userApiSlice.middleware,
    contactsApiSlice.middleware,
  ],
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
