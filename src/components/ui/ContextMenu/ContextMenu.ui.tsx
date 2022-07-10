// import './ContentMenu.css';
import { useEffect, useRef, useState } from 'react';
import ContextMenuItems from '../../../database/ContextMenu/ContextMenuItems';
import useContextMenu from '../../../hooks/useContextMenu';
import animate from '../../../utils/Animate/components/anim';
import { fade } from '../../../utils/Animate/store/fade';

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
    
    setCoord({
      top: contextMenuData.mouseEvent?.clientY,
      left: contextMenuData.mouseEvent?.clientX,
    });
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
      {...fade}
      transition={{
        duration: 50,
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

              <li className="px-2 py-3">
                <button
                  className="font-xl font-500 w-100 text-left"
                  onClick={ () => {
                    elem.onClick({...contextMenuData});
                    setContextMenuData({});
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })
        }
      </ul>

    </animate.div>
  );
};

export default ContextMenu;