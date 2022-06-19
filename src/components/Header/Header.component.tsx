// Imports | React router
// __________________________________________________
import { getAuth, signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Imports | Remix icons
// __________________________________________________
import UserLineIcon from 'remixicon-react/UserLineIcon';
import useAuth from '../../hooks/useAuth';
import { removeUser } from '../../store/slices/userSlice';
import Dropdown from '../ui/Dropdown/Dropdown.ui';

// SCSS | My
// __________________________________________________
import './Header.component.scss';

const Header = () => {

  const auth: any = getAuth();
  const navigate = useNavigate();
  const dispach = useDispatch();

  const options = {
    profile: {
      label: 'Профиль',
      type: 'link',
      url: 'profile',
    },
    sp1: 'separator',
    logout: {
      label: 'Logout',
      type: 'button',
      onClick: async () => {
        await signOut(auth);
        dispach(removeUser());
        navigate('', { replace: true });
      },
    },
  };

  const {isAuth} = useAuth();

  return (
    <header className='header bg-block'>
      <div className="header__container flex align-center mx-auto px-1">

        <h3 className=''>Title</h3>

        {isAuth && <Dropdown
          className='ml-auto'
          controllerContent={ <UserLineIcon /> }
          options={ options }
        />}
      
      </div>
    </header>  
  );
};

export default Header;