// Imports | React router
// __________________________________________________
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

// Imports | Components
// __________________________________________________
import Header from "../Header/Header.component";
import { useAuth } from "../../hooks";
import Preloader from "../Preloader/Preloader.component";
import { Aside, ContextMenu, Sidebar } from "../ui";

// Imports | Remix icons
// __________________________________________________
import UserLineIcon from 'remixicon-react/UserLineIcon';
import File3LineIcon from 'remixicon-react/FileList2LineIcon';
import MessengerLineIcon from 'remixicon-react/MessengerLineIcon';

const UserLayout = () => {

  const {isAuth, status} = useAuth();

  const { id } = useSelector((state: any) => state.user);

  const sidebarItems = [
    {to: `/${id}`, text: 'Profile', icon: <UserLineIcon className="mr-5"/>},
    {to: `/`, text: 'News', icon: <File3LineIcon className="mr-5"/>},
    {to: '/messenger', text: 'Messenger', icon: <MessengerLineIcon className="mr-5"/>},
  ];

  return (
    <>
      <Header/>
      
      <main className="container flex pt-1 ">
        { status === 1 &&
          <>
            <Outlet />
            <Aside
              className='ml-1'
            >
              {
                sidebarItems.map((item) => {
                  return (<Sidebar.HomeItem key={item.to} to={item.to}>
                    {item.icon}{item.text}
                  </Sidebar.HomeItem>);
                })
              }
            </Aside>
          </>
        }
        { status === 0 &&
          <Preloader/>
        }
      </main>

      <ContextMenu />
    </>
  );
};

export default UserLayout;