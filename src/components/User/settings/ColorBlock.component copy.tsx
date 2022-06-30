import { Children, useEffect, useState } from 'react';
import '../../../styles/components/subcomponent/ThemeBlock.subcomponent.scss';
import ButtonColor from './ButtonColor.subcomponent';

const ColorBlock = ({ children }: any) => {

  

  return (
    <div className="ThemeBlock item-block w-70">
      <h4 className="ml-2">Color</h4>
      <div className="ThemeBlock__btn-block flex">
        {
          children
        }
      </div>
    </div>
  );
};

export default ColorBlock;