import { Link, useParams } from 'react-router-dom';
import { useProfile } from '../../../hooks';
import Modal from '../../ui/Modal/RouterModal.ui';
// import './ProfileModal.css';

const ProfileModal = () => {
  const { subOrFoll }: any = useParams();
  const getProfile: any = useProfile();
  
  return (
    <Modal>
      <ul className='list-none'>
        {
          getProfile[subOrFoll].map((doc: any, index: number) => {
            
            return (
              <li key={index} className={`flex ${index !== 0 ? 'mt-2' : ''}`} style={{width: 250,}}>
                <Link to={'/' + doc?.data()?.id} className='flex align-center w-100'>
                  <img src="https://fakeimg.pl/150x150/" alt={doc?.data()?.displayName} className='mr-2 rounded-fill' style={{width: 44,}} />
                  <p>{ doc?.data()?.displayName }</p>
                </Link>
              </li>
            );
          })
        }
      </ul>
    </Modal>
  );
};

export default ProfileModal;