import {createSlice, } from '@reduxjs/toolkit';
import { fetchProfile } from './asyncActions';
import { IProfileInitialState } from '../../types/redux';

const initialState: IProfileInitialState = {
  id: null,
  email: null,
  displayName: null,
  subscribers: [],
  followers: [],
  isSubscribe: false,
  status: null,
  error: null,
};

const setError = (state: any, action: any) => {
  state.status = -1;
  state.error = action.payload;
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile(state, action) {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.displayName = action.payload.displayName;
      state.subscribers = action.payload.subscribers;
      state.followers = action.payload.followers;
      state.isSubscribe = action.payload.isSubscribe;
    },
  },
  extraReducers: {
    [fetchProfile.pending]: (state, action) => {
      state.status = 0;
      state.error = null;
    },
    [fetchProfile.fulfilled]: (state, action) => {
      state.status = 1;
    },
    [fetchProfile.rejected]: setError,
  }
});

export const { setProfile } = profileSlice.actions;

export default profileSlice.reducer;