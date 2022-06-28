// Imports | React router
// __________________________________________________
import { Navigate, Outlet, Route, Routes, useNavigate } from 'react-router-dom';

// Imports | Firebase
// __________________________________________________
import { getAuth } from 'firebase/auth';

// Impotrs | Pages
// __________________________________________________
import { SignInOrSignUpPage, SignInPage, SignUpPage } from './pages';

// Components | My
// __________________________________________________
import { UserLayout, GuestLayout } from './components';
import useAuth from './hooks/useAuth';

// Hooks | My
// __________________________________________________

//Preloader
//
import Preloader from './components/Preloader/Preloader.component';
import { useEffect, useState } from 'react';
import { ProfileSinglePage } from './singlepages';
import { DecorPage, HomePage, SettingsPage } from './pages/User';
import ProfilePage from './pages/User/settings/Profile.page';

const Router = () => {

  // const [load, setLoad] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoad(true);
  //   }, 1000);
  // }, []);

  const {isAuth, status} = useAuth();
  
  const auth = getAuth();
  
  // console.log(auth);
  

  return (
    <Routes>
      { isAuth &&
        <Route path='/' element={<UserLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path=":profile" element={<ProfileSinglePage />}>
            <Route path="subscribers" element={<h1>subscribers</h1>} />
          </Route>
          <Route path="/settings" element={ <SettingsPage />}>
            <Route path='profile' element={<ProfilePage />}/>
            <Route path="decor" element={<DecorPage />} />
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
      {/* { auth.status === 0 &&
        
      } */}
    </Routes>
  );
};

export default Router;