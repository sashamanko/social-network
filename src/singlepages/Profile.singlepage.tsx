// import './ProfilePage.css';

import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useAuth } from "../hooks";
import { fetchProfile } from "../redux/profile/asyncActions";
import { db } from "../utils/firebase";

const ProfileSinglePage = () => {

  const { profile } = useParams();
  
  const dispach = useDispatch();
  const getProfile = useSelector((state: any) => state.profile);
  
  useEffect(() => {
    dispach( fetchProfile(profile) );
  }, [dispach, profile]);

  return (
    <>
      <div className="profileInfo flex mt-1 item-block">
        <div style={{background: 'red', width: '150px', height: '150px'}} className="rounded-fill mr-1"></div>
        <div className="flex flex-col">
          <h2>{ getProfile?.displayName }</h2>
          <p>{ getProfile?.email }</p>
          <p>subscribers: { getProfile?.subscribers }</p>
          <p>followers: { getProfile?.followers }</p>
          <p></p>
        </div>
      </div>
    </>
  );
};

export default ProfileSinglePage;