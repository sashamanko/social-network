import '../../styles/components/subcomponent/ProfileControls.subcomponent.scss';

import PencilLineIcon from "remixicon-react/PencilLineIcon";
import UserFollowLineIcon from "remixicon-react/UserFollowLineIcon";
import UserUnfollowLineIcon from "remixicon-react/UserUnfollowLineIcon";
import MailLineIcon from "remixicon-react/MailLineIcon";
import { useAuth } from "../../hooks";
import { ButtonCircle } from "../ui";
import { useDispatch } from 'react-redux';
import { fetchFollow, fetchUnfollow } from '../../redux/profile/asyncActions';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

interface IProfileControls {
  email: string;
  isSubscribe: boolean;
}

const ProfileControls = ({email, isSubscribe}: any) => {

  const auth: any = useAuth();
  const { profile }: any = useParams();

  const [isFolor, setIsFolor] = useState(isSubscribe);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (email === auth.email) {
    return (
      <div className="ml-auto">
        <ButtonCircle
          variant='primary'
          forms='iconAnimate'
          animate='slide-left'
          textContent='Eidit'
          className='flex align-center justify-end'
          onClick={ () => navigate('/settings/profile')}
        >
          <PencilLineIcon/>
        </ButtonCircle>
      </div>
    );
  } else {
    return (
      <div className="ml-auto">
        { isFolor && 
          <ButtonCircle
            variant='primary'
            forms='iconAnimate'
            animate='slide-left'
            textContent='Unfollow'
            className='flex ml-auto align-center justify-end'
            onClick={ () => {
              setIsFolor(false);
              dispatch(fetchUnfollow({email: auth.email, profile: String(profile)}));
            } }
          >
            <UserUnfollowLineIcon />
          </ButtonCircle>
        }
        { !isFolor && 
          <ButtonCircle
            variant='primary'
            forms='iconAnimate'
            animate='slide-left'
            textContent='Follow'
            className='flex ml-auto align-center justify-end'
            onClick={ () => {
              setIsFolor(true);
              dispatch(fetchFollow({email: auth.email, profile: String(profile)}));
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