// import './MessengerAside.css';

import { useEffect, useState } from "react";
import { MessengerAsideItem } from ".";
import { useAuth, useInput } from "../../../hooks";
import useMessenger from "../../../hooks/useMessenger";
import { Input } from "../../ui";
import CloseLineIcon from "remixicon-react/CloseLineIcon";

const MessengerAside = () => {

  const { chatList } = useMessenger();
  const [bind, value, reset] = useInput('');
  
  const [filterdChatList, setFilterdChatList] = useState(chatList);

  

  useEffect(() => {
    if (value.trim().length !== 0) {
      const newArr = filterdChatList.filter((doc: any) => doc?.data()?.users.find((user: any) => {
        if (!user?.displayName.toUpperCase().indexOf(value.toUpperCase())) return doc;
      }));
      setFilterdChatList(newArr);
    } else {
      setFilterdChatList(chatList);
    }

  }, [value, chatList]);

  return (
    <aside className="mr-1">
      <ul className="list-none">
        <li
          className="item-block"
          style={{
            maxHeight: '48px',
            padding: 'calc(var(--padding) / 2)',
          }}
        >
          <span className="flex relative">
            <Input
              {...bind}
              type="text"
              variant='primary'
              placeholder="Search user"
            />
            <button
              className="flex absolute"
              style={{
                top: '50%',
                right: 5,
                transform: 'translateY(-50%)'
              }}
              onClick={() => reset()}
            >
              { value.length !== 0 &&
                <CloseLineIcon />
              }
            </button>
          </span>
        </li>
        {
          filterdChatList.map((user: any) => {
            
            return (
              <MessengerAsideItem
                key={user.id}
                user={user?.data()}
                chatId={user.id}
              />
            );
          })
        }
      </ul>
    </aside>
  );
};

export default MessengerAside;