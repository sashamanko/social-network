import { useEffect, useState } from 'react';
import '../../../styles/components/subcomponent/ThemeBlock.subcomponent.scss';
import ButtonColor from './ButtonColor.subcomponent';

const ThemeBlock = ({ children }: any) => {

  

  return (
    <div className="ThemeBlock item-block w-30 mr-1">
      <h4 className="ml-2">Theme</h4>
      <div className="ThemeBlock__btn-block flex">
        {
          children
        }
      </div>
    </div>
  );
};

export default ThemeBlock;