// import './LoginOrRegister.page.css';

import { Link } from "react-router-dom";
import '../styles/UI/Buttons.ui.scss';

const LoginOrRegisterPage = () => {
  return (
    <div style={{height: 'calc(100vh - 60px)'}} className='flex align-center justify-center'>
      <div style={{minWidth: '320px'}} className="item-block flex align-center flex-col">
        <h3 className="mb-2">Login</h3>
        <Link to='/login' style={{ textAlign: 'center'}} className="Btn Primary w-100 mb-1">Login</Link>
        <Link to='/register' style={{ textAlign: 'center'}} className="Btn Primary w-100">Register</Link>
      </div>
    </div>
  );
};

export default LoginOrRegisterPage;