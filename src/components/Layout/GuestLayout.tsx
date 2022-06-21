// Imports | React router
// __________________________________________________
import { Navigate, Outlet } from "react-router-dom";

// Imports | Components
// __________________________________________________
import { Header } from "..";
import { useAuth } from "../../hooks";

// SCSS | My
// __________________________________________________
// import './Layout.scss';

const GuestLayout = () => {

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

export default GuestLayout;