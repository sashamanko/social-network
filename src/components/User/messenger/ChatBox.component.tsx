// import './ChatBox.css';

import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth, useInput } from "../../../hooks";
import date from "../../../utils/date";
import { db, getDocument } from "../../../utils/firebase";
import { Button, Dropdown, Input } from "../../ui";
// Remix Icon
// __________________________________________________
import SendPlaneLineIcon from "remixicon-react/SendPlaneFillIcon";
import MoreLineIcon from "remixicon-react/MoreLineIcon";
import useMessenger from "../../../hooks/useMessenger";

const ChatBox = () => {

  const {userList, chatList, selectedUser } = useMessenger();
  const { chatId } = useParams();

  const { email } = useAuth();

  const [messages, setMessages] = useState([]);
  const [bindValue, value, restValue] = useInput('');
  const navigate = useNavigate();

  const sendMessage = async (text: string) => {
    await addDoc(collection(db , `messenger/${chatId}/messages`), {
      createAt: serverTimestamp(),
      text: text,
      userFrom: email,
      // userFrom: '',
    });
  };
  

  const options = {
    profile: {
      label: 'Visit user',
      type: 'link',
      url: `/#/${selectedUser?.data()?.id}`,
    },
    sp1: 'separator',
    delChat: {
      label: 'Delete chat',
      type: 'button',
      onClick: async () => {
        navigate('/messenger');
        await deleteDoc(doc(db, 'messenger', `${chatId}`));
        (await getDocument(`messenger/${chatId}/messages`)).docs.forEach(docElem => {
          deleteDoc(doc(db, `messenger/${chatId}/messages`, `${docElem.id}`));
        });
      }
    },
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
        className='item-block mb-auto '
        style={{
          minHeight: '48px',
        }}
      >
        <div className="flex align-center">
          <span>{ selectedUser?.data()?.displayName }</span>
          <Dropdown
            className='ml-auto'
            options={ options }
          >
            <MoreLineIcon />
          </Dropdown>
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
          variant='primary'
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