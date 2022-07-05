// import './Modal.css';

import { useRef } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useOutside } from "../../../hooks";

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
          top: 0,
          left: 0,
        }}    
      >
        <div className="item-block">
          <button onClick={() => navigate(`/${profile}`)}>X</button>
          { children }
        </div>
      </div>
    </>
  );
};

export default RouterModal;