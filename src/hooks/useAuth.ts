import { async } from "@firebase/util";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/user/slice";

// Interfaces | My
// __________________________________________________
import { IUseAuth } from "../types/hooks";
import { db, getDocument } from "../utils/firebase";
const auth: any = getAuth();

const getUserId = async (email: string) => await (await getDocs(collection( db, `users`))).docs.find(doc => doc.data().email === email)?.data().id;

const useAuth = () => {
  const {email, displayName} = useSelector((state: any) => state.user);

  const dispatch = useDispatch();

  
  
  useEffect(() => {
    const isAuth = onAuthStateChanged(auth, (user: any) => {
      if(user) {
        getUserId(user.email).then(id => {
          dispatch(setUser({
            email: user.email, 
            displayName: user.displayName,
            uid: user.uid,
            id
          }));
        });
      }
    });
  }, []);

  return {
    isAuth: !!email,
    email,
    displayName
  };
};

export default useAuth;