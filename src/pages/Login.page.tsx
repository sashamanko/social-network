// import './LoginPage.css';

import { Link } from "react-router-dom";
import Login from "../components/Form/Login.component";

const LoginPage = () => {
  return (
    <>
      <Login />

      <p>or <Link to='/register'>Register</Link></p>
    </>
  );
};

export default LoginPage;