import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ProfileAttributes } from "../components";
import Preloader from "../components/Preloader/Preloader.component";
import { useAuth, useProfile } from "../hooks";
import { fetchProfile } from "../redux/profile/asyncActions";
// import './ProfilePage.css';

const ProfileSinglePage = () => {

  const getProfile: any = useProfile();

  return (
    <div className="w-100"> 
      { getProfile.status === 1 &&
        <ProfileAttributes
          getProfile={ getProfile }
        />
      }
      { getProfile.status !== 1 &&
        <Preloader />
      }
    </div>
  );
};

export default ProfileSinglePage;