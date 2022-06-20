// SCSS | My
// __________________________________________________
// import './Home.page.scss';

import { useSelector } from "react-redux";
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { Input } from "../components/ui";
import useInput from "../hooks/useInput";

const HomePage = () => {
  // const {email} = useSelector((state: any) => state.user);
  const [bindValue, value, setValue] = useInput('');

  const [messages, setMessages] = useState([]);

  const sendMessage = async (text: string) => {
    await addDoc(collection(db , 'messages'), {
      createAt: serverTimestamp(),
      text: text
    });
  };

  useEffect(() => {
    onSnapshot(query(collection( db, 'messages'), orderBy('createAt', 'asc')), (snapshot: any) => {
      setMessages(
        snapshot.docs.map( (doc: any) => {
          return {
            id: doc.id,
            data: {...doc.data()},
          };
        } ));
    });
  }, []);
  

  
  
  
  return (
    <div style={{height: 'calc(97vh - 60px)'}} className="flex justify-center">
      <div className="flex w-50 flex-col align-end">
        <div className="flex flex-col">
          {messages && messages.map(((m: any) => {
            return (
              <p>{m.data.text}</p>
            );
          }))}
        </div>

        <Input
          {...bindValue}
          onKeyPress={ (e: any) => {
            if (e.key === 'Enter') {
              sendMessage(value);
              setValue('');
            }
          }}
        />
      </div>
    </div>  
    // <button onClick={ () => sendMessage() }>
    //   send
    // </button>
  );
};

export default HomePage;