import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserList } from "../redux/messenger/asyncActions";
import { db, getDocument } from "../utils/firebase";
import useAuth from "./useAuth";

const useMessenger = () => {

  const getUserInfoList = useSelector((state: any) => state.messenger.userList);
  
  const dispatch = useDispatch();
  
  // useEffect(() => {
  //   dispatch(fetchUserList());  
  // }, [dispatch]);
  
  const { email, chats } = useAuth();
  

  useEffect(() => {
    onSnapshot(collection( db, 'messenger'), (snapshot: any) => {
      const i = snapshot.docs.filter((doc: any) => {
        
        return chats.find((elem: any) => doc.id === elem);
      });
      
      
      dispatch(fetchUserList({chatList: i, email}));
    });
  }, [dispatch]);

  
  return {
    chatUsers: getUserInfoList,
    chats,
  };

};

export default useMessenger;