// import './NewMessage.css';
import { useState } from "react";
import MessengerLineIcon from "remixicon-react/MessengerLineIcon";
import { useAuth } from "../../../hooks";
import useMessenger from "../../../hooks/useMessenger";
import { Button } from "../../ui";
import Modal from "../../ui/Modal/Modal.ui";

const NewMessage = () => {

  const [modalIsShow, setModalIsShow] = useState(false);
  const { followers } = useAuth();
  const { newChat } = useMessenger();

  return (
    <>
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
            onClick={() => {
              setModalIsShow(true);
            }}
          >
            Send message
          </Button>
        </div>
      </div>

      <Modal isVisible={modalIsShow} setIsVisible={setModalIsShow}>
        <ul className="list-none" style={{minWidth: 250}}>
          {
            followers.map((doc: any, index: number) => {
              return (
                <li className={`w-100 ${index !== 0 ? 'mt-2' : ''}`}>
                  <span className="flex align-center">
                    <img src="https://fakeimg.pl/150x150/" alt="" className="rounded-fill mr-2" style={{width: 44}}/>
                    <span>
                      {
                        doc.data().displayName
                      }
                    </span>
                    <Button
                      variant='primary'
                      size='lg'
                      className="ml-auto"
                      onClick={() => newChat(doc.data())}
                    >
                      Write
                    </Button>
                  </span>
                </li>
              );
            })
          }
        </ul>
      </Modal>
    </>
  );
};

export default NewMessage;