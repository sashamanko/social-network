import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlice";

const useIsAuth = () => {
  const [ currentUser, setCurrentUser ] = useState();
  const auth: any = getAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user: any) => {
      dispatch(setUser({email: user.email}));
      setCurrentUser(user); 
    });
    return unsub;
  });
  

  return currentUser;
};

export default useIsAuth;