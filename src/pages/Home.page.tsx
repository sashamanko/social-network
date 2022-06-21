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
import { Button, Input } from "../components/ui";

// Hooks | My
// __________________________________________________
import { useInput, useAuth} from "../hooks";
import date from "../utils/date";

// Remix Icon
import SendPlaneLine from "remixicon-react/SendPlaneFillIcon";

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
    <div style={{minHeight: 'calc(97vh - 60px)', overflow: 'hidden'}} className="flex justify-center self-end">
      <div className="flex w-50 flex-col align-end">
        <ul style={{ overflowY: 'scroll', maxHeight: 'calc(97vh - 110px)'}} className="flex flex-col w-100 pt-1">
          {messages && messages.map(((m: any) => {
            return (
              <li key={m.id}
                style={{
                  wordBreak: 'break-word', 
                  boxShadow: 'var(--shadow)',
                  background: m.data.userFrom === email ? 'var(--main)' : '',
                  color: m.data.userFrom === email ? 'var(--font-white)' : ''}}
                className={`flex ${ m.data.userFrom === email ? 'ml-auto' : 'mr-auto' } p-2 bg-block rounded align-end mt-3`}>
                <p className="mr-3 font-500">{m.data.text}</p>
                {m.data.createAt?.seconds && <span style={{wordBreak: 'normal'}} className="font-xs font-500">{  date(m.data.createAt.seconds).h }:{date(m.data.createAt.seconds).m }</span>}
              </li>
            );
          }))}
        </ul>

        <div className="flex align-center w-100 mt-1">
          <Input
            view='primary'
            placeholder="Send message"
            className="mr-2"
            {...bindValue}
            onKeyPress={ (e: any) => {
              if (e.key === 'Enter') {
                sendMessage(value);
                restValue();
              }
            }}
          />
          <Button 
            className="flex justify-center align-center"
            variant="primary"
            onClick={ () => {sendMessage(value); restValue();} }
          >
            <SendPlaneLine/>
          </Button>
        </div>
        
      </div>
    </div>  
    // <button onClick={ () => sendMessage() }>
    //   send
    // </button>
  );
};

export default HomePage;