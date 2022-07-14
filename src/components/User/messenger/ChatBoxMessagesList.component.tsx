// Imports | React, React router 
// __________________________________________________
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Imports | Hooks
// __________________________________________________
import { useAuth, useContextMenu, useMessenger } from "../../../hooks";

// Imports | Utils
// __________________________________________________
import date from "../../../utils/moment";
import ChatBoxMessagesListDateItem from "./ChatBoxMessagesListDateItem.component";
import ChatBoxMessagesListMessageItem from "./ChatBoxMessagesListMessageItem.component";

const ChatBoxMessagesList = () => {

  const { chatMessages } = useMessenger();

  return (
    <>
      <ul className="Home__message-list flex flex-col w-100 mt-1 list-none">
        {chatMessages && chatMessages.map(((m: any, index: number) => {
         
          if (chatMessages[index - 1] !== undefined) {
            if (date(m?.data?.createAt?.seconds, 'messegerMessageDay') > date(chatMessages[index - 1]?.data?.createAt?.seconds, 'messegerMessageDay')) {

              return (
                <>
                  <ChatBoxMessagesListDateItem seconds={m?.data?.createAt?.seconds} />
                
                  <ChatBoxMessagesListMessageItem message={m} />
                </>
              );

            }
          } else if (chatMessages[index - 1] === undefined && chatMessages.length !== 0  ) {

            return (
              <>
                <ChatBoxMessagesListDateItem textContent='Chat created ' seconds={m?.data?.createAt?.seconds} />

              
                <ChatBoxMessagesListMessageItem message={m} />
              </>
            );

          }
          

          return (
            <>
              <ChatBoxMessagesListMessageItem message={m} />
            </>
          );

        }))}
        { chatMessages.length === 0 &&

          <li 
            className='item-block mx-auto rounded-fill font-600 font-sm'
            style={{
              background: 'var(--main)',
              color: 'white',
              padding: '4px 6px',
            }}
          >
            Chat cteated
          </li>

        }
      </ul>
    </>

  );
};

export default ChatBoxMessagesList;