import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register(state, action) {
      state.user = action.payload.data.user;
      state.token = action.payload.data.token;
      state.isLoggedIn = true;
    },
    // logIn: () => {},
    // logOut: () => {},
  },
});

export const { register, logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
