// import './Login.css';

import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { FormSignUp } from "..";
import { fetchAddUser, fetchUser } from "../../redux/user/asyncActions";
import { db, getDocument } from "../../utils/firebase";
import Form from "./Form.component";

const Register = () => {
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
    <FormSignUp
      handleClick={handleRegister}
    >

    </FormSignUp>
  );
};

export default Register;