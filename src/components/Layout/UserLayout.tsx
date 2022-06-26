// Imports | React router
// __________________________________________________
import { Navigate, Outlet } from "react-router-dom";

// Imports | Components
// __________________________________________________
import { Header } from "..";
import { useAuth } from "../../hooks";
import { SignInOrSignUpPage } from "../../pages";
import Preloader from "../Preloader/Preloader.component";

// SCSS | My
// __________________________________________________
// import './Layout.scss';

const UserLayout = () => {

  const {isAuth, status} = useAuth();

  return (
    <>
      <Header/>
      
      <main className="container">
        { status === 1 &&
          <Outlet/>
        }
        { status === 0 &&
          <Preloader/>
        }
      </main>
    </>
  );
};

export default UserLayout;