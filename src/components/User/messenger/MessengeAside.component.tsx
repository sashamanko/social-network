// import './MessengerAside.css';

import { NavLink } from "react-router-dom";
import { MessengerAsideItem } from ".";

const MessengerAside = ({ chatUsers, chats }: any) => {
  return (
    <aside>
      <ul className="list-none">
        {
          chatUsers.map((user: any, id: number) => {
            return (
              <MessengerAsideItem key={chats[id]} user={user} chatId={chats[id]} />
            );
          })
        }
      </ul>
    </aside>
  );
};

export default MessengerAside;