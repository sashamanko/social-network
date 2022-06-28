// import './Settings.page.scss';

import { NavLink, Outlet, useHref, useLocation, useNavigate } from "react-router-dom";
import { Aside } from '../../components/User';

const SettingsPage = () => {

  const { pathname } = useLocation();

  return (
    <div className="flex mt-1">

      <div className="w-100">
        <Outlet />
      </div>
      
      <Aside />
    </div>
  );
};

export default SettingsPage;