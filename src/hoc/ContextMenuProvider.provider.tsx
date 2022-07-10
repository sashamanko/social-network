import { createContext, useState } from "react";

export const ContexMenuContext = createContext({});


const ContexMenuProvider = ({ children }: any) => {

  const [contextMenu, setContextMenu] = useState('');
  const [contextMenuData, setContextMenuData] = useState({});


  const contextMenuGlobalData = {
    contextMenu,
    setContextMenu,
    contextMenuData,
    setContextMenuData,
  };

  return (
    <ContexMenuContext.Provider value={ contextMenuGlobalData }>
      { children }
    </ContexMenuContext.Provider>
  );
};

export default ContexMenuProvider;