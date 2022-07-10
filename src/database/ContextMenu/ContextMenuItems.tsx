import { messageItem } from "./ContextMenuFunctions";

const ContextMenuItems: any = {
  messageItem: [
    {label: 'Delete', onClick: messageItem().delMessage},
  ]
};

export default ContextMenuItems;