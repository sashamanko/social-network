import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useAuth from "./useAuth";

const useMessenger = () => {

  const { chatList } = useSelector((state: any) => state.messenger);
  

  const { email } = useAuth();
  const { chatId } = useParams();

  // let i;
  let selectedUser: any;
  
  if(chatId) {
    const selectedChat = chatList.find((doc: any) => doc.id === chatId)?.data();
    
    if (selectedChat) {
      selectedUser = selectedChat.users.filter((user: any) => user.email !== email)[0];
    };
    
  }

  

  return {
    chatList,
    selectedUser,
  };

};

export default useMessenger;