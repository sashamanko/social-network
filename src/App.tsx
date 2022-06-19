// Imports | React router
// __________________________________________________
import { Navigate, Route, Routes } from 'react-router-dom';

// CSS | My
// __________________________________________________
import './styles/App.scss';

import { Layout, LoginLayout } from './components';
import { HomePage, LoginOrRegisterPage } from './pages';
import LoginPage from './pages/Login.page';
import RegisterPage from './pages/Register.page';
import useAuth from './hooks/useAuth';



const App = () => {
  const {isAuth} = useAuth();
  
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path="/" element={isAuth ? <HomePage /> : <LoginOrRegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={isAuth ? <Navigate to="/" replace /> :  <LoginPage />}  />
        <Route path = "/register" element={isAuth ? <Navigate to="/" replace /> :  <RegisterPage />} />
      </Route>
    </Routes>
  );
};

export default App;