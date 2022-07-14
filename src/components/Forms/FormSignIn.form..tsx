// import './Form.css';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import { fetchUser } from "../../redux/user/asyncActions";
import { Button, Input } from "../ui";
import animate from '../../utils/Animate/components/Animated/Animated';
import { useState } from "react";

const FormSignIn = () => {
  const [bindEmail, email]: any = useInput('');
  const [bindPassword, password]: any = useInput('');

  const [isInvalidUser, setIsInvalidUser] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  
  const handleLogin = (email: any, password: any) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({user}: any) => {
        dispatch(fetchUser(user));
        setTimeout(() => {
          navigate('/', { replace: true });
        }, 200);
      })
      .catch((err) => {
        console.log(err);
        
        setIsInvalidUser(true);
      });
  };

  return (
    <form className="flex flex-col align-center w-100">
      <div className="flex flex-col w-100">
        <Input 
          type="email"
          placeholder='Email'
          variant='primary'
          {...bindEmail}
        />
        <animate.div
          isAnimate={isInvalidUser}
          style={{
            color: '#ff4444',
          }}
          variant='Fade/Fade'
          className='ml-2'
        >
          Invalid user
        </animate.div>
      </div>
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

        }}
        className='mb-1 w-50'
      >
        Sign In
      </Button>
    </form>
  );
};

export default FormSignIn;