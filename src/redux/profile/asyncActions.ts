import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDocument } from '../../utils/firebase';
import { setProfile } from './slice';
// import { setProfile } from './slice';

export const fetchProfile: any = createAsyncThunk<any>(
  'profile/fetchProfile',
  async ({profile, email}: any, {rejectWithValue, dispatch}) => {
    
    try {

      const uid = (await getDocument('users')).docs.find(doc => doc.data().id === profile)?.id; 

      const innerProfile: any = {
        id: (await getDocument('users')).docs.find(doc => doc.data().id === profile)?.data().id,
        email: (await getDocument('users')).docs.find(doc => doc.data().id === profile)?.data().email,
        displayName: (await getDocument('users')).docs.find(doc => doc.data().id === profile)?.data().displayName,
        subscribers: (await getDocument(`users/${uid}/subscribers`)).docs,
        followers: (await getDocument(`users/${uid}/followers`)).docs,
      };
      innerProfile.isSubscribe = innerProfile.followers.find((doc2: any) => doc2.data().email === email) ? true : false;
      

      dispatch(setProfile(innerProfile));

    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);