import { Link, useNavigate } from 'react-router-dom';
import { Button, ButtonCircle } from '../../ui';
import ProfileControls from './ProfileControls.subcomponent';

import UserSharedLineIcon from "remixicon-react/UserSharedLineIcon";
import UserReceivedLineIcon from "remixicon-react/UserReceivedLineIcon";

const ProfileAttributes = ({ getProfile }: any) => {

  const { displayName, email, subscribers, followers, isSubscribe } = getProfile;

  const navigate = useNavigate();

  
  return (
    <>
      <div className="profileInfo flex item-block">
        <div style={{background: 'red', width: '150px', height: '150px'}} className="rounded-fill mr-1"></div>
        <div className="flex flex-col">
          <h2>{ displayName }</h2>
          <p>{ email }</p>
          
          <span className='flex align-center mt-auto'>
            <Button
              variant='primary'
              className='flex align-center justify-start'
              onClick={ () => navigate('subscribers')}
            >
              <UserSharedLineIcon className='mr-5' />

              <span>
                Subscribers: { subscribers.length }
              </span>
            </Button>

            <Button
              variant='primary'
              className='flex align-center justify-start ml-1'
              onClick={ () => navigate('followers')}
            >
              <UserReceivedLineIcon className='mr-3' />
              <span>
                Followers: { followers.length }
              </span>
            </Button>
          </span>

        </div>
        <ProfileControls email={ email } isSubscribe={ isSubscribe } />
      </div>
    </>
  );
};

export default ProfileAttributes;