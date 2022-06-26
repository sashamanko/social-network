import {createSlice, } from '@reduxjs/toolkit';
import { IUserInitialState } from '../../types/redux';
import { fetchUser } from './asyncActions';

const initialState: IUserInitialState = {
  id: null,
  uid: null,
  email: null,
  displayName: null,
  status: 0,
  error: null,
};

const setError = (state: any, action: any) => {
  state.status = -1;
  state.error = action.payload;
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Remove user
    removeUser(state) {
      state.id = null;
      state.uid = null;
      state.email = null;
      state.displayName = null;
    },
  },
  extraReducers: {
    [fetchUser.pending]: (state, action) => {
      state.status = 0;
      state.error = null;
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.id = action.payload.id;
      state.uid = action.payload.uid;
      state.email = action.payload.email;
      state.displayName = action.payload.displayName;
      
      state.status = 1;
    },
    [fetchUser.rejected]: setError,
  }
});

export const {removeUser} = userSlice.actions;

export default userSlice.reducer;