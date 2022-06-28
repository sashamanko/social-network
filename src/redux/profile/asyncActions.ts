import { createAsyncThunk } from '@reduxjs/toolkit';
import { collection, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { getDocument } from '../../utils/firebase';
import { setProfile } from './slice';
import { db } from '../../utils/firebase';
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
      innerProfile.isSubscribe = innerProfile.subscribers.find((doc2: any) => doc2.data().email === email) ? true : false;
      
      console.log(innerProfile.subscribers);
      

      dispatch(setProfile(innerProfile));

    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchFollow: any = createAsyncThunk<any>(
  'profile/fetchFollow',
  async ( {email, profile}: any, {rejectWithValue}) => {
    
    const uid: any = (await getDocument('users')).docs.find(doc => doc.data().id === profile);
    const uid2 = (await getDocument('users')).docs.find(doc => doc.data().email === email);
    
    try {

      await addDoc(collection(db, `users/${uid?.id}/subscribers`), {email});
      await addDoc(collection(db, `users/${uid2?.id}/followers`), {email: uid.data().email});

      return {email};

    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUnfollow: any = createAsyncThunk<any>(
  'profile/fetchUnfollow',
  async ( {email, profile}: any, {rejectWithValue}) => {
    
    const uid = (await getDocument('users')).docs.find(doc => doc.data().id === profile)?.id;
    const uid2 = (await getDocument('users')).docs.find(doc => doc.data().email === email)?.id;

    const uidUser = (await getDocument(`users/${uid}/subscribers`)).docs.find(doc => doc.data().email === email)?.id;
    const uidUser2 = (await getDocument(`users/${uid2}/followers`)).docs.find(doc => doc.data().email === email)?.id;
    
    try {

      await deleteDoc( doc(db, `users/${uid}/subscribers`, `${uidUser2}`) );
      await deleteDoc( doc(db, `users/${uid2}/followers`, `${uidUser}`) );
      
      return {email};

    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);