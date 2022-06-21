// import './LoginOrRegister.page.css';

import { Link } from "react-router-dom";
import classes from '../components/ui/Buttons/Button.ui.module.scss';

const btnClass = `${classes.btn} ${classes.primary}`;

const SignInOrSignUpPage = () => {
  return (
    <div style={{height: 'calc(100vh - 60px)'}} className='flex align-center justify-center'>
      <div style={{minWidth: '320px'}} className="item-block flex align-center flex-col">
        <h3 className="mb-2">Login</h3>
        <Link to='/login' style={{ textAlign: 'center'}} className={btnClass + " w-100 mb-1"}>Sign in</Link>
        <Link to='/register' style={{ textAlign: 'center'}} className={btnClass + " w-100"}>Sign up</Link>
      </div>
    </div>
  );
};

export default SignInOrSignUpPage;