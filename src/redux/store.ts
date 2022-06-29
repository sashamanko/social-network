import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from './user/slice';
import profileReducer from './profile/slice';
import messengerReducer from './messenger/slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    messenger: messengerReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});