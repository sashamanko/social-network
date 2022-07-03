// Imports | Module classes
// __________________________________________________
import { useEffect, useRef, useState } from "react";
import classes from "./Button.ui.module.scss";

interface IButton {
  variant: '' | 'primary' | 'secondary';
  forms?: '' | 'iconAnimate';
  animate?: '' | 'slide-left';
  className?: string;
  children: any;
  [key: string]: any;
} 

const Button = ({ variant = '', forms='', animate='', className='', textContent='', children, ...props }: IButton) => {

  const classList = [ classes.btn, classes[variant], classes[forms], classes[animate]];

  return (
    <button className={ classList.join(' ') + ` ${className}`} { ...props } type='button' >
      {
        children
      }
    </button>
  );

};

export default Button;