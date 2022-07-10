import { messageItem, messengerSidebarItem } from "./ContextMenuFunctions";

const ContextMenuItems: any = {
  myMessage: [
    {label: 'Copy', onClick: messageItem().copyMessage},
    'separator',
    {label: 'Delete message', onClick: messageItem().delMessage},
  ],
  otherMessage: [
    {label: 'Copy', onClick: messageItem().copyMessage},
  ],

  messengerSidebarItem: [
    {label: 'Open chat in new tab', onClick: messengerSidebarItem().openLinkInNewTab},
    'separator',
    {label: 'Visit user', onClick: messengerSidebarItem().visitUser},
    {label: 'Delete chat', onClick: messengerSidebarItem().delChat},
  ],
};

export default ContextMenuItems;