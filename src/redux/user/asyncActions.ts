import { async } from '@firebase/util';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAuth } from 'firebase/auth';
import { addDoc, collection, getDocs, onSnapshot, query } from 'firebase/firestore';
import { db, getDocument } from '../../utils/firebase';

const newDoc = (col: string, data: object) => {
  addDoc(collection(db , col), data);
};

export const fetchAddUser: any = createAsyncThunk<any>(
  'profile/fetchAddUser',
  async ({displayName, email}: any, {rejectWithValue}) => {

    try {
      const i = await (await getDocs(collection( db, `users`))).size;
      
      newDoc('users', {
        displayName,
        email,
        id: String(i + 1),
      });
      
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUser: any = createAsyncThunk<any>(
  'profile/fetchUser',
  async (user: any, {rejectWithValue, dispatch}) => {
    const auth: any = getAuth();

    try {
      // console.log(true);
      
      // (await getDocs(collection( db, `users`))).docs.find((doc: any) => {
      // if (auth.email === email) {
      const id = (await getDocument('users')).docs.find((doc: any) => doc.data().email === user.email)?.data().id;

      const innerUser: any = {};

      if (user) {
        innerUser.id = id;
        innerUser.uid = user.uid;
        innerUser.email = user.email; 
        innerUser.displayName = user.displayName;
      };

      return innerUser;
      // }
      // });

      
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);