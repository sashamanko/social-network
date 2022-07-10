const fadeTop = {
  transition: {
    duration: 300,
  },
  initial: {
    opacity: 0,
    transform: 'translateY(-20px)',
  },
  animate: {
    opacity: [1],
    transform: ['translateY(0)']
  },
  exit: {
    opacity: 0,
    transform: 'translateY(-20px)',
  },
};

const fade = {
  transition: {
    duration: 300,
  },
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: [1],
  },
  exit: {
    opacity: 0,
  },
};

export {
  fade,
  fadeTop,
};