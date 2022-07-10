import '../../styles/pages/SignIn.page.scss';

import { Link } from "react-router-dom";
import { FormSignIn } from "../../components/Forms";

const SignInPage = () => {
  return (
    <div className="SignIn flex align-center justify-center">
      
      <div className="SignIn__wrapper item-block flex align-center justify-center flex-col p-1">
        <FormSignIn />

        <p>Or <Link to='/register'>sign up</Link></p>
      </div>

    </div>
  );
};

export default SignInPage;