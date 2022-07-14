// import './Modal.css';


import animate from '../../../utils/Animate/components/Animated/Animated';




const Modal = ({ isVisible, setIsVisible, children }: any) => {

  return (
    <>
      <animate.div
        isAnimate={isVisible}
        variant='Fade/Fade'
        aria-label='modal-wrapper'
        onClick={(e: any) => {
          
          if (e.target.ariaLabel === 'modal-wrapper') {
            setIsVisible(false);
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
            className="item-block"
            variant='Fade/FadeTop'
          >
            <button onClick={() => setIsVisible(false)}>X</button>
            { children }
          </animate.div>
        </animate.div>
      </animate.div>
    </>
  );
};

export default Modal;