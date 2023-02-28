import React from "react";
//Page components
import AboutSection from "../components/AboutSection";
import StackSection from "../components/StackSection";
import FaqSection from "../components/FaqSection";
// Animations
import { motion } from "framer-motion";
import { pageAnim } from "../animation";

const AboutUs = () => {
  const technologies = [
    { icon: ["fab", "react"], name: "React" },
    { icon: ["fab", "git"], name: "Git" },
    { icon: ["fab", "figma"], name: "Figma" },
    { icon: ["fab", "sass"], name: "Sass" },
    { icon: ["fab", "js"], name: "Javascript" },
    { icon: ["fab", "github"], name: "Github" },
    { icon: ["fab", "wordpress"], name: "Wordpress" },
    { icon: ["fab", "python"], name: "Python" },
    { icon: ["fab", "html5"], name: "HTML5" },
  ];

  return (
    <motion.div variants={pageAnim} initial="hidden" animate="show">
      <AboutSection />
      <StackSection technologies={technologies} />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
