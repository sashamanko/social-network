// import './ProfilePage.css';

import { useAuth } from "../hooks";

const ProfilePage = () => {

  const {email} = useAuth();

  return (
    <div>
      <div className="profileInfo flex mt-1 item-block">
        <div style={{background: 'red', width: '200px', height: '200px'}} className="profileIMG rounded-fill mr-1"></div>
        <div className="flex flex-col">
          <h2>Username</h2>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;