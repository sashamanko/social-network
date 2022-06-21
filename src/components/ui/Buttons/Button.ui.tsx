// Imports | Module classes
// __________________________________________________
import classes from "./Button.ui.module.scss";

interface IButton {
  variant?: '' | 'primary' | 'secondary';
  className?: string;
  children: any;
  [key: string]: any;
} 

const Button = ({ variant = '', className, children, ...props }: IButton) => {

  const classList = [ classes.btn, classes[variant]];

  return (
    <button className={ classList.join(' ') + ` ${className}`} { ...props } type='button' >
      { children }
    </button>
  );
};

export default Button;