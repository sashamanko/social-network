import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchFollow, fetchProfile, fetchUnfollow } from "../redux/profile/asyncActions";
import useAuth from "./useAuth";

const useProfile = () => {
  
  // const dispatch = useDispatch();
  const getProfile = useSelector((state: any) => state.profile);
  // console.log(getProfile);

  return { ...getProfile };
};

export default useProfile;