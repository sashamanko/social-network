import { NavLink } from 'react-router-dom';
import '../../../styles/components/User/messenger/MessengerAsideItem.subcomponent.scss';

const MessengerAsideItem = ({ user, chatId }: any) => {
  
  return (
    <li
      key={user.data().id}
      className='MessengerAsideItem'
    >
      <NavLink 
        to={chatId}
        className='flex flex-col item-block'
      >
        <span className="flex">
          <img
            src="https://fakeimg.pl/150x150/"
            alt=""
            style={{
              width: '44px',
              background: 'red',
            }}
            className='mr-2 rounded-fill'
          />
          <span className="flex flex-col w-100">
            <span className='flex justify-between'>
              <span>
                { user.data().displayName }
              </span>
              <span>
                time
              </span>
            </span>
            <span>Last message</span>
          </span>
        </span>
      </NavLink>
    </li>
  );
};

export default MessengerAsideItem;