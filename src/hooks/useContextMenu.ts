import { useContext } from "react";
import { ContexMenuContext } from "../hoc/ContextMenuProvider.provider";

const useContextMenu = () => {
  return useContext(ContexMenuContext);
};

export default useContextMenu;