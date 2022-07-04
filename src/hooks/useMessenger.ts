import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserList } from "../redux/messenger/asyncActions";
import { db, getDocument } from "../utils/firebase";
import useAuth from "./useAuth";

const useMessenger = () => {

  const { userList, chatList } = useSelector((state: any) => state.messenger);
  
  const dispatch = useDispatch();
  
  const { email } = useAuth();
  const { chatId } = useParams();

  let i;

  if(chatId) {
    const selectedChat = chatList.find((doc: any) => doc.id === chatId)?.data();
    
    let selectedUser: any;
    if (selectedChat) {
      selectedUser = Object.values(selectedChat).filter((user: any) => user !== email)[0];
      
    }

    i = userList.find((doc: any) => doc.data().email === selectedUser);
  }

  useEffect(() => {
    onSnapshot(collection( db, 'messenger'), (snapshot: any) => {
      const i = snapshot.docs.filter((doc: any) => Object.values(doc.data()).find(user => {
        if (user === email) return doc;
      }));
      
      dispatch(fetchUserList({chatList: i, email}));
    });
  }, [dispatch]);


  return {
    userList,
    chatList,
    selectedUser: i,
  };

};

export default useMessenger;