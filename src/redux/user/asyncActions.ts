import { async } from '@firebase/util';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAuth } from 'firebase/auth';
import { addDoc, collection, doc, getDocs, onSnapshot, query, updateDoc } from 'firebase/firestore';
import { db, findDocument, getDocument, newDoc } from '../../utils/firebase';

export const fetchAddUser: any = createAsyncThunk<any>(
  'user/fetchAddUser',
  async ({displayName, email}: any, {rejectWithValue}) => {

    const auth = getAuth();

    console.log(true);
    
    try {
      const i = await (await getDocs(collection( db, `users`))).size;
      
      newDoc('users', {
        id: String(i + 1),
        uid: auth.currentUser?.uid,
        email,
        displayName,
        settings: {
          theme: document.documentElement.dataset.theme,
          color: document.documentElement.dataset.color,
        },
      });
      
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUser: any = createAsyncThunk<any>(
  'user/fetchUser',
  async (user: any, {rejectWithValue}) => {

    const userByServer = (await (findDocument(`users`, 'email', user.email)));


    console.log(userByServer);
    

    try {


      const innerUser: any = {};

      
        
      
      if (user) {
        
        innerUser.id = userByServer?.data().id;
        innerUser.displayName = userByServer?.data().displayName;
        innerUser.settings = userByServer?.data().settings;
        innerUser.uid = user.uid;
        innerUser.email = user.email;
        innerUser.isAuth = !!user.email;
      };

      return innerUser;
      
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUpdateUser: any = createAsyncThunk<any>(
  'user/fetchUpdateUser',
  async (params: any, {rejectWithValue, dispatch}) => {
    const auth: any = getAuth();
    
    
    try {
      
      const uid = (await findDocument('users', 'email', auth.currentUser.email))?.id;

      const washingtonRef = doc(db, "users", String(uid));

      await updateDoc(washingtonRef, {
        ...params
      });
      

      dispatch(fetchUser(auth.currentUser));
      
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);