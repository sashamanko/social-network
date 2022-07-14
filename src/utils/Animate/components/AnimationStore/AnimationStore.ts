const DefaultValue = {
  transition: {
    duration: 300,
    delay: 0,
    property: 'all',
    timingFunction: 'easy',
  },
};

const AnimationStore: any = {
  Fade: {
    // Fade/Fade
    Fade: {
      transition: DefaultValue.transition,
      initial: {
        opacity: 0,
      },
      animate: {
        opacity: [1],
      },
      exit: {
        opacity: 0,
      },
    },
    // Fade/FadeTop
    FadeTop: {
      transition: DefaultValue.transition,
      initial: {
        opacity: 0,
        transform: 'translateY(10px)'
      },
      animate: {
        opacity: [1],
        transform: ['translateY(0)']
      },
      exit: {
        opacity: 0,
        transform: 'translateY(10px)'
      }
    },
    // Fade/FadeRight
    FadeRight: {
      transition: DefaultValue.transition,
      initial: {
        opacity: 0,
        transform: 'translateX(10px)'
      },
      animate: {
        opacity: [1],
        transform: ['translateX(0)']
      },
      exit: {
        opacity: 0,
        transform: 'translateX(10px)'
      }
    },
    // Fade/FadeDown
    FadeDown: {
      transition: DefaultValue.transition,
      initial: {
        opacity: 0,
        transform: 'translateY(-10px)'
      },
      animate: {
        opacity: [1],
        transform: ['translateY(0)']
      },
      exit: {
        opacity: 0,
        transform: 'translateY(-10px)'
      }
    },
    // Fade/FadeLeft
    FadeLeft: {
      transition: DefaultValue.transition,
      initial: {
        opacity: 0,
        transform: 'translateX(10px)'
      },
      animate: {
        opacity: [1],
        transform: ['translateX(0)']
      },
      exit: {
        opacity: 0,
        transform: 'translateX(10px)'
      }
    },
    // Fade/FadeIn
    FadeIn: {
      transition: DefaultValue.transition,
      initial: {
        opacity: 0,
      },
      animate: {
        opacity: [1],
      },
    },
    // Fade/FadeInTop
    FadeInTop: {
      transition: DefaultValue.transition,
      initial: {
        opacity: 0,
        transform: 'translateY(10px)'
      },
      animate: {
        opacity: [1],
        transform: ['translateY(0)']
      },
    },
    // Fade/FadeInRight
    FadeInRight: {
      transition: DefaultValue.transition,
      initial: {
        opacity: 0,
        transform: 'translateX(10px)'
      },
      animate: {
        opacity: [1],
        transform: ['translateX(0)']
      },
    },
    // Fade/FadeInDown
    FadeInDown: {
      transition: DefaultValue.transition,
      initial: {
        opacity: 0,
        transform: 'translateY(-10px)'
      },
      animate: {
        opacity: [1],
        transform: ['translateY(0)']
      },
    },
    // Fade/FadeInLeft
    FadeInLeft: {
      transition: DefaultValue.transition,
      initial: {
        opacity: 0,
        transform: 'translateX(10px)'
      },
      animate: {
        opacity: [1],
        transform: ['translateX(0)']
      },
    },
  }
};

export { 
  DefaultValue,
  AnimationStore,
};