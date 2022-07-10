// import './Form.css';

import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import { fetchAddUser, fetchUser } from "../../redux/user/asyncActions";
import { Button, Input } from "../ui";

const FormSignUp = ({handleClick}: any) => {
  const [bindDisplayName, displayName]: any = useInput('');
  const [bindEmail, email]: any = useInput('');
  const [bindPassword, password]: any = useInput('');
  const navigate = useNavigate();

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
      })
      .catch(() => alert('This user registred'));
  };

  return (
    <form className="flex flex-col align-center w-100">
      <Input 
        type="text"
        placeholder='Display Name'
        variant='primary'
        {...bindDisplayName}
      />
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
          navigate('/');
        }}
        className='my-1 w-50'
      >
        Sign Up
      </Button>
    </form>
  );
};

export default FormSignUp;