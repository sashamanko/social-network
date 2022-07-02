// import './NewMessage.css';
import MessengerLineIcon from "remixicon-react/MessengerLineIcon";
import { Button } from "../../ui";

const NewMessage = () => {
  return (
    <div className="flex align-center justify-center w-100">
      <div className="item-block flex flex-col align-center">
        <MessengerLineIcon 
          style={{
            height: 100,
            width: 100,
          }}   
        />
        <h4>Your messenger</h4>
        <Button
          variant='primary'
          className="mt-3"
        >
          Send message
        </Button>
      </div>
    </div>
  );
};

export default NewMessage;