// Imports | React
// __________________________________________________
import { useEffect, useState } from "react";

// Imports | Firebase
// __________________________________________________
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";

// Utils | My
// __________________________________________________
import { db } from "../utils/firebase";

// Components | My
// __________________________________________________
import { Input } from "../components/ui";

// Hooks | My
// __________________________________________________
import { useInput, useAuth} from "../hooks";
import date from "../utils/date";

const HomePage = () => {

  const {email} = useAuth();
  const [bindValue, value, restValue] = useInput('');

  const [messages, setMessages] = useState([]);

  const sendMessage = async (text: string) => {
    await addDoc(collection(db , 'messages'), {
      createAt: serverTimestamp(),
      text: text,
      userFrom: email,
      // userFrom: '',
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
        <ul className="flex flex-col w-100">
          {messages && messages.map(((m: any) => {
            return (
              <li key={m.id} className={`flex flex-col ${ m.data.userFrom === email ? 'align-end' : '' }`}>
                <p >{m.data.text}</p>
                <span>{ date(m.data.createAt.seconds).h }:{date(m.data.createAt.seconds).m }</span>
              </li>
            );
          }))}
        </ul>

        <Input
          {...bindValue}
          onKeyPress={ (e: any) => {
            if (e.key === 'Enter') {
              sendMessage(value);
              restValue();
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