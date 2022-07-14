// Imports | React router
// __________________________________________________
import { getAuth, signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

// Imports | Remix icons
// __________________________________________________
import UserLineIcon from 'remixicon-react/UserLineIcon';
import useAuth from '../../hooks/useAuth';
import { removeUser } from '../../redux/user/slice';
import { Dropdown } from '../ui';

// SCSS | My
// __________________________________________________
import '../../styles/components/Header.component.scss';

const Header = () => {

  const auth: any = getAuth();
  const navigate = useNavigate();
  const dispach = useDispatch();

  const options = {
    profile: {
      label: 'Settings',
      type: 'link',
      url: `#/settings/profile`,
    },
    sp1: 'separator',
    logout: {
      label: 'Sign out',
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

        <NavLink 
          to='/'
          className='font-700'
          style={{
            fontSize: '1.666rem',
          }}
        >
          Title
        </NavLink>

        {isAuth && 
        <Dropdown
          className='ml-auto'
          options={ options }
        >
          <UserLineIcon />
        </Dropdown>}
      
      </div>
    </header>  
  );
};

export default Header;