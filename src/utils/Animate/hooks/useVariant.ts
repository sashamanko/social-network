import { AnimationStore } from "../components/AnimationStore/AnimationStore";

const useVariant = (variant: undefined | string | object | any) => {
  if (typeof variant !== 'undefined' && typeof variant === 'string') {
    const variantArray = variant.split('/');

    const transition = AnimationStore[variantArray[0]][variantArray[1]].transition;
    const initial = AnimationStore[variantArray[0]][variantArray[1]].initial;
    const animate = AnimationStore[variantArray[0]][variantArray[1]].animate;
    const exit = AnimationStore[variantArray[0]][variantArray[1]].exit;

    return {
      transition,
      initial,
      animate,
      exit,
    };
  } else if (typeof variant === 'object') {
    const transition = variant.transition;
    const initial = variant.initial;
    const animate = variant.animate;
    const exit = variant.exit;

    return {
      transition,
      initial,
      animate,
      exit,
    };
  }
};

export default useVariant;