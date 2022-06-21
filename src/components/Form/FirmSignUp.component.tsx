// import './Form.css';

import useInput from "../../hooks/useInput";
import { Button, Input } from "../ui";

const FormSignUp = ({handleClick}: any) => {
  const [bindDisplayName, displayName]: any = useInput('');
  const [bindEmail, email]: any = useInput('');
  const [bindPassword, password]: any = useInput('');

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
        {...bindEmail}
      />
      <Input 
        type='password'
        placeholder='Password'
        className="my-1"
        view='primary'
        {...bindPassword}
      />
      <Button
        variant='primary'
        onClick={(e: any) => {
          e.preventDefault();
          handleClick(displayName, email, password);
        }}
        className='my-1 w-50'
      >
        Sign Up
      </Button>
    </form>
  );
};

export default FormSignUp;