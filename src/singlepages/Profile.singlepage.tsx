import { Outlet } from "react-router-dom";
import { ProfileAttributes } from "../components";
import Preloader from "../components/Preloader/Preloader.component";
import { useProfile } from "../hooks";
import useStoreFetch from "../hooks/useStoreFetch";
// import './ProfilePage.css';

const ProfileSinglePage = () => {

  useStoreFetch().Profile();

  const getProfile: any = useProfile();

  return (
    <div className="w-100"> 
      { getProfile.status === 1 &&
        <>
          <ProfileAttributes
            getProfile={ getProfile }
          />
          <Outlet />
        </>
      }
      { getProfile.status !== 1 &&
        <Preloader />
      }
    </div>
  );
};

export default ProfileSinglePage;