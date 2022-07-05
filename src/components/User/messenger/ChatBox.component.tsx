// import './ChatBox.css';

import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth, useInput } from "../../../hooks";
import date from "../../../utils/moment";
import { db, getDocument } from "../../../utils/firebase";
import { Button, Dropdown, Input } from "../../ui";
// Remix Icon
// __________________________________________________
import SendPlaneLineIcon from "remixicon-react/SendPlaneFillIcon";
import MoreLineIcon from "remixicon-react/MoreLineIcon";
import useMessenger from "../../../hooks/useMessenger";

const ChatBox = () => {

  const { selectedUser, chatMessages, sendMessage } = useMessenger();
  const { chatId }: any = useParams();

  const { email } = useAuth();

  const [bindValue, value, restValue] = useInput('');
  const navigate = useNavigate();
  

  const options = {
    profile: {
      label: 'Visit user',
      type: 'link',
      url: `/#/${selectedUser?.id}`,
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
          <Link to={`/${selectedUser?.id}`}>{ selectedUser?.displayName }</Link>
          <Dropdown
            className='ml-auto'
            options={ options }
          >
            <MoreLineIcon />
          </Dropdown>
        </div>
      </div>

      <ul className="Home__message-list flex flex-col w-100 mt-1">
        {chatMessages && chatMessages.map(((m: any, index: number) => {

          // console.log(messages[index + messages[index + 1] !== -1 ? 1  : 0 ]);
          // console.log(m.data.text, m.id);
          
          // if (messages[index + 1] !== undefined) {
          //   if (new Date(date(m.data.createAt?.seconds, 'messegerMessageDay')).toISOString() > new Date(date(messages[index + 1].data?.createAt?.seconds, 'messegerMessageDay')).toISOString()) {
              
          //     return (
          //       <>
          //         <li
          //           key={m.id}
          //           className={`Home__message-list__item flex ${ m.data.userFrom === email ? 'ml-auto right' : 'mr-auto' } p-2 bg-block rounded align-end mt-3`}>
          //           <p className="mr-3 font-500">{m.data.text}</p>
          //           {m.data.createAt?.seconds && <span style={{wordBreak: 'normal'}} className="font-xs font-500">{ date(m.data.createAt.seconds, 'messegerMessage') }</span>}
          //         </li>
          //         <li>
          //           <span>{date(messages[index + 1].data?.createAt?.seconds, 'messegerAsideItem')}</span>
          //         </li>
          //       </>
          //     );
          //   } else {
          return (
            <>
              <li
                key={m.id}
                className={`Home__message-list__item flex ${ m.data.userFrom === email ? 'ml-auto right' : 'mr-auto' } p-2 bg-block rounded align-end mt-3`}>
                <p className="mr-3 font-500">{m.data.text}</p>
                {m.data.createAt?.seconds && <span style={{wordBreak: 'normal'}} className="font-xs font-500">{ date(m.data.createAt.seconds, 'messegerMessage') }</span>}
              </li>
            </>
          );
          //   }
          // }
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
              sendMessage(chatId, value);
              restValue();
            }
          }}
        />
        <Button
          variant="primary"
          className="flex justify-center align-center p-2"
          onClick={ () => {
            if (value.trim().length !== 0) {
              sendMessage(chatId, value); 
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