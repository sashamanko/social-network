// import './Form.css';

import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import { fetchAddUser, fetchUser } from "../../redux/user/asyncActions";
import { Button, Input } from "../ui";
import animate from '../../utils/Animate/components/Animated/Animated';
import { useState } from "react";

const FormSignUp = () => {
  const [bindDisplayName, displayName]: any = useInput('');
  const [bindEmail, email]: any = useInput('');
  const [bindPassword, password]: any = useInput('');
  const navigate = useNavigate();

  const [isInvalidUser, setIsInvalidUser] = useState(false);


  const dispatch = useDispatch();
  const auth: any = getAuth();

  const handleRegister = async (displayName: any, email: any, password: any) => {

    createUserWithEmailAndPassword(auth, email, password)
      .then(({user}: any) =>{

        updateProfile(auth.currentUser, {
          displayName,
        }).then(console.log).catch(error => console.log(error, 'da oshibka'));
        dispatch(fetchAddUser({ displayName, email }));
        dispatch(fetchUser(user));

        setTimeout(() => {
          navigate('/');
        }, 200);
      })
      .catch(() => {
        setIsInvalidUser(true);
      });
  };

  return (
    <form className="flex flex-col align-center w-100">
      <div className="flex flex-col w-100">
        <Input 
          type="text"
          placeholder='Display Name'
          variant='primary'
          {...bindDisplayName}
        />

        <animate.div
          isAnimate={isInvalidUser}
          style={{
            color: '#ff4444',
          }}
          variant='Fade/Fade'
          className='ml-2'
        >
          This user registred
        </animate.div>
      </div>
      <Input 
        type="email"
        placeholder='Email'
        variant='primary'
        className="my-1"
        {...bindEmail}
      />
      <Input 
        type='password'
        placeholder='Password'
        variant='primary'
        {...bindPassword}
      />
      <Button
        variant='primary'
        onClick={(e: any) => {
          e.preventDefault();
          handleRegister(displayName, email, password);
        }}
        className='my-1 w-50'
      >
        Sign Up
      </Button>
    </form>
  );
};

export default FormSignUp;


