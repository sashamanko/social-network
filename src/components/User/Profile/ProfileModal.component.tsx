import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useProfileInfo from '../../../hooks/useProfileInfo';
import Modal from '../../ui/Modal/Modal.ui';
// import './ProfileModal.css';

const ProfileModal = () => {
  const { subOrFoll, profile }: any = useParams();
  const getProfile: any = useProfileInfo();

  useEffect(() => {
    // console.log(getProfile);
  }, []);


  return (
    <Modal>
      {
        // getProfile[subOrFoll].map((doc: any) => {
        //   console.log(doc.data().email);
          
        //   return (
        //     <p>{ doc.data().email }</p>
        //   );
        // })
      }
    </Modal>
  );
};

export default ProfileModal;