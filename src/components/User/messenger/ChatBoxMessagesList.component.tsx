import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../hooks";
import useContextMenu from "../../../hooks/useContextMenu";
import useMessenger from "../../../hooks/useMessenger";
import date from "../../../utils/moment";

const ChatBoxMessagesList = () => {

  const { chatMessages } = useMessenger();

  const { chatId } = useParams();

  const { email } = useAuth();

  const [selectedMessage, setSelectedMessage]: any = useState('');

  const { contextMenu, setContextMenu, contextMenuData, setContextMenuData }: any = useContextMenu();
  
  
  useEffect(() => {
    setSelectedMessage(contextMenuData?.id);
  }, [contextMenuData]);

  return (
    <>
      <ul className="Home__message-list flex flex-col w-100 mt-1">
        {chatMessages && chatMessages.map(((m: any) => {
          return (
            <>
              <li
                onContextMenu={(e: any) => {
                  if (m.data.userFrom === email) { 
                    
                    setSelectedMessage(m.id);

                    setContextMenu('myMessage');
                    setContextMenuData({
                      ...m,
                      chatId,
                      isRender: true,
                      mouseEvent: e,
                    });
                  }
                  if (m.data.userFrom !== email) {
                    e.preventDefault();

                    setSelectedMessage(m.id);
                    
                    setContextMenu('otherMessage');
                    setContextMenuData({
                      ...m,
                      isRender: true,
                      mouseEvent: e,
                    });
                  }          
                }}
                key={m.id}
                style={{
                  transition: 'all var(--transition)',
                  background: selectedMessage === m.id && contextMenuData.isRender ? '#ffffff10' : 'transparent',
                }}
                className='flex mt-3'
              >
                <span
                  className={`Home__message-list__item flex p-2 rounded align-end ${ m.data.userFrom === email ? 'ml-auto right' : 'mr-auto' } bg-block`}
                >
                  <p className="mr-3 font-500">{m.data.text}</p>
                  { m.data.createAt?.seconds &&
                    <span style={{wordBreak: 'normal'}} className="font-xs font-500">{ date(m.data.createAt.seconds, 'messegerMessage') }</span>
                  }
                </span>
              </li>
            </>
          );
        }))}
      </ul>
    </>

  );
};

export default ChatBoxMessagesList;