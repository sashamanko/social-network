// import './Form.css';

import useInput from "../../hooks/useInput";
import { Button } from "../ui";

const Form = ({title, handleClick}: any) => {
  const [bindEmail, email]: any = useInput('');
  const [bindPassword, password]: any = useInput('');

  return (
    <form className="flex flex-col">
      <input 
        type="email"
        {...bindEmail}
        placeholder='Email'
        className="px-2 py-2"
      />
      <input 
        type='password'
        {...bindPassword}
        placeholder='Password'
        className="px-2 py-2 my-1"
      />
      <Button
        type='primary'
        onClick={(e: any) => {
          e.preventDefault();
          handleClick(email, password);
        }}
      >
        { title }
      </Button>
    </form>
  );
};

export default Form;