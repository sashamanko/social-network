import { async } from "@firebase/util";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchFollow, fetchProfile, fetchUnfollow } from "../redux/profile/asyncActions";
import { findDocument } from "../utils/firebase";
import useAuth from "./useAuth";

const i = async (followers: any) => {
  const i = followers.map(async (email: any) => {
    return (await findDocument('users', 'email', email.data().email));
  });
};

const useProfileInfo = async () => {
  
  const dispatch = useDispatch();
  const getProfile = useSelector((state: any) => state.profile);

  const b = i(getProfile.followers);
  
  return { gFollowers: b, ...getProfile };
};

export default useProfileInfo;