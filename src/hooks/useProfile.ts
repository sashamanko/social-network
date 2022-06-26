import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchFollow, fetchProfile, fetchUnfollow } from "../redux/profile/asyncActions";
import useAuth from "./useAuth";

const useProfile = () => {
  
  const dispatch = useDispatch();
  const getProfile = useSelector((state: any) => state.profile);
  
  const { profile } = useParams();
  const auth = useAuth();

  useEffect(() => {
    dispatch( fetchProfile({profile, email: auth.email}) );
  }, [dispatch, profile]);

  const data = () => {
    return {...getProfile};
  };

  const follow = (profile: string, email: string) => {
    dispatch(fetchFollow({email, profile}));
  };

  const unfollow = (profile: string, email: string) => {
    dispatch(fetchUnfollow({email, profile}));
  };

  return { data, follow, unfollow };
};

export default useProfile;