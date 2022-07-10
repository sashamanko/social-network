import { async } from "@firebase/util";
import { collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, updateDoc } from "firebase/firestore";
import useMessenger from "../../hooks/useMessenger";
import { db } from "../../utils/firebase";


const messageItem = () => {
  

  const delMessage = async (contextMenuData: any) => {
    const { chatId , id } = contextMenuData;
    
    await deleteDoc(doc(db , `messenger/${chatId}/messages`, String(id)));

    onSnapshot(query(collection( db, `messenger/${chatId}/messages`), orderBy('createAt', 'asc')), async (snapshot: any) => {
      await updateDoc(doc( db, 'messenger', `${chatId}`), {
        'lastMessage': snapshot.docs[snapshot.docs.length - 1].data().text,
        'lastMessageTime': snapshot.docs[snapshot.docs.length - 1].data().createAt,
      });
    });
    

    // await updateDoc(doc( db, 'messenger', `${chatId}`), {
    //   'lastMessage': i.docs[i.size - 1],
    //   // 'lastMessageTime': serverTimestamp(),
    // });
  };


  return {
    delMessage
  };
};

export {
  messageItem,
};