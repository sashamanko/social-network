import { createAsyncThunk } from '@reduxjs/toolkit';
import { serverTimestamp } from 'firebase/firestore';
import { getDocument, newDoc } from '../../utils/firebase';
// import { setProfile } from './slice';

export const fetchUserList: any = createAsyncThunk<any>(
  'messenger/fetchUserList',
  async ({ chatList, email}: any, {rejectWithValue}) => {

    try {
      
      const notMeList = chatList.map((doc: any) => {
        return doc.data().users.filter((user: any) => user !== email)[0];
      });
      
      const userList = (await getDocument(`users`)).docs.filter(doc => {
        return notMeList.find((elem: any) => {
          if (doc.data().email === elem) return doc;
        });
      });
      

      return {
        chatList,
      };

    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchNewChat: any = createAsyncThunk<any>(
  'messenger/fetchNewChat',
  async ({ profileTo, me}: any, {rejectWithValue}) => {

    try {
      

      newDoc('messenger', {
        users: [
          me,
          profileTo,
        ],
        lastMessageTime: serverTimestamp(),
        lastMessage: 'Chat created',
      });

      const i = (await getDocument('messenger')).docs.filter((doc: any) => {
        if (doc.data().users[0] === me.email || doc.data().users[1] === me.email) {
          return doc;
        }
      });
      
      return i;

    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);