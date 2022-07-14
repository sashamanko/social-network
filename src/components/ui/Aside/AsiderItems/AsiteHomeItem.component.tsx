// Imports | React router
// __________________________________________________
import { NavLink } from "react-router-dom";

const AsideHomeItem = ({ to, children }: {to: string, children: any}): JSX.Element => {
  
  return (
    <li className="Aside__item flex">
      <NavLink className='Aside__item__link flex align-center item-block font-600 ' to={to}>
        {children}
      </NavLink>
    </li>
  );
};

export default AsideHomeItem;