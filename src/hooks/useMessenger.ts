import { addDoc, collection, doc, onSnapshot, orderBy, query, serverTimestamp, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchNewChat } from "../redux/messenger/asyncActions";
import { db, getDocument } from "../utils/firebase";
import useAuth from "./useAuth";

const useMessenger = () => {

  const [chatMessages, setChatMessages]: any = useState([]);
  const { chatList } = useSelector((state: any) => state.messenger);

  const { email, displayName, id  } = useAuth();
  const { chatId } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // let i;
  let selectedUser: any;
  let selectedChat: any;
  
  useEffect(() => {
    onSnapshot(query(collection( db, `messenger/${chatId}/messages`), orderBy('createAt', 'asc')), (snapshot: any) => {
      setChatMessages(
        snapshot.docs.map( (doc: any) => {
          return {
            id: doc.id,
            data: {...doc.data()},
          };
        } ));
    });
  }, [chatId]);

  if(chatId) {
    
    selectedChat = chatList.find((doc: any) => doc.id === chatId);
    
    if (selectedChat) {
      selectedUser = selectedChat?.data().users.filter((user: any) => user.email !== email)[0];
    };

  }

  const sendMessage = async (chatId: string, text: string) => {
    await addDoc(collection(db , `messenger/${chatId}/messages`), {
      createAt: serverTimestamp(),
      text: text,
      userFrom: email,
    });

    await updateDoc(doc( db, 'messenger', `${chatId}`), {
      'lastMessage': text,
      'lastMessageTime': serverTimestamp(),
    });
  };

  const newChat = async (user: any) => {

    const i: any = chatList.find((doc: any) => {
      if (doc.data().user1 === email || doc.data().user2 === email) {
        navigate(`/messenger/${doc.id}`);
      }
    });

    if(!i) {
      const me = {
        id: id,
        email: email,
        displayName: displayName,
      };
      
      const profileTo = {
        id: user.id,
        email: user.email,
        displayName: user.displayName,
      };

      await dispatch(fetchNewChat({profileTo: profileTo, me}));
      
      const b = (await getDocument('messenger')).docs.find((doc: any) => {
        if (doc.data().users[0].email === user.email || doc.data().users[1].email === user.email) {
          if (doc.data().users[0].email === email || doc.data().users[1].email === email) {
            navigate(`/messenger/${doc?.id}`);
          }
        }
      });

      console.log(b);
      
    };
  };
  

  return {
    chatList,
    selectedUser,
    selectedChat,
    chatMessages,
    sendMessage,
    newChat,
  };

};

export default useMessenger;