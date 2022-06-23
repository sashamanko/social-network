// import './Login.css';

import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { FormSignUp } from "..";
import { setUser } from "../../redux/user/slice";
import Form from "./Form.component";

const Register = () => {
  const dispatch = useDispatch();
  const auth: any = getAuth();

  const handleRegister = (displayName: any, email: any, password: any) => {
    
    createUserWithEmailAndPassword(auth, email, password)
      .then(({user}: any) =>{
        
        updateProfile(auth.currentUser, {
          displayName,
        }).then(console.log).catch(error => console.log(error, 'da oshibka'));

        dispatch(setUser({email: user.email, displayName: user.displayName}));
      })
      .catch(() => alert('This user registred'));
  };
  
  return (
    <FormSignUp
      handleClick={handleRegister}
    >

    </FormSignUp>
  );
};

export default Register;