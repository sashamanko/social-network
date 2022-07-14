// Imports | React, React router
// __________________________________________________
import { Link, useNavigate, useParams } from 'react-router-dom';

// Imports | Firebase
// __________________________________________________
import { deleteDoc, doc } from "firebase/firestore";

// Imports | Utils 
// __________________________________________________
import { db, getDocument } from '../../../utils/firebase';

// Imports | Ui
// __________________________________________________
import { Dropdown } from '../../ui';

// Imports | Hooks 
// __________________________________________________
import useMessenger from '../../../hooks/useMessenger';

// Imports | Remix icons
// __________________________________________________
import MoreLineIcon from "remixicon-react/MoreLineIcon";


const ChatBoxHeader = () => {

  const { selectedUser } = useMessenger();
  const navigate = useNavigate();
  const { chatId }: any = useParams();

  const options = {
    profile: {
      label: 'Visit user',
      type: 'link',
      url: `/#/${selectedUser?.id}`,
    },
    sp1: 'separator',
    delChat: {
      label: 'Delete chat',
      type: 'button',
      onClick: async () => {
        navigate('/messenger');
        await deleteDoc(doc(db, 'messenger', `${chatId}`));
        (await getDocument(`messenger/${chatId}/messages`)).docs.forEach(docElem => {
          deleteDoc(doc(db, `messenger/${chatId}/messages`, `${docElem.id}`));
        });
      }
    },
  };

  return (
    <div
      className='item-block mb-auto '
    >
      <div className="flex align-center">
        <Link to={`/${selectedUser?.id}`}>{ selectedUser?.displayName }</Link>
        <Dropdown
          className='ml-auto'
          options={ options }
        >
          <MoreLineIcon />
        </Dropdown>
      </div>
    </div>
  );
};

export default ChatBoxHeader;