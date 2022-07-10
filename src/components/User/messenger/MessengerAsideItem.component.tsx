import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../hooks';
import useContextMenu from '../../../hooks/useContextMenu';
import '../../../styles/components/User/messenger/MessengerAsideItem.subcomponent.scss';
import date from '../../../utils/moment';

const MessengerAsideItem = ({ user, chatId }: any) => {

  const auth = useAuth();
  const { setContextMenu, setContextMenuData }: any = useContextMenu();
  

  return (
    <li
      key={user.id}
      className='MessengerAsideItem'
      onContextMenu={(e: any) => {

        const userId = user.users.find((elem: any) => elem.email !== auth.email).id;
        
        
        setContextMenu('messengerSidebarItem');
        setContextMenuData({
          chatId,
          userId,
          isRender: true,
          mouseEvent: e
        });
      }}
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
              <span 
                style={{
                  maxWidth: '155px',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                }}
              >
                { user.users.find((user: any) => user.email !== auth.email).displayName }
              </span>
              <span className='font-sm font-500'>
                { date(user?.lastMessageTime?.seconds, 'messegerAsideItem') }
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