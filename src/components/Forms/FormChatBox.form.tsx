// import './ChatBoxForm.css';

import { useParams } from "react-router-dom";
import { useInput } from "../../hooks";
import useMessenger from "../../hooks/useMessenger";
import { Button, Input } from "../ui";
import SendPlaneLineIcon from "remixicon-react/SendPlaneFillIcon";


const FormChatBox = () => {

  const [bindValue, value, restValue] = useInput('');
  const { chatId }: any = useParams();

  const { sendMessage } = useMessenger();

  const formSubmit = (e: any) => {
    e.preventDefault();

    if (value.trim().length !== 0) {
      sendMessage(chatId, value); 
      restValue();
    }
  };

  return (
    <form
      className="flex align-center w-100 mt-1"
      onSubmit={formSubmit}
    >
      <Input
        variant='primary'
        placeholder="Send message"
        className="mr-2"
        {...bindValue}
        onKeyPress={ (e: any) => {
          if (e.key === 'Enter' && value.trim().length !== 0) {
            sendMessage(chatId, value);
            restValue();
          }
        }}
      />
      <Button
        variant="primary"
        className="flex justify-center align-center p-2"
        type='submit'
      >
        <SendPlaneLineIcon/>
      </Button>
    </form>
  );
};

export default FormChatBox;