// Imports | React router
// __________________________________________________
import { Navigate, Route, Routes } from 'react-router-dom';

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
import { DecorPage, HomePage, MessengerPage, SettingsPage } from './pages/User';
import ProfilePage from './pages/User/settings/Profile.page';
import ChatBox from './components/User/messenger/ChatBox.component';
import NewMessage from './components/User/messenger/NewMessage.component';

const Router = () => {

  const {isAuth, settings} = useAuth();

  return (
    <Routes>
      { isAuth &&
        <Route path='/' element={<UserLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path=":profile" element={<ProfileSinglePage />}>
            <Route path="subscribers" element={<h1>subscribers</h1>} />
          </Route>
          <Route path="/messenger" element={<MessengerPage />}>
            <Route path="" element={<NewMessage />} />
            <Route path=":chatId" element={<ChatBox />} />
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
          {/* <Route path='*' element={ <Navigate to='/' replace/> } /> */}
        </Route>
      }
    </Routes>
  );
};

export default Router;