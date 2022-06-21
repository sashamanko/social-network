import { Link } from 'react-router-dom';
import Register from '../components/Form/Register.component';
// import './Login.page.scss';

const SignUpPage = () => {
  return (
    <div style={{height: 'calc(100vh - 60px)'}} className="LoginPage flex align-center justify-center">
      
      <div style={{width: '320px'}} className="item-block flex align-center justify-center flex-col p-1">
        <Register />
        <p>Or <Link to='/login'>sign in</Link></p>
      </div>
    </div>
  );
};

export default SignUpPage;