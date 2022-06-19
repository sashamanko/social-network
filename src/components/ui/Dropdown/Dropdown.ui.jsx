import './Dropdown.ui.scss';

import DropdownItem from "./DropdownItem";
import useOutside from '../../../hooks/useOutside';


const Dropdown = ({ className, controllerContent, options, ...props }) => {

  const {ref, isShow, setIsShow} = useOutside(false);

  return (
    <div className={ `Dropdown ${className}` } { ...props }>
      <button className={ `Dropdown__controller ${isShow ? 'active' : ''}`} onClick={() => setIsShow(!isShow)}>
        { controllerContent }
      </button>

      {isShow && 
      <nav ref={ ref } className='Dropdown__navbar'>
        <ul className='Dropdown__list'>
          {
            Object.keys(options).map( (item, id) => {
              return <DropdownItem key={id} options={ options[item] }/>;
            })
          }
        </ul>
      </nav>}

    </div>
  );
};

export default Dropdown;