// Imports | React router
// __________________________________________________
import { Outlet } from "react-router-dom";

// Imports | Components
// __________________________________________________
import { Header } from "..";

// SCSS | My
// __________________________________________________
// import './Layout.scss';

const Layout = () => {
  return (
    <>
      <Header/>
      
      <main className="container">
        <Outlet/>
      </main>
    </>
  );
};

export default Layout;