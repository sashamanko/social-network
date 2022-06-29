import {createSlice, } from '@reduxjs/toolkit';
import { fetchUserList } from './asyncActions';
// import { fetchFollow, fetchProfile, fetchUnfollow } from './asyncActions';

const initialState: any = {
  userList: [],
  chatList: [],
  status: null,
}; 

const setError = (state: any, action: any) => {
  state.status = -1;
  state.error = action.payload;
};

const messengerSlice = createSlice({
  name: 'messenger',
  initialState,
  reducers: {
    
  },
  extraReducers: {
    [fetchUserList.pending]: (state, action) => {
      state.status = 0;
    },
    [fetchUserList.fulfilled]: (state, action) => {
      state.userList = action.payload.userList;
      state.chatList = action.payload.chatList;
      state.status = 1;
    },
    [fetchUserList.rejected]: setError,
  }
});



// export const {  } = profileSlice.actions;

export default messengerSlice.reducer;