// Animations
import React, { useRef } from "react";
import { m, domMax, LazyMotion, useInView } from "framer-motion";
import { scrollReveal } from "../animation";

const UseScroll = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  return (
    <LazyMotion features={domMax} strict>
      <m.div
        layout
        ref={ref}
        variants={scrollReveal}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
};

export default UseScroll;
