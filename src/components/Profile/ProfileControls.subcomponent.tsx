import '../../styles/components/subcomponent/ProfileControls.subcomponent.scss';

import PencilLineIcon from "remixicon-react/PencilLineIcon";
import UserFollowLineIcon from "remixicon-react/UserFollowLineIcon";
import UserUnfollowLineIcon from "remixicon-react/UserUnfollowLineIcon";
import MailLineIcon from "remixicon-react/MailLineIcon";
import { useAuth } from "../../hooks";
import { Button, ButtonCircle } from "../ui";
import { useDispatch, useSelector } from 'react-redux';
import { fetchFollow, fetchUnfollow } from '../../redux/profile/asyncActions';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface IProfileControls {
  email: string;
  isSubscribe: boolean;
}

const ProfileControls = ({email, isSubscribe}: IProfileControls) => {

  const auth: any = useAuth();
  const { profile }: any = useParams();
  
  const getProfile = useSelector((state: any) => state.profile.isSubscribe);
  const dispatch = useDispatch();

  const [isFollow, setIsFollow] = useState(isSubscribe);

  if (email === auth.email) {
    return (
      <div className="ml-auto">
        <ButtonCircle variant='primary' forms='iconAnimate' animate='slide-left' textContent='Eidit' className='flex align-center justify-end'>
          <PencilLineIcon/>
        </ButtonCircle>
      </div>
    );
  } else {
    return (
      <div className="ml-auto">
        { isFollow && 
          <ButtonCircle
            variant='primary'
            forms='iconAnimate'
            animate='slide-left'
            textContent='Unfollow'
            className='flex ml-auto align-center justify-end'
            onClick={ () => { 
              dispatch(fetchUnfollow({email: auth.email, profile: String(profile)}));
              setIsFollow(false);
            } }
          >
            <UserUnfollowLineIcon />
          </ButtonCircle>
        }
        { !isFollow && 
          <ButtonCircle
            variant='primary'
            forms='iconAnimate'
            animate='slide-left'
            textContent='Follow'
            className='flex ml-auto align-center justify-end'
            onClick={ () => {
              dispatch(fetchFollow({email: auth.email, profile: String(profile)})); 
              setIsFollow(true);
            } }
          >
            <UserFollowLineIcon />
          </ButtonCircle>
        }
        <ButtonCircle
          variant='primary'
          forms='iconAnimate'
          animate='slide-left'
          textContent='Send message'
          className='flex ml-auto align-center justify-end mt-2'
        >
          <MailLineIcon />
        </ButtonCircle>
      </div>
    );
  }
};

export default ProfileControls;