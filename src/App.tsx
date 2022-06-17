// Imports | React router
// __________________________________________________
import { Route, Routes } from 'react-router-dom';

// CSS | My
// __________________________________________________
import './styles/App.scss';

import { useRef, useState } from "react";

import { signup, login, logout, useAuth } from "./firebase/firebase";
import { Layout } from './components';
import { HomePage } from './pages';

const App = () => {
  const [ loading, setLoading ] = useState(false);
  const currentUser: any = useAuth();

  const emailRef: any = useRef();
  const passwordRef: any = useRef();

  async function handleSignup() {
    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  return (
    <Routes>
      <Route path='' element={<Layout />}>
        <Route path='' element={<HomePage />}></Route>
      </Route>
    </Routes>
  );
};

export default App;