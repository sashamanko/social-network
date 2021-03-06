// import './Settings.page.scss';

import { Outlet } from "react-router-dom";
import Aside from '../../components/User/Settings/Aside.component';

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