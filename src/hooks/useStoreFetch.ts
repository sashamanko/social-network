import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProfile } from "../redux/profile/asyncActions";
import { fetchUser } from "../redux/user/asyncActions";

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

  
  return {
    Auth,
    Profile
  };
};

export default useStoreFetch;