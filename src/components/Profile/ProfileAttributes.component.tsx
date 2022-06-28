import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAuth, useProfile } from '../../hooks';
import { fetchProfile } from '../../redux/profile/asyncActions';
import ProfileControls from './ProfileControls.subcomponent';
// import './ProfileAttributes.component.css';

// {displayName: string, email: string, subscribersLength: number, followersLength: number, isSubscribe: boolean}

const ProfileAttributes = ({ getProfile }: any) => {

  const { displayName, email, subscribers, followers, isSubscribe } = getProfile;

  console.log(subscribers);
  
  
  return (
    <>
      <div className="profileInfo flex mt-1 item-block">
        <div style={{background: 'red', width: '150px', height: '150px'}} className="rounded-fill mr-1"></div>
        <div className="flex flex-col">
          <h2>{ displayName }</h2>
          <p>{ email }</p>
          <p>subscribers: { subscribers.length }</p>
          <p>followers: { followers.length }</p>
        </div>
        <ProfileControls email={ email } isSubscribe={ isSubscribe } />
      </div>
    </>
  );
};

export default ProfileAttributes;