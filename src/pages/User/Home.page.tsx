// Imports | React
// __________________________________________________
import { useEffect, useState } from "react";

// Imports | Firebase
// __________________________________________________
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";

// Utils | My
// __________________________________________________
import { db } from "../../utils/firebase";

// SCSS | My
// __________________________________________________
import '../../styles/pages/Home.page.scss';

// Components | My
// __________________________________________________
import { Button, Input } from "../../components/ui";

// Hooks | My
// __________________________________________________
import { useInput, useAuth} from "../../hooks";
import date from "../../utils/date";

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
    <div className="Home flex justify-center self-end py-1 w-100">
    </div>  
  );
};

export default HomePage;