import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserList } from "../redux/messenger/asyncActions";
import { db, getDocument } from "../utils/firebase";
import useAuth from "./useAuth";

const useMessenger = () => {

  const { chatList } = useSelector((state: any) => state.messenger);
  

  const { email } = useAuth();
  const { chatId } = useParams();

  let i;
  let selectedUser: any;
  
  if(chatId) {
    const selectedChat = chatList.find((doc: any) => doc.id === chatId)?.data();
    
    if (selectedChat) {
      selectedUser = selectedChat.users.filter((user: any) => user.email !== email)[0];
    };
    
  }

  

  return {
    chatList,
    selectedUser,
  };

};

export default useMessenger;