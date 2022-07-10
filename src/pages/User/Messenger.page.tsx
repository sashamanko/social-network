import '../../styles/pages/User/Messenger.page.scss';

import { Outlet } from "react-router-dom";
import { MessengerAside } from "../../components/User/Messenger";
import useStoreFetch from '../../hooks/useStoreFetch';


const MessengerPage = () => {

  useStoreFetch().Messenger();
  

  return (
    <div className="Messenger pb-1 flex w-100">
      <MessengerAside />

      <Outlet />
      

    </div>
  );
};

export default MessengerPage;