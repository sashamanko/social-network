// import './Modal.css';

import { useNavigate, useParams } from "react-router-dom";
import animate from '../../../utils/Animate/components/Animated/Animated';
import CloseLineIcon from 'remixicon-react/CloseLineIcon';


const RouterModal = ({ children }: any) => {

  const navigate = useNavigate();
  const { profile } = useParams();

  return (
    <>
      <animate.div
        isAnimate={true}
        variant='Fade/Fade'
        aria-label='modal-wrapper'
        onClick={(e: any) => {
          
          if (e.target.ariaLabel === 'modal-wrapper') {
            navigate(`/${profile}`);
          }
        }}
        className="fixed flex align-center justify-center w-100 h-100"
        style={{
          background: '#00000060',
          top: 0,
          left: 0,
        }}    
      >
        <animate.div
          variant='Fade/FadeTop'
          className="rounded"
          style={{
            background: 'var(--main)',
            padding: '2px 0',
          }}
        >
          <animate.div
            className="item-block flex flex-col"
            variant='Fade/FadeTop'
          >
            <button
              className="ml-auto"
              onClick={() => navigate(`/${profile}`)}>
              <CloseLineIcon />
            </button>
            { children }
          </animate.div>
        </animate.div>
      </animate.div>
    </>
  );
};

export default RouterModal;