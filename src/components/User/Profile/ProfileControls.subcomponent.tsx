import '../../../styles/components/subcomponent/ProfileControls.subcomponent.scss';

import PencilLineIcon from "remixicon-react/PencilLineIcon";
import UserFollowLineIcon from "remixicon-react/UserFollowLineIcon";
import UserUnfollowLineIcon from "remixicon-react/UserUnfollowLineIcon";
import MailLineIcon from "remixicon-react/MailLineIcon";
import { useAuth } from "../../../hooks";
import { ButtonCircle } from "../../ui";
import { useDispatch } from 'react-redux';
import { fetchFollow, fetchUnfollow } from '../../../redux/profile/asyncActions';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { fetchNewChat } from '../../../redux/messenger/asyncActions';
import useMessenger from '../../../hooks/useMessenger';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db, getDocument } from '../../../utils/firebase';
import useProfileInfo from '../../../hooks/useProfileInfo';

interface IProfileControls {
  email: string;
  isSubscribe: boolean;
}

const ProfileControls = ({email, isSubscribe}: any) => {
  
  const auth: any = useAuth();
  const getProfile: any = useProfileInfo();

  const sendMessage = async (text: string, chatId: string) => {
    await addDoc(collection(db , `messenger/${chatId}/messages`), {
      createAt: serverTimestamp(),
      text: text,
      userFrom: auth.email,
      // userFrom: '',
    });
  };

  const { profile }: any = useParams();
  const { chatList } = useMessenger();
  

  const [isFollow, setIsFollow] = useState(isSubscribe);
  
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
        { isFollow && 
          <ButtonCircle
            variant='primary'
            forms='iconAnimate'
            animate='slide-left'
            textContent='Unfollow'
            className='flex ml-auto align-center justify-end'
            onClick={ () => {
              setIsFollow(false);
              dispatch(fetchUnfollow({email: auth.email, profile: String(profile)}));
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
              setIsFollow(true);
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
          onClick={async () => {

            const i: any = chatList.find((doc: any) => {
              if (doc.data().user1 === email || doc.data().user2 === email) {
                navigate(`/messenger/${doc.id}`);
              }
            });

            if(!i) {
              const me = {
                id: auth.id,
                email: auth.email,
                displayName: auth.displayName,
              };
              
              const profileTo = {
                id: getProfile.id,
                email: getProfile.email,
                displayName: getProfile.displayName,
              };

              await dispatch(fetchNewChat({profileTo: profileTo, me}));
              
              const b = (await getDocument('messenger')).docs.find((doc: any) => {
                if (doc.data().users[0].email === email || doc.data().users[1].email === email) {
                  if (doc.data().users[0].email === auth.email || doc.data().users[1].email === auth.email) {
                    navigate(`/messenger/${doc?.id}`);
                  }
                }
              });

              console.log(b);
              
            };
            
            

          }}
        >
          <MailLineIcon />
        </ButtonCircle>
      </div>
    );
  }
};

export default ProfileControls;