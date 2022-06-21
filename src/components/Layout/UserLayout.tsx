// Imports | React router
// __________________________________________________
import { Navigate, Outlet } from "react-router-dom";

// Imports | Components
// __________________________________________________
import { Header } from "..";
import { useAuth } from "../../hooks";
import { SignInOrSignUpPage } from "../../pages";

// SCSS | My
// __________________________________________________
// import './Layout.scss';

const UserLayout = () => {

  const {isAuth} = useAuth();

  return (
    <>
      <Header/>
      
      <main className="container">
        <Outlet/>
      </main>
    </>
  );
};

export default UserLayout;