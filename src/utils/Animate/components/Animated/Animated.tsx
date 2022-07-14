import { useEffect, useState } from "react";
import { useKeyFrames, useVariant } from "../../hooks";
import { DefaultValue } from "../AnimationStore/AnimationStore";

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
  variant?: 'Fade/Fade' | 'Fade/FadeTop' | 'Fade/FadeRight' | 'Fade/FadeRight' | 'Fade/FadeDown' | 'Fade/FadeLeft';
  whileHover?: any;
  [key: string]: any;
}

const Div = ({...props}: IDiv) => {

  props = { ...props, ...useVariant(props.variant)};
  
  
  const { isAnimate=true, transition, initial, whileHover, animate, exit, children } = props;  
  
  const [animStyle, setAnimStyle] = useState<object>(initial);
  const [eventStyle, setEventStyle] = useState<object>({});
  const [frame, setFrame] = useState<number>(0);
  const [isRender, setIsRender] = useState(true);

  const keyFrames = useKeyFrames(animate);
  
  useEffect(() => {
    
    
    const int = setInterval(fn, transition?.duration ? transition.duration : DefaultValue.transition.duration);
    
    
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
        }, transition?.duration ? transition.duration : DefaultValue.transition.duration);
      }, transition?.delay ? transition.delay : DefaultValue.transition.delay);
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
            transitionDuration:  `${transition?.duration ? transition.duration / 1000 : DefaultValue.transition.duration}s`,
            transitionDelay:  `${transition?.delay ? transition.delay / 1000 : DefaultValue.transition.delay}s`,
            transitionProperty:  transition?.property ? transition.property : DefaultValue.transition.property,
            transitionTimingFunction:  transition?.timingFunction ? transition.timingFunction : DefaultValue.transition.timingFunction,
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

const Li = ({...props}: IDiv) => {

  props = { ...props, ...useVariant(props.variant)};
  
  const { isAnimate=true, transition, initial, whileHover, animate, exit, children } = props;  
  
  const [animStyle, setAnimStyle] = useState<object>(initial);
  const [eventStyle, setEventStyle] = useState<object>({});
  const [frame, setFrame] = useState<number>(0);
  const [isRender, setIsRender] = useState(true);

  const keyFrames = useKeyFrames(animate);
  
  useEffect(() => {
    
    
    const int = setInterval(fn, transition?.duration ? transition.duration : DefaultValue.transition.duration);
    
    
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
        }, transition?.duration ? transition.duration : DefaultValue.transition.duration);
      }, transition?.delay ? transition.delay : DefaultValue.transition.delay);
    } else {
      setIsRender(true);
      setAnimStyle(initial);
      setFrame(0);
    } 
  }, [isAnimate]);


  return (
    <>
      { isRender &&
        <li
          onMouseEnter={() => {
            setEventStyle(whileHover);
          }}
          onMouseLeave={() => {
            setEventStyle({});
          }}
          {...props}
          style={{
            transitionDuration:  `${transition?.duration ? transition.duration / 1000 : DefaultValue.transition.duration}s`,
            transitionDelay:  `${transition?.delay ? transition.delay / 1000 : DefaultValue.transition.delay}s`,
            transitionProperty:  transition?.property ? transition.property : DefaultValue.transition.property,
            transitionTimingFunction:  transition?.timingFunction ? transition.timingFunction : DefaultValue.transition.timingFunction,
            ...animStyle,
            ...props?.style,
            ...eventStyle
          }} >
          { children }
        </li>
      }
    </>
  );
};

const animated = {
  div: Div,
  li: Li,
};

export default animated;