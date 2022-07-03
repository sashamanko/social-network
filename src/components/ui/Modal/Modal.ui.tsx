// import './Modal.css';

import { Outlet } from "react-router-dom";

const Modal = ({ children }: any) => {
  return (
    <div
      className="fixed flex align-center justify-center w-100 h-100"
      style={{
        top: 0,
        left: 0,
      }}    
    >
      <div className="item-block">
        { children }
      </div>
    </div>
  );
};

export default Modal;