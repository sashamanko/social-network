// import './Modal.css';

import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import animate from "../../../utils/Animate/components/anim";
import { fade, fadeTop } from "../../../utils/Animate/store/fade";

const RouterModal = ({ children }: any) => {

  const navigate = useNavigate();
  const { profile } = useParams();

  return (
    <>
      <animate.div
        isAnimate={true}
        {...fade}
        aria-label='modal-wrapper'
        onClick={(e: any) => {
          
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
      </animate.div>
    </>
  );
};

export default RouterModal;