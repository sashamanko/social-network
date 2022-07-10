import { Link, useNavigate, useParams } from 'react-router-dom';
import { Dropdown } from '../../ui';
import { deleteDoc, doc } from "firebase/firestore";
import MoreLineIcon from "remixicon-react/MoreLineIcon";
import useMessenger from '../../../hooks/useMessenger';
import { db, getDocument } from '../../../utils/firebase';


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