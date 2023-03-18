export const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { ease: "easeOut", duration: 0.5 } },
};

export const lineAnim = {
  hidden: { width: "0%" },
  show: { width: "100%", transition: { duration: 0.7 } },
};

export const pageAnim = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
  exit: { opacity: 0, transition: { duration: 0.1 } },
};

export const scrollReveal = {
  hidden: {
    opacity: 0,
    x: "-5%",
    transition: { ease: "easeOut", duration: 0.3 },
  },
  show: { opacity: 1, x: "0%", transition: { ease: "easeOut", duration: 0.3 } },
};

export const titleAnim = {
  hidden: { y: 200 },
  show: { y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};
