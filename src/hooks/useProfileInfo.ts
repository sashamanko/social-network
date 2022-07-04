import { async } from "@firebase/util";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchFollow, fetchProfile, fetchUnfollow } from "../redux/profile/asyncActions";
import { findDocument } from "../utils/firebase";
import useAuth from "./useAuth";

const useProfileInfo = () => {
  
  const getProfile = useSelector((state: any) => state.profile);

  return { ...getProfile };
};

export default useProfileInfo;