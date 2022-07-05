import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserList } from "../redux/messenger/asyncActions";
import { fetchProfile } from "../redux/profile/asyncActions";
import { fetchUser } from "../redux/user/asyncActions";
import { db } from "../utils/firebase";

const useStoreFetch = () => {

  const auth: any = getAuth();
  const routeParams = useParams();

  const dispatch = useDispatch();

  const Auth = () => {

    useEffect(() => {
      onAuthStateChanged(auth, (user: any) => {
        if(user) {
          dispatch(fetchUser(user));
        }
      });
    }, [dispatch]);

  };
  
  const Profile = () => {

    useEffect(() => {
      dispatch( fetchProfile({profile: routeParams.profile, email: auth.currentUser.email}) );
    }, [dispatch, routeParams.profile]);

  };

  const Messenger = () => {
    
    useEffect(() => {
      onSnapshot(query(collection( db, 'messenger'), orderBy('lastMessageTime', 'desc')), (snapshot: any) => {
        const i = snapshot.docs.filter((doc: any) => doc.data().users.find((user: any) => {
          if (user.email === auth.currentUser.email) return doc;
        }));
        
        dispatch(fetchUserList({chatList: i, email: auth.currentUser.email}));
      });
    }, [dispatch]);
  };

  return {
    Auth,
    Profile,
    Messenger,
  };
};

export default useStoreFetch;