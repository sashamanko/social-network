import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/user/slice";

// Interfaces | My
// __________________________________________________
import { IUseAuth } from "../types/hooks";



const useAuth = (): IUseAuth => {
  const {email, displayName} = useSelector((state: any) => state.user);

  const auth: any = getAuth();
  const dispatch = useDispatch();

  
  useEffect(() => {
    const isAuth = onAuthStateChanged(auth, (user: any) => {
      dispatch(setUser({email: user?.email, displayName: user?.displayName}));
    });
  });

  return {
    isAuth: !!email,
    email,
    displayName
  };
};

export default useAuth;