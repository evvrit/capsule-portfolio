// Animations
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const UseScroll = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: "some" });
  return (
    <motion.div
      layout
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transition: "all 0.8s ease",
      }}
    >
      {children}
    </motion.div>
  );
};

export default UseScroll;
