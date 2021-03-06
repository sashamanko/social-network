// SCSS | My
// __________________________________________________
import './styles/App.scss';

// Router | My
// __________________________________________________
import Router from './Router';
import { useState } from 'react';
import Preloader from './components/Preloader/Preloader.component';
import useStoreFetch from './hooks/useStoreFetch';
import { useAuth } from './hooks';

const App = () => {

  useStoreFetch().Auth();

  const [isRander, setIsRender] = useState(false);
  
  const { settings } = useAuth();

  document.addEventListener('contextmenu', (e: any) => {
    e.preventDefault();
  });

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