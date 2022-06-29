// import './MeassangerPage.css';

import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Button, Input } from "../../components/ui";
import { MessengerAside } from "../../components/User/messenger";
import { useAuth, useInput } from "../../hooks";
import useMessenger from "../../hooks/useMessenger";
import date from "../../utils/date";
import { db } from "../../utils/firebase";
// Remix Icon
// __________________________________________________
import SendPlaneLineIcon from "remixicon-react/SendPlaneFillIcon";

const MessengerPage = () => {

  const {chatUsers, chats} = useMessenger();
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
    <div className="pt-1 flex">
      <MessengerAside chatUsers={chatUsers} chats={chats} />

      <div className="flex w-50 flex-col align-end">
        {/* <span className="item-block rounded-fill mx-auto p-2">38 груня</span> */}
        <ul className="Home__message-list flex flex-col w-100 py-2 pl-3">
          {messages && messages.map(((m: any) => {
            return (
              <li
                key={m.id}
                className={`Home__message-list__item flex ${ m.data.userFrom === email ? 'ml-auto right' : 'mr-auto' } p-2 bg-block rounded align-end mt-3`}>
                <p className="mr-3 font-500">{m.data.text}</p>
                {m.data.createAt?.seconds && <span style={{wordBreak: 'normal'}} className="font-xs font-500">{  date(m.data.createAt.seconds).h }:{date(m.data.createAt.seconds).m }</span>}
              </li>
            );
          }))}
        </ul>

        <div className="flex align-center w-100 mt-1">
          <Input
            view='primary'
            placeholder="Send message"
            className="mr-2"
            {...bindValue}
            onKeyPress={ (e: any) => {
              if (e.key === 'Enter') {
                sendMessage(value);
                restValue();
              }
            }}
          />
          <Button 
            variant="primary"
            className="flex justify-center align-center p-2"
            onClick={ () => {sendMessage(value); restValue();} }
          >
            <SendPlaneLineIcon/>
          </Button>
        </div>
        
      </div>

    </div>
  );
};

export default MessengerPage;