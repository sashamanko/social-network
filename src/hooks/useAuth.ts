import { async } from "@firebase/util";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpdateUser, fetchUser } from "../redux/user/asyncActions";

// Interfaces | My
// __________________________________________________
import { IUseAuth } from "../types/hooks";
import { db, getDocument } from "../utils/firebase";


// const getUserId = async (email: string) => await (await getDocs(collection( db, `users`))).docs.find(doc => doc.data().email === email)?.data().id;

const useAuth = () => {
  const {email, displayName, settings, status} = useSelector((state: any) => state.user);

  const dispatch = useDispatch();

  const updateUser = (params: any) => {
    dispatch(fetchUpdateUser(params));
  };

  return {
    isAuth: !!email,
    email,
    displayName,
    settings,
    status,
    updateUser,
  };
};

export default useAuth;