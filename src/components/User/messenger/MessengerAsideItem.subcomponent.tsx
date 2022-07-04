import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../hooks';
import '../../../styles/components/User/messenger/MessengerAsideItem.subcomponent.scss';
import date from '../../../utils/date';
import { db } from '../../../utils/firebase';

const MessengerAsideItem = ({ user, chatId }: any) => {

  // const [lastMess, setLastMess]: any = useState({});
  
  // useEffect(() => {
  //   onSnapshot(query(collection( db, `messenger/${chatId}/messages`), orderBy('createAt', 'desc')), (snapshot: any) => {
  //     setLastMess({...snapshot.docs[0].data()});
  //   });
  // }, []);

  const auth = useAuth();
  
  

  return (
    <li
      key={user.id}
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
                { user.users.find((user: any) => user.email !== auth.email).displayName }
              </span>
              <span>
                { date(user?.lastMessageTime?.seconds).h }:{date(user?.lastMessageTime?.seconds).m }
              </span>
            </span>
            <span
              style={{
                maxWidth: '155px',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
              }}
            >
              { user?.lastMessage }
            </span>
          </span>
        </span>
      </NavLink>
    </li>
  );
};

export default MessengerAsideItem;