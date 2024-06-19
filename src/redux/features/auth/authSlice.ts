import { createSlice } from '@reduxjs/toolkit';
import { TAuthState } from '../../../types';
import { RootState } from '../../store';

const initialState: TAuthState = {
  user: null,
  token: null,
  isModalOpen: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.token = token;
      state.user = user;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
    },
    setIsModalOpen: (state, action) => {
      state.isModalOpen = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { setUser, logout, setIsModalOpen } = authSlice.actions;

export const getCurrentUser = (state: RootState) => state.auth.user;
export const getCurrentToken = (state: RootState) => state.auth.token;
export const getModalState = (state: RootState) => state.auth.isModalOpen;
