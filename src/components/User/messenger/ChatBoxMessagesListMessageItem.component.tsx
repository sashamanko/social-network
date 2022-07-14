import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth, useContextMenu, useMessenger } from '../../../hooks';
import date from '../../../utils/moment';
// import './ChatBoxMessagesListMessageItemessage.component.css';

const ChatBoxMessagesListMessageItem = ({ message }: any) => {

  const { chatId } = useParams();

  const { email } = useAuth();

  const [selectedMessage, setSelectedMessage]: any = useState('');

  const { setContextMenu, contextMenuData, setContextMenuData }: any = useContextMenu();

  return (
    <li
      onContextMenu={(e: any) => {
        if (message.data.userFrom === email) { 
          
          setSelectedMessage(message.id);

          setContextMenu('myMessage');
          setContextMenuData({
            ...message,
            chatId,
            isRender: true,
            mouseEvent: e,
          });
        }
        if (message.data.userFrom !== email) {
          e.preventDefault();

          setSelectedMessage(message.id);
          
          setContextMenu('otherMessage');
          setContextMenuData({
            ...message,
            isRender: true,
            mouseEvent: e,
          });
        }          
      }}
      key={message.id}
      style={{
        transition: 'all var(--transition)',
        background: selectedMessage === message.id && contextMenuData.isRender ? '#ffffff10' : 'transparent',
      }}
      className='flex mt-3'
    >
      <span
        className={`Home__message-list__item flex p-2 rounded align-end ${ message.data.userFrom === email ? 'ml-auto right' : 'mr-auto' } bg-block`}
      >
        <p className="mr-3 font-500">{message.data.text}</p>
        { message.data.createAt?.seconds &&
          <span style={{wordBreak: 'normal'}} className="font-xs font-500">{ date(message.data.createAt.seconds, 'messegerMessage') }</span>
        }
      </span>
    </li>
  );
};

export default ChatBoxMessagesListMessageItem;