export const pageAnim = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: { opacity: 0, transition: { duration: 0.1 } },
};

export const titleAnim = {
  hidden: { y: 200 },
  show: { y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { ease: "easeOut", duration: 0.75 } },
};

export const photoAnim = {
  hidden: { scale: 1.2, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.75 },
  },
};

export const lineAnim = {
  hidden: { width: "0%" },
  show: { width: "100%", transition: { duration: 1 } },
};

export const sliderContainer = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, ease: "easeOut" } },
};

export const scrollReveal = {
  hidden: {
    opacity: 0,
    x: "-5%",
    transition: { ease: "easeOut", duration: 0.5 },
  },
  show: { opacity: 1, x: "0%", transition: { ease: "easeOut", duration: 0.5 } },
};

export const scrollInto = {
  hidden: {
    opacity: 0,
    width: "120%",
    transition: { ease: "easeOut", duration: 0.75 },
  },
  show: {
    opacity: 1,
    width: "100%",
    transition: { ease: "easeOut", duration: 0.75 },
  },
};
