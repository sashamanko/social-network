import { Link } from 'react-router-dom';
import Register from '../components/Form/Register.component';
// import './RegisterPage.css';

const RegisterPage = () => {
  return (
    <>
      <Register />

      <p>or <Link to='/login'>Login</Link></p>
    </>
  );
};

export default RegisterPage;