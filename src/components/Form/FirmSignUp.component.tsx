// import './Form.css';

import { getAuth } from "firebase/auth";
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

  const auth = getAuth();

  const dispatch = useDispatch();

  return (
    <form className="flex flex-col align-center w-100">
      <Input 
        type="text"
        placeholder='Display Name'
        view='primary'
        {...bindDisplayName}
      />
      <Input 
        type="email"
        placeholder='Email'
        view='primary'
        className="my-1"
        {...bindEmail}
      />
      <Input 
        type='password'
        placeholder='Password'
        view='primary'
        {...bindPassword}
      />
      <Button
        variant='primary'
        onClick={(e: any) => {
          e.preventDefault();
          handleClick(displayName, email, password);
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