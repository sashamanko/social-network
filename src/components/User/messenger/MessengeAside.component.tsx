// import './MessengerAside.css';

import { MessengerAsideItem } from ".";
import useMessenger from "../../../hooks/useMessenger";
import { Input } from "../../ui";

const MessengerAside = () => {

  const { chatList } = useMessenger();

  // console.log(chatList);
  

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
            variant='primary'
            placeholder="Search user"
          />
        </li>
        {
          chatList.map((user: any) => {
            
            return (
              <MessengerAsideItem
                key={user.id}
                user={user.data()}
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