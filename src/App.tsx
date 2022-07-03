// SCSS | My
// __________________________________________________
import './styles/App.scss';

// Router | My
// __________________________________________________
import Router from './Router';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { fetchUser } from './redux/user/asyncActions';
import Preloader from './components/Preloader/Preloader.component';
import useStoreFetch from './hooks/useStoreFetch';
import { useAuth } from './hooks';

const App = () => {

  const [isRander, setIsRender] = useState(false);
  
  useStoreFetch().Auth();
  
  const { settings } = useAuth();

  setTimeout(() => {
    setIsRender(true);
  }, 500);
  

  if (settings?.theme) {
    document.documentElement.dataset.theme = settings.theme;
    document.documentElement.dataset.color = settings.color;
  } else {
    document.documentElement.dataset.theme = 'white';
    document.documentElement.dataset.color = 'white-purple';
  }
  
  
  return (
    <>
      { !isRander &&
        <Preloader />
      }
      { isRander &&
      <Router />
      }
    </>
  );
};

export default App;