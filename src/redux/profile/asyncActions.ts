import { createAsyncThunk } from '@reduxjs/toolkit';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../utils/firebase';
import { setProfile } from './slice';
// import { setProfile } from './slice';

export const fetchProfile: any = createAsyncThunk<any>(
  'profile/fetchProfile',
  async (profile, {rejectWithValue, dispatch}) => {
    // console.log(profile);
    
    try {
      onSnapshot(query(collection( db, 'users'), orderBy('id', 'asc')), (snapshot: any) => {
        return snapshot.docs.find((doc: any) => {
          if (doc.data().id === profile) {
            const innerProfile = {...doc.data()};

            onSnapshot(query(collection( db, `users/${doc.id}/subscribers`)), (snapshot2: any) => {
              innerProfile.subscribers = String(snapshot2.docs.length);
              
              onSnapshot(query(collection( db, `users/${doc.id}/followers`)), (snapshot3: any) => {
                
                innerProfile.followers = String(snapshot3.docs.length);
                dispatch(setProfile(innerProfile));
              });
            });
            
          }
        });
      });
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);


