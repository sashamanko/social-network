// Imports | React router
// __________________________________________________
import {NavLink} from 'react-router-dom';

// Imports | Remix icons
// __________________________________________________
import UserLineIcon from 'remixicon-react/UserLineIcon';
import Dropdown from '../ui/Dropdown/Dropdown.ui';

// SCSS | My
// __________________________________________________
import './Header.component.scss';

const options = {
  profile: {
    label: 'Профиль',
    type: 'link',
    url: 'profile',
  },
  sp1: 'separator',
  settings: {
    label: 'Настройки',
    type: 'link',
    url: 'settings',
  },
  healp: {
    label: 'Помощь',
    type: 'link',
    url: 'help',
  }
};

const Header = () => {
  return (
    <header className='header bg-block'>
      <div className="header__container flex align-center mx-auto px-1">

        <h3 className=''>Title</h3>

        <Dropdown
          className='ml-auto'
          controllerContent={ <UserLineIcon /> }
          options={ options }
        />
      
      </div>
    </header>  
  );
};

export default Header;