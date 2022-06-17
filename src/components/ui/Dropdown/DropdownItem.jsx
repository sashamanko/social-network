// import './DropdownItem.css';

const DropdownItem = ({ options }) => {
  
  if (typeof options === 'object' && options.type.toLowerCase() === 'link') {
    return (
      <li className="Dropdown__list__item" role='menuitem'>
        <a href={ options.url }>{ options.label }</a>
      </li>
    );
  } else if (typeof options === 'string' && options.toLowerCase() === 'separator') {
    return (
      <li className="Dropdown__list__item" role='none'>
        <hr />
      </li>
    );
  }


};

export default DropdownItem;

// {
//    &&
//   <hr className="Dropdown__list__item__separator" />
// }