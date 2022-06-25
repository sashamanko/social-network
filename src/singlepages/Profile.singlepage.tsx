import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ProfileAttributes } from "../components";
import { fetchProfile } from "../redux/profile/asyncActions";
// import './ProfilePage.css';

const ProfileSinglePage = () => {

  return (
    <>
      <ProfileAttributes />
    </>
  );
};

export default ProfileSinglePage;