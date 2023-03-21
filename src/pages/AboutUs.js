import React from "react";
//Page components
import AboutSection from "../components/AboutSection";
import StackSection from "../components/StackSection";
import MoreSection from "../components/MoreSection";
// Animations
import { domAnimation, m, LazyMotion } from "framer-motion";
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
    <LazyMotion features={domAnimation} strict>
      <m.div variants={pageAnim} initial="hidden" animate="show">
        <AboutSection />
        <StackSection
          technologies={technologies}
          railsInclude={true}
          herokuInclude={true}
        />
        <MoreSection />
      </m.div>
    </LazyMotion>
  );
};

export default AboutUs;
