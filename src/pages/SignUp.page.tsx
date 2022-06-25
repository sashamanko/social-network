import { Link } from 'react-router-dom';
import Register from '../components/Form/SignUp.component';
import '../styles/pages/SignUp.page.scss';

const SignUpPage = () => {
  return (
    <div className="SignUp flex align-center justify-center">
      
      <div className="SignUp__wrapper item-block flex align-center justify-center flex-col p-1">
        <Register />
        <p>Or <Link to='/login'>sign in</Link></p>
      </div>
    </div>
  );
};

export default SignUpPage;