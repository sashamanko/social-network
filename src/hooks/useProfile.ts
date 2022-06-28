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

  return { ...getProfile };
};

export default useProfile;