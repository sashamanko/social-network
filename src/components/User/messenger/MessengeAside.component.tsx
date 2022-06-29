// import './MessengerAside.css';

import { NavLink } from "react-router-dom";
import { MessengerAsideItem } from ".";

const MessengerAside = ({ userList, chatList }: any) => {
  
  return (
    <aside>
      <ul className="list-none">
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