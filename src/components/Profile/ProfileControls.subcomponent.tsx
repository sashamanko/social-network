import '../../styles/components/subcomponent/ProfileControls.subcomponent.scss';

import PencilLineIcon from "remixicon-react/PencilLineIcon";
import UserFollowLineIcon from "remixicon-react/UserFollowLineIcon";
import UserUnfollowLineIcon from "remixicon-react/UserUnfollowLineIcon";
import MailLineIcon from "remixicon-react/MailLineIcon";
import { useAuth } from "../../hooks";
import { Button, ButtonCircle } from "../ui";

interface IProfileControls {
  email: string;
  isSubscribe: boolean;
}

const ProfileControls = ({email, isSubscribe}: IProfileControls) => {
  
  const auth = useAuth();
  
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
        { isSubscribe && 
          <ButtonCircle
            variant='primary'
            forms='iconAnimate'
            animate='slide-left'
            textContent='Unfollow'
            className='flex ml-auto align-center justify-end'>
            <UserUnfollowLineIcon />
          </ButtonCircle>
        }
        { !isSubscribe && 
          <ButtonCircle
            variant='primary'
            forms='iconAnimate'
            animate='slide-left'
            textContent='Follow'
            className='flex ml-auto align-center justify-end'>
            <UserFollowLineIcon />
          </ButtonCircle>
        }
        <ButtonCircle
          variant='primary'
          forms='iconAnimate'
          animate='slide-left'
          textContent='Send message'
          className='flex ml-auto align-center justify-end mt-2'>
          <MailLineIcon />
        </ButtonCircle>
      </div>
    );
  }
};

export default ProfileControls;