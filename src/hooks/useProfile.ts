import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchFollow, fetchProfile, fetchUnfollow } from "../redux/profile/asyncActions";
import useAuth from "./useAuth";

const useProfile = () => {
  
  const getProfile = useSelector((state: any) => state.profile);

  return { ...getProfile };
};

export default useProfile;