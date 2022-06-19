// Imports | React router
// __________________________________________________
import { Outlet } from "react-router-dom";

// Imports | Components
// __________________________________________________

// SCSS | My
// __________________________________________________
// import './Layout.scss';

const LoginLayout = () => {
  return (
    <>
      <main className="container">
        <h1>LoginLayout</h1>
        <Outlet/>
      </main>
    </>
  );
};

export default LoginLayout;