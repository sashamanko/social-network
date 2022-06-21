import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/slices/userSlice";

const useAuth = () => {
  const {email} = useSelector((state: any) => state.user);

  const auth: any = getAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    const isAuth = onAuthStateChanged(auth, (user: any) => {
      dispatch(setUser({email: user.email}));
    });
  });

  return {
    isAuth: !!email,
    email
  };
};

export default useAuth;