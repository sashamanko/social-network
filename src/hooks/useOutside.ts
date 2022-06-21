import { useState, useEffect, useRef } from 'react';

// Use 
// const {ref, isShow, setIsShow} = useOutside(false)
const useOutside = (initialIsVisible: boolean, ignoredRef: any) => {
  const [isShow, setIsShow] = useState(initialIsVisible);
  const ref = useRef<HTMLElement>(null);
  

  const handleClickOutside = (e: any) => {
    if (ref.current && !ref.current.contains(e.target) && ignoredRef.current && !ignoredRef.current.contains(e.target)) {

      isShow && setIsShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });
  return { ref, isShow, setIsShow };
};

export default useOutside;