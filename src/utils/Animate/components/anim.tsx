import { useEffect, useState } from "react";
import { useKeyFrames } from "../hooks";

interface IDiv {
  isAnimate?: boolean;
  transition?: {
    duration?: number;
    delay?: number;
    property?: 'all' | string
    timingFunction?: 'easy' | string
  };
  initial?: any;
  animate?: any;
  exit?: any;
  style?: any;
  children?: any;
  whileHover?: any;
}

const Div = ({isAnimate=true, transition, initial, whileHover, animate, exit, children, ...props }: IDiv) => {

  const [animStyle, setAnimStyle] = useState<object>(initial);
  const [eventStyle, setEventStyle] = useState<object>({});
  const [frame, setFrame] = useState<number>(0);
  const [isRender, setIsRender] = useState(true);

  const keyFrames = useKeyFrames(animate);

  useEffect(() => {
    
    
    const int = setInterval(fn, transition?.duration ? transition.duration : 1000);
    
    
    function fn () {

      if (frame < keyFrames.length) {
        setAnimStyle(keyFrames[frame]);
        setFrame(frame + 1);
      } else if (frame >= keyFrames.length) {
      }
      
    }
    return () => {
      clearInterval(int);
    };
  }, [frame]);

  useEffect(() => {
    if (!isAnimate) {
      setAnimStyle(exit);
      setTimeout(() => {
        setTimeout(() => {
          setIsRender(false);
        }, transition?.duration ? transition.duration : 1000);
      }, transition?.delay ? transition.delay : 0);
    } else {
      setIsRender(true);
      setAnimStyle(initial);
      setFrame(0);
    } 
  }, [isAnimate]);


  return (
    <>
      { isRender &&
        <div
          onMouseEnter={() => {
            setEventStyle(whileHover);
          }}
          onMouseLeave={() => {
            setEventStyle({});
          }}
          {...props}
          style={{
            transitionDuration:  `${transition?.duration ? transition.duration / 1000 : 1}s`,
            transitionDelay:  `${transition?.delay ? transition.delay / 1000 : 0}s`,
            transitionProperty:  transition?.property ? transition.property : 'all',
            transitionTimingFunction:  transition?.timingFunction ? transition.timingFunction : 'ease',
            ...animStyle,
            ...props?.style,
            ...eventStyle
          }} >
          { children }
        </div>
      }
    </>
  );
};

const animated: any = {
  div: Div,
};


export default animated;