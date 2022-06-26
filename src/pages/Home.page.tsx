// Imports | React
// __________________________________________________
import { useEffect, useState } from "react";

// Imports | Firebase
// __________________________________________________
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";

// Utils | My
// __________________________________________________
import { db } from "../utils/firebase";

// SCSS | My
// __________________________________________________
import '../styles/pages/Home.page.scss';

// Components | My
// __________________________________________________
import { Button, Input } from "../components/ui";

// Hooks | My
// __________________________________________________
import { useInput, useAuth} from "../hooks";
import date from "../utils/date";

// Remix Icon
// __________________________________________________
import SendPlaneLineIcon from "remixicon-react/SendPlaneFillIcon";

const HomePage = () => {

  const {email, status} = useAuth();
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
    <div className="Home flex justify-center self-end py-1 ">
      <div className="flex w-50 flex-col align-end">
        {/* <span className="item-block rounded-fill mx-auto p-2">38 груня</span> */}
        <ul className="Home__message-list flex flex-col w-100 py-2 pl-3">
          {messages && messages.map(((m: any) => {
            return (
              <li
                key={m.id}
                className={`Home__message-list__item flex ${ m.data.userFrom === email ? 'ml-auto right' : 'mr-auto' } p-2 bg-block rounded align-end mt-3`}>
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
            variant="primary"
            className="flex justify-center align-center p-2"
            onClick={ () => {sendMessage(value); restValue();} }
          >
            <SendPlaneLineIcon/>
          </Button>
        </div>
        
      </div>
    </div>  
  );
};

export default HomePage;