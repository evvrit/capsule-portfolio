// Animations
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { scrollReveal } from "../animation";

const UseScroll = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  return (
    <motion.div
      layout
      ref={ref}
      variants={scrollReveal}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

export default UseScroll;
