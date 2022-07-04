import '../../styles/pages/User/Messenger.page.scss';

import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { Button, Input } from "../../components/ui";
import { MessengerAside } from "../../components/User/messenger";
import { useAuth, useInput } from "../../hooks";
import useMessenger from "../../hooks/useMessenger";
import date from "../../utils/date";
import { db, findDocument } from "../../utils/firebase";
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