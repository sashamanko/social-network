import './ContentMenu.ui.scss';
import { useEffect, useRef, useState } from 'react';
import ContextMenuItems from '../../../database/ContextMenu/ContextMenuItems';
import useContextMenu from '../../../hooks/useContextMenu';
import animate from '../../../utils/Animate/components/Animated/Animated';

const ContextMenu = () => {
  
  const [coord, setCoord] = useState({});
  const outsideRef: any = useRef(null);
  const {contextMenu, setContextMenu, contextMenuData, setContextMenuData}: any = useContextMenu();
  

  const handleClickOutside = (e: any) => {
    
    if (outsideRef?.current && !outsideRef?.current?.contains(e.target)) {

        
      contextMenuData.isRender && setContextMenuData({});
    }
  };
  
  useEffect(() => {    

    if (contextMenuData.mouseEvent?.view?.innerHeight - contextMenuData.mouseEvent?.clientY <= 250) {
      setCoord({
        bottom: contextMenuData.mouseEvent?.view?.innerHeight - contextMenuData.mouseEvent?.clientY,
        left: contextMenuData.mouseEvent?.clientX,
      });
    } else {
      setCoord({
        top: contextMenuData.mouseEvent?.clientY,
        left: contextMenuData.mouseEvent?.clientX,
      });
    }
    
    
  }, [contextMenuData.mouseEvent]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return (
    <animate.div
      isAnimate={contextMenuData.isRender !== undefined}
      transition={{
        duration: .01,
      }}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: [1],
      }}
      exit={{
        opacity: 0,
      }}
      style={{
        minWidth: 150,
        background: 'var(--main)',
        padding: '2px 0',
        ...coord
      }}
      className='absolute rounded'
    >
      <ul
        ref={outsideRef}
        className='bg-block list-none rounded'
      >
        {
          ContextMenuItems[contextMenu]?.map((elem: any) => {
            return (
              <>
                { typeof elem === 'object' &&
                  <li className="ContextMenu__item px-2 py-3">
                    <button
                      className="font-xl font-500 w-100 text-left"
                      onClick={ () => {
                        elem.onClick({...contextMenuData});
                        setContextMenuData({});
                      }}
                    >
                      { elem.label }
                    </button>
                    
                  </li>
                }
                { typeof elem === 'string' && elem.toUpperCase() === 'SEPARATOR' &&
                  <li className="px-2 py-3">
                    <hr />
                  </li>
                }
              </>
            );
          })
        }
      </ul>

    </animate.div>
  );
};

export default ContextMenu;