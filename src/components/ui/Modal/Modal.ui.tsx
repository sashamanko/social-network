// import './Modal.css';

import { useRef } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import animate from "../../../utils/Animate/components/anim";

const fadeTop = {
  transition: {
    duration: 300,
  },
  initial: {
    opacity: 0,
    transform: 'translateY(-20px)',
  },
  animate: {
    opacity: [1],
    transform: ['translateY(0)']
  },
  exit: {
    opacity: 0,
    transform: 'translateY(-20px)',
  },
};

const fade = {
  transition: {
    duration: 300,
  },
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: [1],
  },
  exit: {
    opacity: 0,
  },
};

const Modal = ({ isVisible, setIsVisible, children }: any) => {

  return (
    <>
      <animate.div
        isAnimate={isVisible}
        {...fade}
        aria-label='modal-wrapper'
        onClick={(e: any) => {
          
          if (e.target.ariaLabel === 'modal-wrapper') {
            setIsVisible(false);
          }
        }}
        className="fixed flex align-center justify-center w-100 h-100"
        style={{
          background: '#00000060',
          top: 0,
          left: 0,
        }}    
      >
        <animate.div
          {...fadeTop}
          className="rounded"
          style={{
            background: 'var(--main)',
            padding: '2px 0',
          }}
        >
          <animate.div
            className="item-block"
            {...fadeTop}
          >
            <button onClick={() => setIsVisible(false)}>X</button>
            { children }
          </animate.div>
        </animate.div>
      </animate.div>
    </>
  );
};

export default Modal;