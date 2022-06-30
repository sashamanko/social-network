// import './MessengerAside.css';

import { NavLink } from "react-router-dom";
import { MessengerAsideItem } from ".";
import { Input } from "../../ui";

const MessengerAside = ({ userList, chatList }: any) => {
  
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
          <Input
            type="text"
            view='primary'
            placeholder="Search user"
          />
        </li>
        {
          userList.map((user: any) => {
            
            return (
              <MessengerAsideItem
                key={user.data().id}
                user={user}
                chatId={chatList.find((chat: any) => Object.values(chat.data()).find((userEmail: any) => userEmail === user.data().email)).id}
              />
            );
          })
        }
      </ul>
    </aside>
  );
};

export default MessengerAside;