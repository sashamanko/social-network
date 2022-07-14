// Imports | Module classes
// __________________________________________________
import { useEffect, useRef, useState } from "react";
import classes from "./Button.ui.module.scss";

interface IButton {
  variant: '' | 'primary' | 'secondary';
  forms?: '' | 'iconAnimate';
  animate?: '' | 'slide-left' | 'slide-right';
  className?: string;
  textContent: string
  children: any;
  [key: string]: any;
} 

const ButtonCircle = ({ variant = '', forms='', animate='', className='', textContent='', children, ...props }: IButton): JSX.Element => {

  const classList = [ classes.btn, classes[variant], classes[forms], classes[animate]];  

  const spanRef: any = useRef(null);
  const btnRef: any = useRef(null);
  const [width, setWidth] = useState(36);

  useEffect(() => {
    setWidth(btnRef.current.offsetWidth);
  }, [btnRef]);
  
  return (
    <button 
      ref={btnRef} 
      className={ classList.join(' ') + ` ${className}`}
      style= {{
        width: width
      }}
      type='button'
      { ...props }
      onMouseEnter={() => {
        setWidth(width + spanRef.current.offsetWidth + 6);
      }}
      onMouseLeave={() => {
        
        setWidth(width - spanRef.current.offsetWidth - 6);
      }}
    >
      { animate === 'slide-left' &&
        <>
          <span ref={spanRef} >
            { textContent }
          </span>
          { children }
        </>
      }
      { animate === 'slide-right' &&
        <>
          { children }
          <span ref={spanRef} >
            { textContent }
          </span>
        </>
      }
    </button>
  );

};

export default ButtonCircle;









