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

  const dispach = useDispatch();
  const getProfile = useSelector((state: any) => state.profile);

  const { profile } = useParams();
  const auth = useAuth();
  console.log(getProfile);
  

  useEffect(() => {
    dispach( fetchProfile({profile, email: auth.email}) );
  }, [dispach, profile]);

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