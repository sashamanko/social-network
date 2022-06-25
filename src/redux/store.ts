import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from './user/slice';
import profileReducer from './profile/slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});