import '../../styles/pages/SignUp.page.scss';
import { Link } from 'react-router-dom';
import { FormSignUp } from '../../components/Forms';

const SignUpPage = () => {
  return (
    <div className="SignUp flex align-center justify-center">
      
      <div className="SignUp__wrapper item-block flex align-center justify-center flex-col p-1">
        <FormSignUp />
        <p>Or <Link to='/login'>sign in</Link></p>
      </div>
    </div>
  );
};

export default SignUpPage;