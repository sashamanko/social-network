// import './Login.css';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../redux/user/asyncActions";
// import { setUser } from "../../redux/user/slice";
import Form from "./Form.component";

const Login = () => {
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
    <Form
      title='Sign in'
      handleClick={handleLogin}
    >

    </Form>
  );
};

export default Login;