// Imports | React router
// __________________________________________________
import { Navigate, Route, Routes } from 'react-router-dom';

// SCSS | My
// __________________________________________________
import './styles/App.scss';

// Impotrs | Pages
// __________________________________________________
import { HomePage, SignInOrSignUpPage, SignInPage, SignUpPage } from './pages';

// Components | My
// __________________________________________________
import { Layout } from './components';

// Hooks | My
// __________________________________________________
import useAuth from './hooks/useAuth';



const App = () => {
  const {isAuth} = useAuth();
  
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path="/" element={isAuth ? <HomePage /> : <SignInOrSignUpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={isAuth ? <Navigate to="/" replace /> :  <SignInPage />}  />
        <Route path = "/register" element={isAuth ? <Navigate to="/" replace /> :  <SignUpPage />} />
      </Route>
    </Routes>
  );
};

export default App;