// Imports | React router
// __________________________________________________
import { Navigate, Route, Routes } from 'react-router-dom';

// CSS | My
// __________________________________________________
import './styles/App.scss';

import { Layout } from './components';
import { HomePage } from './pages';
import LoginPage from './pages/Login.page';
import RegisterPage from './pages/Register.page';
import useIsAutch from './hooks/useIsAuth';



const App = () => {
  const isAuth = useIsAutch();
  
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route  path="/" element={isAuth ? <HomePage /> : <RegisterPage />} />
        <Route path="/login" element={isAuth ? <Navigate to="/" replace /> :  <LoginPage />}  />
        <Route path = "/register" element={isAuth ? <Navigate to="/" replace /> :  <RegisterPage />} />
      </Route>
    </Routes>
  );
};

export default App;