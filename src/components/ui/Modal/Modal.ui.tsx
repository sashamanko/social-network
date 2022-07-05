// import './Modal.css';

import { useRef } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useOutside } from "../../../hooks";

const Modal = ({ isVisible, setIsVisible, children }: any) => {

  const btnRef = useRef(null);
  const navigate = useNavigate();
  const { profile } = useParams();

  return (
    <>
      { isVisible &&
        <div
          aria-label='modal-wrapper'
          onClick={(e: any) => {
            
            if (e.target.ariaLabel === 'modal-wrapper') {
              setIsVisible(false);
            }
          }}
          className="fixed flex align-center justify-center w-100 h-100"
          style={{
            top: 0,
            left: 0,
          }}    
        >
          <div className="item-block">
            <button onClick={() => setIsVisible(false)}>X</button>
            { children }
          </div>
        </div>
      }
    </>
  );
};

export default Modal;