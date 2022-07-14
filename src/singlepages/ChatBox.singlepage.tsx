import { deleteDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db, getDocument } from "../utils/firebase";

// Remix Icon
// __________________________________________________
import { ChatBoxHeader, ChatBoxMessagesList } from "../components/User";
import { FormChatBox } from "../components/Forms";

const ChatBoxSinglePage = () => {
  
  const { chatId }: any = useParams();

  const [i, seti]: any = useState(chatId);

  const Y = async (i: any) => {
    
    const o: any = getDocument(`messenger/${i}/messages`);
    
    o.then((data: any) => {
      
      if (data.size === 0 && chatId !== i) {
        deleteDoc(doc( db, `messenger`, String(i)));
      }
    });
  
  };

  useEffect(() => {
    Y(i);
    seti(chatId);
  }, [chatId]);

  return (
    <div className="flex w-100 flex-col justify-end">

      <ChatBoxHeader />

      <ChatBoxMessagesList />

      <FormChatBox />
 
    </div>
  );
};

export default ChatBoxSinglePage;