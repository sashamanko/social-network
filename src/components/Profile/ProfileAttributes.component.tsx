import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../hooks';
import { fetchProfile } from '../../redux/profile/asyncActions';
import ProfileControls from './ProfileControls.subcomponent';
// import './ProfileAttributes.component.css';

const ProfileAttributes = () => {

  const { profile } = useParams();
  const auth = useAuth();
  
  const dispach = useDispatch();
  const getProfile = useSelector((state: any) => state.profile);
  
  useEffect(() => {
    dispach( fetchProfile({profile, email: auth.email}) );
  }, [dispach, profile]);
  

  return (
    <>
      <div className="profileInfo flex mt-1 item-block">
        <div style={{background: 'red', width: '150px', height: '150px'}} className="rounded-fill mr-1"></div>
        <div className="flex flex-col">
          <h2>{ getProfile?.displayName }</h2>
          <p>{ getProfile?.email }</p>
          <p>subscribers: { getProfile?.subscribers.length }</p>
          <p>followers: { getProfile?.followers.length }</p>
        </div>
        <ProfileControls email={getProfile?.email} isSubscribe={getProfile?.isSubscribe}/>
      </div>
    </>
  );
};

export default ProfileAttributes;