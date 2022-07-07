// import './Modal.css';

import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

const RouterModal = ({ children }: any) => {

  const btnRef = useRef(null);
  const navigate = useNavigate();
  const { profile } = useParams();

  return (
    <>
      <div
        aria-label='modal-wrapper'
        onClick={(e: any) => {
          console.log(e);
          
          if (e.target.ariaLabel === 'modal-wrapper') {
            navigate(`/${profile}`);
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
            <button onClick={() => navigate(`/${profile}`)}>X</button>
            { children }
          </animate.div>
        </animate.div>
      </div>
    </>
  );
};

export default RouterModal;