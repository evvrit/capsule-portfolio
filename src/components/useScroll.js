// Animations
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const useScroll = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: "some" });
  return (
    <motion.div
      style={{
        opacity: isInView ? 1 : 0,
        transition: "all 0.8s ease",
      }}
    >
      {children}
    </motion.div>
  );
};
