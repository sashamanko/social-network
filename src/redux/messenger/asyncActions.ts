import { createAsyncThunk } from '@reduxjs/toolkit';
import { collection, addDoc, deleteDoc, doc, getDoc, onSnapshot, query, orderBy } from 'firebase/firestore';
import { useAuth } from '../../hooks';
import { findDocument, getDocument } from '../../utils/firebase';
import { db } from '../../utils/firebase';
// import { setProfile } from './slice';

export const fetchUserList: any = createAsyncThunk<any>(
  'profile/fetchUserList',
  async ({ chatList, email}: any, {rejectWithValue}) => {

    try {
      
      const notMeList = chatList.map((doc: any) => {
        return Object.values(doc.data()).filter((user: any) => user !== email)[0];
      });
      
      const userList = (await getDocument(`users`)).docs.filter(doc => {
        return notMeList.find((elem: any) => {
          if (doc.data().email === elem) return doc;
        });
      });

      // console.log(chatList);
      

      return {
        userList,
        chatList,
      };

    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);