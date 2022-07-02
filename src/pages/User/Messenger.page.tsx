import '../../styles/pages/User/Messenger.page.scss';

import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { Button, Input } from "../../components/ui";
import { MessengerAside } from "../../components/User/messenger";
import { useAuth, useInput } from "../../hooks";
import useMessenger from "../../hooks/useMessenger";
import date from "../../utils/date";
import { db, findDocument } from "../../utils/firebase";


const MessengerPage = () => {

  const {userList, chatList, selectedUser } = useMessenger();
  const { chatId } = useParams();

  const { email } = useAuth();

  const [messages, setMessages] = useState([]);
  const [bindValue, value, restValue] = useInput('');

  const sendMessage = async (text: string) => {
    await addDoc(collection(db , `messenger/${chatId}/messages`), {
      createAt: serverTimestamp(),
      text: text,
      userFrom: email,
      // userFrom: '',
    });
  };
  

  useEffect(() => {
    onSnapshot(query(collection( db, `messenger/${chatId}/messages`), orderBy('createAt', 'asc')), (snapshot: any) => {
      setMessages(
        snapshot.docs.map( (doc: any) => {
          return {
            id: doc.id,
            data: {...doc.data()},
          };
        } ));
    });
  }, [chatId]);
  
  

  return (
    <div className="Messenger pb-1 flex w-100">
      <MessengerAside userList={userList} chatList={chatList} />

      <Outlet />
      

    </div>
  );
};

export default MessengerPage;