// Imports | React router
// __________________________________________________
import { Navigate, Route, Routes } from 'react-router-dom';

// Imports | Firebase
// __________________________________________________
import { getAuth } from 'firebase/auth';

// Impotrs | Pages
// __________________________________________________
import { HomePage, SignInOrSignUpPage, SignInPage, SignUpPage } from './pages';

// Components | My
// __________________________________________________
import { UserLayout, GuestLayout } from './components';

// Hooks | My
// __________________________________________________
import useAuth from './hooks/useAuth';

//Preloader
//
import Preloader from './components/Preloader/Preloader.component';
import { useEffect, useState } from 'react';
import { ProfileSinglePage } from './singlepages';

const Router = () => {

  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 1000);
  }, []);

  const {isAuth} = useAuth();
  const { _isInitialized }: any = getAuth();
  
  if (_isInitialized && load) {
    return (
      <Routes>
        { isAuth &&
          <Route path='/' element={<UserLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path=":profile" element={<ProfileSinglePage />}>
              <Route path="subscribers" element={<h1>subscribers</h1>} />

            </Route>
          </Route>
        }
        { !isAuth &&
          <Route path='/' element={<GuestLayout />}>
            <Route path="/" element={ <SignInOrSignUpPage /> } />
            <Route path="/login" element={ <SignInPage /> }  />
            <Route path = "/register" element={ <SignUpPage /> } />
          </Route>
        }
      </Routes>
    );
  } else {
    return (<Preloader/>);
  }
};

export default Router;