// Imports | React router
// __________________________________________________
import { Navigate, Outlet } from "react-router-dom";

// Imports | Components
// __________________________________________________
import Header from "../Header/Header.component";
import { useAuth } from "../../hooks";

const GuestLayout = () => {

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