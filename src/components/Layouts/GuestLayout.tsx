// Imports | React router
// __________________________________________________
import { Outlet } from "react-router-dom";

// Imports | Components
// __________________________________________________
import Header from "../Header/Header.component";

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