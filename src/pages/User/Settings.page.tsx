// import './Settings.page.scss';

import { Outlet, useLocation } from "react-router-dom";
import { Aside } from '../../components/ui';

const SettingsPage = () => {

  return (
    <div className="flex w-100">

      <Aside />

      <div className="w-100">
        <Outlet />
      </div>
      
    </div>
  );
};

export default SettingsPage;