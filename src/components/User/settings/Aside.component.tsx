import { NavLink } from 'react-router-dom';
import '../../../styles/components/User/settings/Aside.component.scss';
import UserLineIcon from "remixicon-react/UserLineIcon";
import PaletteLineIcon from "remixicon-react/PaletteLineIcon";

const Aside = () => {

  const menuItems: any = [
    {label: 'Profile', href: 'profile', icon: <UserLineIcon className='mr-4'/>, end: true},
    {label: 'Decor', href: 'decor', icon: <PaletteLineIcon className='mr-4'/>},
  ];

  return (
    <aside className="mr-1">
      <ul className="list-none">
        {
          menuItems.map((item: any) => {
            return (
              <li key={item.label} className='Aside__menu__item flex '>
                <NavLink
                  to={ item.href }
                  className='flex item-block w-100 font-600'
                  end={item.end}
                >
                  { item.icon }
                  { item.label }
                </NavLink>
              </li>
            );
          })
        }
      </ul>
    </aside>
  );
};

export default Aside;