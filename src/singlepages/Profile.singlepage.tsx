import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ProfileAttributes } from "../components";
import Preloader from "../components/Preloader/Preloader.component";
import { useAuth } from "../hooks";
import { fetchProfile } from "../redux/profile/asyncActions";
// import './ProfilePage.css';

const ProfileSinglePage = () => {

  // const [isLoad, setIsLoad] = useState(false);

  const dispatch = useDispatch();
  const getProfile = useSelector((state: any) => state.profile);

  const { profile } = useParams();
  const auth = useAuth();
  

  useEffect(() => {
    dispatch( fetchProfile({profile, email: auth.email}) );
  }, [dispatch, profile]);

  return (
    <> 
      { getProfile.status === 1 &&
        <ProfileAttributes
          getProfile={ getProfile }
        />
      }
      { getProfile.status !== 1 &&
        <Preloader />
      }
    </>
  );
};

export default ProfileSinglePage;