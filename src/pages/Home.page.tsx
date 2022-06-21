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

const HomePage = () => {

  const {email} = useAuth();
  const [bindValue, value, setValue] = useInput('');

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
        <div className="flex flex-col w-100">
          {messages && messages.map(((m: any) => {
            
            return (
              <p key={m.id} className={`flex ${ m.data.userFrom === email && 'justify-end' }`}>{m.data.text}</p>
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