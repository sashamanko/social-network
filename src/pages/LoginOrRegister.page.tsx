// import './LoginOrRegister.page.css';

import { Link } from "react-router-dom";
import '../styles/UI/Buttons.ui.scss';

const LoginOrRegisterPage = () => {
  return (
    <div style={{height: 'calc(100vh - 60px)'}} className='flex align-center justify-center'>
      <div style={{minWidth: '200px'}} className="item-block flex align-center flex-col">
        <h3 className="mb-2">Login</h3>
        <Link to='/login' style={{width: '100%', textAlign: 'center'}} className="Btn Primary mb-1">Login</Link>
        <Link to='/register' style={{width: '100%', textAlign: 'center'}} className="Btn Primary">Register</Link>
      </div>
    </div>
  );
};

export default LoginOrRegisterPage;