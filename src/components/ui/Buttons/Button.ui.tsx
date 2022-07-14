// Imports | Module classes
// __________________________________________________
import classes from "./Button.ui.module.scss";

interface IButton {
  variant: '' | 'primary' | 'secondary';
  forms?: '' | 'iconAnimate';
  animate?: '' | 'slide-left';
  className?: string;
  children: any;
  [key: string]: any;
} 

const Button = ({ variant = '', className='', size='', children, ...props }: IButton) => {

  const classList = [ classes.btn, classes[variant], classes[size]];

  return (
    <button className={ classList.join(' ') + ` ${className}`} { ...props }>
      {
        children
      }
    </button>
  );

};

export default Button;