// import './Login.page.scss';

import { Link } from "react-router-dom";
import Login from "../components/Form/SignIn.component";

const LoginPage = () => {
  return (
    <div style={{height: 'calc(100vh - 60px)'}} className="flex align-center justify-center">
      
      <div style={{width: '320px'}} className="item-block flex align-center justify-center flex-col p-1">
        <Login />

        <p>Or <Link to='/register'>sign up</Link></p>
      </div>

    </div>
  );
};

export default LoginPage;