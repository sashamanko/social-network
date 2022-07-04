import { createAsyncThunk } from '@reduxjs/toolkit';
import { collection, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { findDocument, getDocument } from '../../utils/firebase';
import { setProfile } from './slice';
import { db } from '../../utils/firebase';

export const fetchProfile: any = createAsyncThunk<any>(
  'profile/fetchProfile',
  async ({profile, email}: any, {rejectWithValue, dispatch}) => {
    
    try {

      const uid = (await getDocument('users')).docs.find(doc => doc.data().id === profile)?.id; 
      const profileDoc = (await findDocument('users', 'id', profile));

      const innerProfile: any = {
        id: profileDoc?.data().id,
        email: profileDoc?.data().email,
        displayName: profileDoc?.data().displayName,
        subscribers: (await getDocument(`users/${uid}/subscribers`)).docs,
        followers: (await getDocument(`users/${uid}/followers`)).docs,
      };
      innerProfile.isSubscribe = innerProfile.subscribers.find((doc2: any) => doc2.data().email === email) ? true : false;
      
      dispatch(setProfile(innerProfile));

    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchFollow: any = createAsyncThunk<any>(
  'profile/fetchFollow',
  async ( {email, profile}: any, {rejectWithValue}) => {
    
    const uid: any = (await findDocument('users', 'id', profile));
    const uid2 = (await findDocument('users', 'email', email));
    
    try {
      console.log(uid2?.id);
      
      await addDoc(collection(db, `users/${uid?.id}/subscribers`), uid2?.data());
      await addDoc(collection(db, `users/${uid2?.id}/followers`), uid?.data());

      return {...uid2?.data()};

    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUnfollow: any = createAsyncThunk<any>(
  'profile/fetchUnfollow',
  async ( {email, profile}: any, {rejectWithValue}) => {
    
    const uid = (await findDocument('users', 'id', profile));
    const uid2 = (await findDocument('users', 'email', email));

    console.log(uid2);
    

    const uidUser = (await findDocument(`users/${uid?.id}/subscribers`, 'email', email))?.id;
    const uidUser2 = (await findDocument(`users/${uid2?.id}/followers`, 'email', uid?.data().email))?.id;

    console.log(uidUser);
    

    try {

      await deleteDoc( doc(db, `users/${uid?.id}/subscribers`, `${uidUser}`) );
      await deleteDoc( doc(db, `users/${uid2?.id}/followers`, `${uidUser2}`) );
      
      return {email};

    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);