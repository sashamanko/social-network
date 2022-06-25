// import './Form.css';

import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import { Button, Input } from "../ui";

const Form = ({title, handleClick}: any) => {
  const [bindEmail, email]: any = useInput('');
  const [bindPassword, password]: any = useInput('');

  const navigate = useNavigate();

  return (
    <form className="flex flex-col align-center w-100">
      <Input 
        type="email"
        placeholder='Email'
        view='primary'
        {...bindEmail}
      />
      <Input 
        forms=""
        type='password'
        placeholder='Password'
        className="my-1"
        view='primary'
        {...bindPassword}
      />
      <Button
        variant='primary'
        forms=""
        onClick={(e: any) => {
          e.preventDefault();
          handleClick(email, password);
          navigate('/', { replace: true });
        }}
        className='mb-1 w-50'
      >
        { title }
      </Button>
    </form>
  );
};

export default Form;