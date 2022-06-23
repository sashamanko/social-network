import {createSlice, } from '@reduxjs/toolkit';
import { fetchProfile } from './asyncActions';
import { IProfileInitialState } from '../../types/redux';

const initialState: IProfileInitialState = {
  id: null,
  email: null,
  displayName: null,
  subscribers: null,
  followers: null,
  error: null,
};

const setError = (state: any, action: any) => {
  // state.status = 'resolved';
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
    },
  },
  extraReducers: {
    // [fetchProfile.fulfilled]: (state, action) => {},
    [fetchProfile.rejected]: setError,
  }
});

export const { setProfile } = profileSlice.actions;

export default profileSlice.reducer;