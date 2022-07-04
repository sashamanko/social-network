import {createSlice, } from '@reduxjs/toolkit';
import { fetchNewChat, fetchUserList } from './asyncActions';
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
    [fetchNewChat.pending]: (state, action) => {
      state.status = 0;
    },
    [fetchUserList.fulfilled]: (state, action) => {
      state.userList = action.payload.userList;
      state.chatList = action.payload.chatList;
      state.status = 1;
    },
    [fetchNewChat.fulfilled]: (state, action) => {
      console.log(state.chatList);
      state.chatList = action.payload;
      console.log(state.chatList);
    },
    [fetchUserList.rejected]: setError,
    [fetchNewChat.rejected]: setError,
  }
});



// export const {  } = profileSlice.actions;

export default messengerSlice.reducer;