// Imports | React router
// __________________________________________________
import { Navigate, Route, Routes } from 'react-router-dom';

// Impotrs | Pages
// __________________________________________________
import { HomePage, SignInOrSignUpPage, SignInPage, SignUpPage, ProfilePage } from './pages';

// Components | My
// __________________________________________________
import { UserLayout, GuestLayout } from './components';

// Hooks | My
// __________________________________________________
import useAuth from './hooks/useAuth';
import { getAuth } from 'firebase/auth';

const Router = () => {
  const {isAuth} = useAuth();
  const { _isInitialized }: any = getAuth();
  
  if (_isInitialized) {
    return (
      <Routes>
        { isAuth &&
          <Route path='/' element={<UserLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
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
    return (<h2>Loading...</h2>);
  }
};

export default Router;