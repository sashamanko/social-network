import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ProfileAttributes } from "../components";
import Preloader from "../components/Preloader/Preloader.component";
import { useAuth, useProfile } from "../hooks";
import { fetchProfile } from "../redux/profile/asyncActions";
// import './ProfilePage.css';

const ProfileSinglePage = () => {

  const { data }: any = useProfile();

  return (
    <> 
      { data().status === 1 &&
        <ProfileAttributes
          getProfile={ data() }
        />
      }
      { data().status !== 1 &&
        <Preloader />
      }
    </>
  );
};

export default ProfileSinglePage;