import { collection, deleteDoc, doc, onSnapshot, orderBy, query, updateDoc } from "firebase/firestore";
import { db, getDocument } from "../../utils/firebase";


const messageItem = () => {

  const copyMessage = (contextMenuData: any) => {
    const { data } = contextMenuData;
    
    navigator.clipboard.writeText(data.text);
  };

  const delMessage = async (contextMenuData: any) => {
    const { chatId , id } = contextMenuData;
    
    await deleteDoc(doc(db , `messenger/${chatId}/messages`, String(id)));

    onSnapshot(query(collection( db, `messenger/${chatId}/messages`), orderBy('createAt', 'asc')), async (snapshot: any) => {
      await updateDoc(doc( db, 'messenger', `${chatId}`), {
        'lastMessage': snapshot.docs[snapshot.docs.length - 1].data().text,
        'lastMessageTime': snapshot.docs[snapshot.docs.length - 1].data().createAt,
      });
    });
  };


  return {
    copyMessage,
    delMessage
  };
};

const messengerSidebarItem = () => {
  
  const openLinkInNewTab = (contextMenuData: any) => {
    const { chatId } = contextMenuData;

    window.open(`${window.location.origin}${window.location.pathname}#/messenger/${chatId}`, '_blank');
  };

  const visitUser = (contextMenuData: any) => {
    const { userId } = contextMenuData;
    console.log(userId);
    

    window.location.hash = `/${userId}`;
  };

  const delChat = async (contextMenuData: any) => {
    const { chatId } = contextMenuData;

    await deleteDoc(doc(db, 'messenger', `${chatId}`));
    (await getDocument(`messenger/${chatId}/messages`)).docs.forEach(docElem => {
      deleteDoc(doc(db, `messenger/${chatId}/messages`, `${docElem.id}`));
    });

    window.location.hash = '/messenger';
  };

  return {
    openLinkInNewTab,
    visitUser,
    delChat,
  };

};

export {
  messageItem,
  messengerSidebarItem,
};