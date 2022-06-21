import {createSlice, } from '@reduxjs/toolkit';

export interface IInitialState {
  email: string | null;
  displayName: string | null;
  // photoURL: string | null;
}

const initialState: IInitialState = {
  email: null,
  displayName: null,
  // photoURL: null,
  // id: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      
      state.email = action.payload.email;
      state.displayName = action.payload.displayName;
      // state.photoURL = action.payload.photoURL;
      // state.token = action.payload.token;
      // state.id = action.payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.displayName = null;
      // state.photoURL = null;
      // state.token = null;
      // state.id = null;
    },
  },
});

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;