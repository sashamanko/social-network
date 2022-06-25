import { async } from '@firebase/util';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { addDoc, collection, getDocs, onSnapshot, query } from 'firebase/firestore';
import { db } from '../../utils/firebase';
import { setUser } from './slice';

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

// export const fetchUserId: any = createAsyncThunk<any>(
//   'profile/fetchUserId',
//   async (email, {rejectWithValue, dispatch}) => {

//     let id;

//     try {
//       id = 

      
//     } catch (error: any) {
//       return rejectWithValue(error.message);
//     }
//     dispatch( setUser({ id }) );
//   }
// );