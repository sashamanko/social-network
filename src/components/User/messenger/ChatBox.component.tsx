// import './ChatBox.css';

import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth, useInput } from "../../../hooks";
import date from "../../../utils/date";
import { db } from "../../../utils/firebase";
import { Button, Input } from "../../ui";
// Remix Icon
// __________________________________________________
import SendPlaneLineIcon from "remixicon-react/SendPlaneFillIcon";
import useMessenger from "../../../hooks/useMessenger";

const ChatBox = () => {

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
    <div className="flex w-100 flex-col justify-end">
      {/* <span className="item-block rounded-fill mx-auto p-2">38 груня</span> */}
      <div
        className='item-block mb-auto'
        style={{
          minHeight: '48px',
        }}
      >
        <div>
          <span>{ selectedUser?.data()?.displayName }</span>
        </div>
      </div>

      <ul className="Home__message-list flex flex-col w-100 mt-1">
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
            if (e.key === 'Enter' && value.trim().length !== 0) {
              sendMessage(value);
              restValue();
            }
          }}
        />
        <Button
          variant="primary"
          className="flex justify-center align-center p-2"
          onClick={ () => {
            if (value.trim().length !== 0) {
              sendMessage(value); 
              restValue();
            }
          } }
        >
          <SendPlaneLineIcon/>
        </Button>
      </div>
      
    </div>
  );
};

export default ChatBox;