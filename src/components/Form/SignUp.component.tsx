// import './Login.css';

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/userSlice";
import Form from "./Form.component";

const Register = () => {
  const dispatch = useDispatch();

  const handleRegister = (email: any, password: any) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({user}: any) =>{
        dispatch(setUser({email: user.email}));
      })
      .catch(() => alert('This user registred'));
  };
  
  return (
    <Form
      title='Sign up'
      handleClick={handleRegister}
    >

    </Form>
  );
};

export default Register;