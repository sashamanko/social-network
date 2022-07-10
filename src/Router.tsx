// Imports | React router
// __________________________________________________
import { Route, Routes } from 'react-router-dom';

// Impotrs | Pages, Single pages
// __________________________________________________
import { SignInOrSignUpPage, SignInPage, SignUpPage, DecorPage, HomePage, MessengerPage, SettingsPage, ProfilePage } from './pages';
import { ProfileSinglePage, ChatBoxSinglePage } from './singlepages';

// Imports | Components
// __________________________________________________
import { UserLayout, GuestLayout } from './components/Layouts';
import { NewMessage } from './components/User';

// Hooks | My
// __________________________________________________
import useAuth from './hooks/useAuth';

//Preloader
//
import ProfileModal from './components/User/Profile/ProfileModal.component';
import ContexMenuProvider from './hoc/ContextMenuProvider.provider';

const Router = () => {

  const { isAuth } = useAuth();

  return (
    <ContexMenuProvider>
      <Routes>
        { isAuth &&
          <Route path='/' element={<UserLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path=":profile" element={<ProfileSinglePage />}>
              <Route path=":subOrFoll" element={<ProfileModal />} />
            </Route>
            <Route path="/messenger" element={<MessengerPage />}>
              <Route path="" element={<NewMessage />} />
              <Route path=":chatId" element={<ChatBoxSinglePage />} />
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
    </ContexMenuProvider>
  );
};

export default Router;