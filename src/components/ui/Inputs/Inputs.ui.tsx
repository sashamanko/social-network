// Imports | Module classes
// __________________________________________________
import classes from './Inputs.ui.module.scss';

const Input = ({ view, className = '', ...props }: any) => {

  const { Input, Primary } = classes;
  const classList = [ Input, ];
  const viewList = {
    'primary': Primary,
    // 'secondary': Secondary,
  };

  // * Object.keys() - Трансформация обэкт в список с ключами обэкта
  ((Object.keys(viewList)) as (keyof typeof viewList)[] ).find(elem => elem === view && classList.push(viewList[elem]));

  return (
    <input className={ classList.join(' ') + ` ${classList}` } {...props} />
  );
};

export default Input;