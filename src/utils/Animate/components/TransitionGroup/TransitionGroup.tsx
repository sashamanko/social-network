// import './AnimatePresence.css';

import React, { Children, useEffect, useState } from "react";

const TransitionGroup = ({isVisible, children }: any) => {

  const [clone, setClone] = useState(Children.toArray(children));
  const newChildren: any = []; 

  React.Children.toArray(children).forEach((elem: any) => {
    const i = React.cloneElement(elem, {
      isAnimate: false
    });
    
    newChildren.push(i);
  });
  
  useEffect(() => {

    if (!isVisible) {
      setClone(newChildren);
    } else { 
      setClone(React.Children.toArray(children));
    }
  }, [isVisible]);

  return (
    <>
      {
        clone.map((childe: any) => childe)
      }
    </>
  );
};

export default TransitionGroup;