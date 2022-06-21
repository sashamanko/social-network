// import './ProfilePage.css';

import { useAuth } from "../hooks";

const ProfilePage = () => {

  const {email, displayName} = useAuth();
  

  return (
    <>
      <div className="profileInfo flex mt-1 item-block">
        <div style={{background: 'red', width: '150px', height: '150px'}} className="rounded-fill mr-1"></div>
        <div className="flex flex-col">
          <h2>{ displayName }</h2>
          <p>{ email }</p>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;