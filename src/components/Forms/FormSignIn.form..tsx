// import './Form.css';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import { fetchUser } from "../../redux/user/asyncActions";
import { Button, Input } from "../ui";

const FormSignIn = () => {
  const [bindEmail, email]: any = useInput('');
  const [bindPassword, password]: any = useInput('');

  const navigate = useNavigate();

  const dispatch = useDispatch();
  
  const handleLogin = (email: any, password: any) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({user}: any) => {
        dispatch(fetchUser(user));
      })
      .catch(() => alert('Invalid user'));
  };

  return (
    <form className="flex flex-col align-center w-100">
      <Input 
        type="email"
        placeholder='Email'
        variant='primary'
        {...bindEmail}
      />
      <Input 
        forms=""
        type='password'
        placeholder='Password'
        className="my-1"
        variant='primary'
        {...bindPassword}
      />
      <Button
        variant='primary'
        forms=""
        onClick={(e: any) => {
          e.preventDefault();
          handleLogin(email, password);
          navigate('/', { replace: true });
        }}
        className='mb-1 w-50'
      >
        Sign In
      </Button>
    </form>
  );
};

export default FormSignIn;