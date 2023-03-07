import React, { useState } from "react";
import { motion } from "framer-motion";
import { lineAnim } from "../animation";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <motion.div
        variants={lineAnim}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bookend-line"
      ></motion.div>
    </motion.div>
  );
};

export default Toggle;
