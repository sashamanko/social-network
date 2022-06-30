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
import { useAuth } from './hooks';

const App = () => {

  const dispatch = useDispatch();
  const auth: any = getAuth();
  const [isRander, setIsRender] = useState(false);
  const { settings } = useAuth();

  useEffect(() => {
    const isAuth = onAuthStateChanged(auth, (user: any) => {
      if(user) {
        dispatch(fetchUser(user));
      }
    });

    setTimeout(() => {
      setIsRender(true);
    }, 500);
  }, [dispatch]);

  document.documentElement.dataset.theme = settings.theme;
  document.documentElement.dataset.color = settings.color;
  
  
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