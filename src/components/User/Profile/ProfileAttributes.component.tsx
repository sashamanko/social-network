import { Link } from 'react-router-dom';
import ProfileControls from './ProfileControls.subcomponent';
// import './ProfileAttributes.component.css';

// {displayName: string, email: string, subscribersLength: number, followersLength: number, isSubscribe: boolean}

const ProfileAttributes = ({ getProfile }: any) => {

  const { displayName, email, subscribers, followers, isSubscribe } = getProfile;
  
  return (
    <>
      <div className="profileInfo flex item-block">
        <div style={{background: 'red', width: '150px', height: '150px'}} className="rounded-fill mr-1"></div>
        <div className="flex flex-col">
          <h2>{ displayName }</h2>
          <p>{ email }</p>
          <Link to='subscribers'>subscribers: { subscribers.length }</Link>
          <Link to='followers'>followers: { followers.length }</Link>
        </div>
        <ProfileControls email={ email } isSubscribe={ isSubscribe } />
      </div>
    </>
  );
};

export default ProfileAttributes;