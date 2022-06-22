import './Dropdown.ui.scss';

import DropdownItem from "./DropdownItem";
import { useOutside } from '../../../hooks';
import { useRef } from 'react';


const Dropdown = ({ className, options, children, ...props }) => {

  const btnRef = useRef(null);
  const {outsideRef, isShow, setIsShow} = useOutside(false, btnRef);

  return (
    <div className={ `Dropdown ${className}` } { ...props }>
      <button
        ref={btnRef}
        className={ `Dropdown__controller ${isShow ? 'active' : ''}`}
        onClick={() => setIsShow(!isShow)}
      >
        { children }
      </button>

      {isShow && 
      <nav ref={ outsideRef } className='Dropdown__navbar'>
        <ul className='Dropdown__list'>
          {
            Object.keys(options).map( (item, id) => <DropdownItem key={id} options={ options[item] } />)
          }
        </ul>
      </nav>}

    </div>
  );
};

export default Dropdown;