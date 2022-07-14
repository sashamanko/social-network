// Imports | Module classes
// __________________________________________________
import classes from './Inputs.ui.module.scss';

const Input = ({ variant, className = '', ...props }: any) => {

  const { Input, Primary } = classes;
  const classList = [ Input, ];
  const variantList = {
    'primary': Primary,
  };

  // * Object.keys() - Трансформация обэкт в список с ключами обэкта
  ((Object.keys(variantList)) as (keyof typeof variantList)[] ).find(elem => elem === variant && classList.push(variantList[elem]));

  return (
    <input className={ classList.join(' ') + ` ${className}` } {...props} />
  );
};

export default Input;