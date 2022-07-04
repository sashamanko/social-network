import { useState, useEffect, useRef } from 'react';
import { IUseOutside } from '../types/hooks';

// Use 
// const {ref, isShow, setIsShow} = useOutside(false)
const useOutside = (initialIsVisible: boolean, ignoredRef: any): IUseOutside => {
  const [isShow, setIsShow] = useState(initialIsVisible);
  const outsideRef = useRef<HTMLElement>(null);

  const handleClickOutside = (e: any) => {
    if (outsideRef.current && !outsideRef.current.contains(e.target) && ignoredRef.current && !ignoredRef.current.contains(e.target)) {

      isShow && setIsShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });
  return { outsideRef, isShow, setIsShow };
};

export default useOutside;