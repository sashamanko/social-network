// import './Form.css';

import useInput from "../../hooks/useInput";

const Form = ({title, handleClick}: any) => {
  const [bindEmail, email]: any = useInput('');
  const [bindPassword, password]: any = useInput('');

  return (
    <form>
      <input 
        type="email"
        {...bindEmail}
        placeholder='Email'
      />
      <input 
        type='password'
        {...bindPassword}
        placeholder='Password'
      />
      <button
        onClick={(e: any) => {e.preventDefault(); handleClick(email, password);}}
      >
        { title }
      </button>
    </form>
  );
};

export default Form;