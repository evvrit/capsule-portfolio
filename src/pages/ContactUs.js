import React from "react";
// Animations
import { motion } from "framer-motion";
import { pageAnim } from "../animation";

const Contact = () => {
  return (
    <motion.div
      variants={pageAnim}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <h1>Contact Us</h1>
    </motion.div>
  );
};

export default Contact;
