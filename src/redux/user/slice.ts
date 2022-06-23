import {createSlice, } from '@reduxjs/toolkit';
import { IUserInitialState } from '../../types/redux';

const initialState: IUserInitialState = {
  id: null,
  uid: null,
  email: null,
  displayName: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Set user
    setUser(state, action) {
      state.id = action.payload.id;
      state.uid = action.payload.uid;
      state.email = action.payload.email;
      state.displayName = action.payload.displayName;
    },
    // Remove user
    removeUser(state) {
      state.id = null;
      state.uid = null;
      state.email = null;
      state.displayName = null;
    },
  },
});

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;